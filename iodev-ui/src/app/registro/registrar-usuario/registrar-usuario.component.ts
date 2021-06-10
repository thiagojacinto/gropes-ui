import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { NavegacaoService } from 'src/app/utils/navegacao-service.service';

import techList from 'src/assets/techList.json';
import { RegistroService } from '../registro.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css'],
  providers: [MessageService],
})
export class RegistrarUsuarioComponent implements OnInit {
  forms: string[] = ['basico', 'profissional', 'pessoal'];
  formVisivel = 0;
  profAtivo = 0;
  pessoalAtivo = 0;
  opcoesClassificacao: number[] = [1, 2, 3, 4, 5];
  todasTecnologias = techList;
  listaTecnologias = [''];
  sugestaoNaoEncontrada = 'Ops... Tecnologia não encontrada';
  avancarOuConcluir = this.isPessoal() ? 'Concluir' : 'Avançar';
  dateHoje = new Date();
  trabalhoAutonomo = false;

  filtrarTechList = (evento: any) => {
    this.listaTecnologias = this.todasTecnologias
      .filter((tecnologia) => {
        return tecnologia.name.toLowerCase().includes((evento.query as string).toLowerCase());
      })
      .map((selecionada) => selecionada.name);
  }

  constructor(
    private fb: FormBuilder,
    private msgService: MessageService,
    private registroService: RegistroService,
    private router: Router,
    private navegacaoService: NavegacaoService
  ) {}

