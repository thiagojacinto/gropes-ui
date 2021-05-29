import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChartModule } from 'primeng/chart';
import { TimelineModule } from 'primeng/timeline';
import { ScrollTopModule } from 'primeng/scrolltop';
import { DialogModule } from 'primeng/dialog';

import { DashboardUsuarioComponent } from './dashboard-usuario/dashboard-usuario.component';
import { GraficoBarrasComponent } from './grafico-barras/grafico-barras.component';
import { GraficoCalculosComponent } from './grafico-calculos/grafico-calculos.component';
import { ListaItemsComponent } from './lista-items/lista-items.component';
import { ItemComponent } from './lista-items/item/item.component';

@NgModule({
  declarations: [
    DashboardUsuarioComponent,
    GraficoBarrasComponent,
    GraficoCalculosComponent,
    ListaItemsComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    ChartModule,
    TimelineModule,
    ScrollTopModule,
    DialogModule
  ],
  exports: [
    DashboardUsuarioComponent,
    GraficoBarrasComponent
  ]
})
export class DashboardModule { }
