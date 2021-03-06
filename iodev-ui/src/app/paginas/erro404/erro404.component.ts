import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-erro404',
  templateUrl: './erro404.component.html',
  styleUrls: ['./erro404.component.css']
})
export class Erro404Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.acessouRecursoInexistente();
  }

  acessouRecursoInexistente() {
    console.warn(`[INFO] ... Ops, página não encontrada: ERRO 404`);
  }

}
