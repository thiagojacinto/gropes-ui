import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard-usuario',
  templateUrl: './dashboard-usuario.component.html',
  styleUrls: ['./dashboard-usuario.component.css']
})
export class DashboardUsuarioComponent implements OnInit {

  dados: any;

  constructor(private activRoute: ActivatedRoute) { }

  maisInfo(): void {
    console.log('Mais info sobre !');
  }

  ngOnInit(): void {
    this.activRoute.data.subscribe(
      () => {
        this.dados = this.activRoute.snapshot.data['dados']
        console.log(this.dados);
      },
      (error) => console.error(error)
    )
  }

  get nomeUsuario(): string {
    try {
      const nomes = this.dados?.tecnologiasUsuario.map((tecUser: any) => tecUser.usuario.nome);
      const unique = [... new Set(nomes)];
      return unique[0] as string;
      
    } catch (error) {
      console.error(error);
      return '<Usuario>';
    }
  }

  get scoreUsuario(): number {
    try {
      const scores = this.dados?.tecnologiasUsuario.map((tecUser: any) => tecUser.usuario.score);
      return scores[0] ? scores[0] : 0;
      
    } catch (error) {
      console.error(error);
      return 0;
    }
  }

}
