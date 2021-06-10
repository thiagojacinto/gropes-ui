import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class NavegacaoService {
  private historicoNavegacao: string[] = [];

  constructor(
    private router: Router,
    private location: Location
  ) {
    this.router.events.subscribe((evento) => {
      if (evento instanceof NavigationEnd) {
        this.historicoNavegacao.push(evento.urlAfterRedirects)
      }
    })
  }

  voltar(): void {
    this.historicoNavegacao.pop();

    if (this.historicoNavegacao.length > 0) {
      this.location.back();
    } else {
      this.goHome();
    }
  }

  goHome(): void {
    this.router.navigate(['/home'])
  }
}
