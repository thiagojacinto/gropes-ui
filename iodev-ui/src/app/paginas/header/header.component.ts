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
  sobreGropes = false;

  toggleSobreGropes() {
    this.sobreGropes = !this.sobreGropes;
  }

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
        routerLink: ['/home'],
      },
      {
        label: 'Registre-se',
        icon: PrimeIcons.USER_PLUS,
        routerLink: ['/registro/usuario'],
      },
      {
        label: 'Análise',
        icon: PrimeIcons.CHART_LINE,
        routerLink: ['/dashboard/5'],
      },
      {
        label: 'Sobre',
        icon: PrimeIcons.BOOK,
        command: (evento: any) => this.toggleSobreGropes()
      },
      {
        label: 'Blog',
        command: (evento: any) => this.funcionalidadeIndisponivel(),
      },
    ];
  }
}
