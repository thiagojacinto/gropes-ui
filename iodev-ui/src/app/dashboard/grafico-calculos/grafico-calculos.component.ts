import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico-calculos',
  templateUrl: './grafico-calculos.component.html'
})
export class GraficoCalculosComponent {
  dados: any;

  constructor() {
    this.dados = {
      labels: ['Inovatividade', 'Diversidade', 'Complexidade'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: ['#264653', '#F4A261', '#E76F51'],
          hoverBackgroundColor: ['#228176', '#F08228', '#E0451F'],
        },
      ],
    };
  }


}
