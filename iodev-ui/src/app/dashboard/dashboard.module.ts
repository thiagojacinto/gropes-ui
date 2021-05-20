import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';

import { DashboardUsuarioComponent } from './dashboard-usuario/dashboard-usuario.component';
import { GraficoBarrasComponent } from './grafico-barras/grafico-barras.component';

@NgModule({
  declarations: [
    DashboardUsuarioComponent,
    GraficoBarrasComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    ChartModule
  ],
  exports: [
    DashboardUsuarioComponent,
    GraficoBarrasComponent
  ]
})
export class DashboardModule { }
