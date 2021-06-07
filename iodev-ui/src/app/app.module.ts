import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './paginas/header/header.module';
import { PaginasModule } from './paginas/paginas.module';
import { BotaoVoltarDirective } from './utils/botao-voltar-directive.directive';
import { CarregamentoModule } from './utils/carregamento/carregamento.module';

@NgModule({
  declarations: [AppComponent, BotaoVoltarDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    HeaderModule,
    PaginasModule,
    CarregamentoModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
