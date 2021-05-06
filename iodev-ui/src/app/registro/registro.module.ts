import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from "primeng/inputtext";
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RatingModule } from 'primeng/rating';

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
    InputMaskModule,
    PasswordModule,
    ButtonModule,
    CalendarModule,
    InputSwitchModule,
    RatingModule
  ],
  exports: [
    RegistrarUsuarioComponent
  ]
})
export class RegistroModule { }
