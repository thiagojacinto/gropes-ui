import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css'],
})
export class RegistrarUsuarioComponent implements OnInit {
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
    profissional: this.fb.array([
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
    pessoal: this.fb.array([
      this.fb.group({
        tecnologia: ['', Validators.required],
        dificuldade: ['', Validators.required],
        dataIni: ['', Validators.required],
        dataFim: ['', Validators.required],
        maisDe24Meses: [false],
      }),
    ]),
  });
  
  onSubmit() {
    console.warn(this.registrarUsuario.value);
  }
}