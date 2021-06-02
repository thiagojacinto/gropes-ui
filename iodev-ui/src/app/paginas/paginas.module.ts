import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DividerModule } from 'primeng/divider';

import { HeaderModule } from './header/header.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HeaderModule,
    DividerModule
  ],
  exports: [
    FooterComponent
  ]
})
export class PaginasModule { }
