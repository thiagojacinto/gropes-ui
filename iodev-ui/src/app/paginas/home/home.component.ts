import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  exibeLogin = false;
  avisoDisponibilidade = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  funcionalidadeIndisponivel() {
    this.avisoDisponibilidade = true;
  }

  goToRegistro(evento: any) {
    this.router.navigate(['registro', 'usuario']);
  }

  exibirLogin() {
    this.exibeLogin = true;
  }
}
