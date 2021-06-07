import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ProgressSpinnerModule } from "primeng/progressspinner";
import { DialogModule } from 'primeng/dialog';

import { CarregamentoComponent } from './carregamento.component';
import { CarregamentoInterceptor } from './carregamento.interceptor';

@NgModule({
  declarations: [
    CarregamentoComponent
  ],
  imports: [
    CommonModule,
    ProgressSpinnerModule,
    DialogModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CarregamentoInterceptor,
    multi: true
  }],
  exports: [
    CarregamentoComponent
  ]
})
export class CarregamentoModule { }
