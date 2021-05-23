import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ProgressBarModule } from 'primeng/progressbar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CardModule } from 'primeng/card';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TooltipModule } from 'primeng/tooltip';
import {DividerModule} from 'primeng/divider';

import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { DateMaskDirective } from '../utils/data-mask.directive';

@NgModule({
  declarations: [RegistrarUsuarioComponent, DateMaskDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    InputMaskModule,
    PasswordModule,
    ButtonModule,
    CalendarModule,
    InputSwitchModule,
    SelectButtonModule,
    ProgressBarModule,
    AutoCompleteModule,
    CardModule,
    MessageModule,
    MessagesModule,
    TooltipModule,
    DividerModule
  ],
  exports: [RegistrarUsuarioComponent],
})
export class RegistroModule {}
