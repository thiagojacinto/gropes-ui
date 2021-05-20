import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';

import { DashboardUsuarioComponent } from './dashboard-usuario/dashboard-usuario.component';

@NgModule({
  declarations: [
    DashboardUsuarioComponent
  ],
  imports: [
    CommonModule,
    CardModule
  ]
})
export class DashboardModule { }
