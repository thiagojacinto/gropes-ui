import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css'],
})
export class RegistrarUsuarioComponent implements OnInit {
  forms: string[] = ['basico', 'profissional', 'pessoal'];
  formVisivel: number = 0;
  profAtivo: number = 0;
  pessoalAtivo: number = 0;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  registrarUsuario = this.fb.group({
    basico: this.fb.group({
      nome: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
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
    }),
    profissionais: this.fb.array([
      this.fb.group({
        empresa: ['', Validators.required],
        dataIni: ['', Validators.required],
        dataFim: ['', Validators.required],
        trabalhoAtual: [false],
        descricao: [
          '',
          Validators.compose([Validators.required, Validators.minLength(3)]),
        ],
        dificuldade: ['', Validators.required],
        tecnologias: this.fb.array([
          this.fb.group({
            tecnologia: ['', Validators.required],
            dificuldade: [''],
            dataIni: ['', Validators.required],
            dataFim: ['', Validators.required],
            utilizaAtual: [false],
          }),
        ]),
      }),
    ]),
    pessoais: this.fb.array([
      this.fb.group({
        tecnologia: ['', Validators.required],
        dificuldade: ['', Validators.required],
        dataIni: ['', Validators.required],
        dataFim: ['', Validators.required],
        maisDe24Meses: [false],
      }),
    ]),
  });

  get profissionais() {
    return this.registrarUsuario.get('profissionais') as FormArray;
  }

  addExpProfissional() {
    this.profissionais.push(
      this.fb.group({
        empresa: ['', Validators.required],
        dataIni: ['', Validators.required],
        dataFim: ['', Validators.required],
        trabalhoAtual: [false],
        descricao: [
          '',
          Validators.compose([Validators.required, Validators.minLength(3)]),
        ],
        dificuldade: ['', Validators.required],
        tecnologias: this.fb.array([
          this.fb.group({
            tecnologia: ['', Validators.required],
            dificuldade: [''],
            dataIni: ['', Validators.required],
            dataFim: ['', Validators.required],
            utilizaAtual: [false],
          }),
        ]),
      })
    );
  }

  get pessoais() {
    return this.registrarUsuario.get('pessoais') as FormArray;
  }

  addExpPessoal() {
    this.pessoais.push(
      this.fb.group({
        tecnologia: ['', Validators.required],
        dificuldade: ['', Validators.required],
        dataIni: ['', Validators.required],
        dataFim: ['', Validators.required],
        maisDe24Meses: [false],
      })
    );
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
    if (this.formVisivel === 2) return this.onSubmit();
    this.formVisivel++;
    this.formVisivel = Math.min(this.formVisivel, 2);
  }
  voltarFormVisivel(): void {
    this.formVisivel--;
    this.formVisivel = Math.max(this.formVisivel, 0);
  }

  onSubmit() {
    console.warn(this.registrarUsuario.value);
  }
}
