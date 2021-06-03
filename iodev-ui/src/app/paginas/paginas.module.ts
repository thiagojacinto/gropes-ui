import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

import { HeaderModule } from './header/header.module';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { Erro404Component } from './erro404/erro404.component';

@NgModule({
  declarations: [
    FooterComponent,
    HomeComponent,
    Erro404Component
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    DividerModule,
    ButtonModule,
    DialogModule,
    InputTextModule
  ],
  exports: [
    FooterComponent
  ]
})
export class PaginasModule { }
