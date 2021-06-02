import { Component, OnInit } from '@angular/core';

import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuItens!: MenuItem[];
  avisoDisponibilidade = false;

  funcionalidadeIndisponivel() {
    this.avisoDisponibilidade = true;
  }

  botaoBusca(event: any) {
    this.funcionalidadeIndisponivel();
  }
  botaoLogout(event: any) {
    this.funcionalidadeIndisponivel();
  }

  constructor() {}

  ngOnInit(): void {
    this.menuItens = [
      {
        label: 'ioDev',
      },
      {
        label: 'Registre-se',
        routerLink: ['/registro/usuario']
      },
      {
        label: 'Análise',
        icon: PrimeIcons.CHART_LINE,
        routerLink: ['/dashboard/5'],
      },
      {
        label: 'Sobre',
        icon: PrimeIcons.BOOK,
      },
      {
        label: 'Blog',
        command: (evento: any) => this.funcionalidadeIndisponivel(),
      },
    ];
  }
}
