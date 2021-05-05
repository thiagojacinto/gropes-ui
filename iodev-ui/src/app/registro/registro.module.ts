import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from "primeng/inputtext";
import { InputMaskModule } from 'primeng/inputmask';

import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';

@NgModule({
  declarations: [
    RegistrarUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    InputMaskModule
  ],
  exports: [
    RegistrarUsuarioComponent
  ]
})
export class RegistroModule { }