  get basicoForm() {
    return this.fb.group({
      nome: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      nascimento: ['', Validators.required],
      senha: [
        '',
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
      endereco: this.fb.group({
        rua: ['', Validators.required],
        numero: ['', Validators.required],
        complemento: [''],
        cep: [
          '',
          Validators.compose([
            Validators.minLength(8),
            Validators.maxLength(8),
          ]),
        ],
      }),
    });
  }

  get tecnologiaProfissionalForm() {
    return this.fb.group({
      tecnologia: [''],
      frequenciaDeUso: [''],
      dataIni: [''],
      dataFim: [''],
      utilizaAtual: [false],
    });
  }

  get profissionalForm() {
    return this.fb.group({
      autonomo: [false],
      empresa: [{ value: '', disabled: false }],
      dataIni: [''],
      dataFim: [''],
      trabalhoAtual: [false],
      descricao: ['', Validators.compose([Validators.minLength(3)])],
      dificuldade: [''],
      diversidade: [''],
      tecnologias: this.fb.array([this.tecnologiaProfissionalForm]),
    });
  }

  get pessoalForm() {
    return this.fb.group({
      tecnologia: ['', Validators.required],
      aplicacaoPratica: ['', Validators.required],
      dataIni: ['', Validators.required],
      dataFim: ['', Validators.required],
      maisDe24Meses: [false],
    });
  }

  registrarUsuario = this.fb.group({
    basico: this.basicoForm,
    profissionais: this.fb.array([this.profissionalForm]),
    pessoais: this.fb.array([this.pessoalForm]),
  });

  getProfissionaisControls() {
    return (this.registrarUsuario.get('profissionais') as FormArray).controls;
  }
  getTecnologiasControls(profissionalForm: AbstractControl) {
    return ((profissionalForm as FormGroup).get('tecnologias') as FormArray)
      .controls;
  }
  getPessoaisControls() {
    return (this.registrarUsuario.get('pessoais') as FormArray).controls;
  }

  addExpProfissional() {
    (this.registrarUsuario.get('profissionais') as FormArray).push(
      this.profissionalForm
    );
  }

  removerExpProfissional(index: number) {
    (this.registrarUsuario.get('profissionais') as FormArray).removeAt(index);
  }

  addTecnologiaProfissional(profissional: AbstractControl) {
    ((profissional as FormGroup).get('tecnologias') as FormArray).push(
      this.tecnologiaProfissionalForm
    );
  }

  removerTecnologiaProfissional(profissional: AbstractControl, index: number) {
    ((profissional as FormGroup).get('tecnologias') as FormArray).removeAt(
      index
    );
  }

  addExpPessoal() {
    (this.registrarUsuario.get('pessoais') as FormArray).push(this.pessoalForm);
  }

  removerExpPessoal(index: number) {
    (this.registrarUsuario.get('pessoais') as FormArray).removeAt(index);
  }

  limiteDataExpPessoal(pessoal: AbstractControl): Date {
    return ((pessoal as FormGroup).get('dataIni') as FormControl).value;
  }
  limiteDataExpProfissional(profissional: AbstractControl): Date {
    return ((profissional as FormGroup).get('dataIni') as FormControl).value;
  }
  limiteDataTech(tecnologia: AbstractControl): Date {
    return ((tecnologia as FormGroup).get('dataIni') as FormControl).value;
  }

  toggleDataAtual(evento: any, control: AbstractControl) {
    const setDataAtual = evento.checked;
    const inputDataFim = (control as FormGroup).get('dataFim') as FormControl;

    if (setDataAtual) {
      inputDataFim.setValue(this.dateHoje);
    } else {
      inputDataFim.setValue(null);
    }
  }

  toggleDisabledEmpresa(evento: any, profissional: AbstractControl) {
    const isAutonomo = evento.checked;
    const inputEmpresa = (profissional as FormGroup).get(
      'empresa'
    ) as FormControl;

    if (isAutonomo) {
      inputEmpresa.setValue('Autonomo');
      inputEmpresa.disable({ onlySelf: true });
    } else {
      inputEmpresa.setValue(null);
      inputEmpresa.enable({ onlySelf: true });
    }
  }

  isBasico() {
    return this.forms[this.formVisivel] === this.forms[0];
  }
  isProfissional() {
    return this.forms[this.formVisivel] === this.forms[1];
  }
  isPessoal() {
    return this.forms[this.formVisivel] === this.forms[2];
  }

  avancarFormVisivel(): void {
    if (this.formVisivel === 2) {
      return this.onSubmit();
    }
    this.formVisivel++;
    this.formVisivel = Math.min(this.formVisivel, 2);
  }
  voltarFormVisivel(): void {
    this.formVisivel--;
    if (this.formVisivel < 0) {
      this.navegacaoService.voltar();
    }
    this.formVisivel = Math.max(this.formVisivel, 0);
  }

  atualizarProgresso(): number {
    return 25 + this.formVisivel * 25;
  }

  isDisabled() {
    return this.registrarUsuario.invalid && this.isPessoal();
  }

  verificarErroNoPreenchimento() {
    let { nome } = this.registrarUsuario.value.basico;
    nome = nome ? ' ' + nome : '';
    this.isDisabled() &&
      this.msgService.add({
        severity: 'warn',
        summary: `Ops${nome}, verifique se preencheu corretamente o registro.`,
      });
    return this.isDisabled();
  }

  enviarRegistro() {
    this.registroService
      .registrarNovoUsuario(this.registrarUsuario.value)
      .subscribe(
        (res) => {
          const novoUsuarioId = res?.Registro.Usuario.id;

          this.msgService.add({
            severity: 'success',
            summary: `Registro realizado com sucesso: ID = ${novoUsuarioId}. Nossas boas vindas, ${res?.Registro.Usuario.nome}`,
          });

          setTimeout(() => {
            this.router.navigate(['dashboard', novoUsuarioId])
            
          }, 3000);
        },
        (err) => {
          this.msgService.add({
            severity: 'error',
            summary: 'Erro ao tentar cadastrar. Nosso suporte já foi alertado.',
          });
        }
      );
  }

  onSubmit() {
    this.verificarErroNoPreenchimento();
    if (!this.isDisabled()) {
      this.enviarRegistro();
    }
  }

  ngOnInit(): void {
    this.registrarUsuario;
  }
}
