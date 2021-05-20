import { Component } from '@angular/core';

@Component({
  selector: 'app-grafico-barras',
  templateUrl: './grafico-barras.component.html',
})
export class GraficoBarrasComponent {
  dados: any;
  opcoes: any;

  constructor() {
    this.dados = {
      labels: ['W17', 'W18', 'W19', 'W20'],
      datasets: [
        {
          label: 'Score',
          backgroundColor: '#42A5F5',
          data: [0, 0, 0, 784],
        },
        {
          label: 'Tendência',
          backgroundColor: '#FFA726',
          data: [0, 0, 0, 860],
        },
      ],
    };

    this.opcoes = {
      legend: {
        labels: {
          fontColor: '#495057',
        },
      },
      scales: {
        xAxes: [
          {
            ticks: {
              fontColor: '#495057',
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              fontColor: '#495057',
            },
          },
        ],
      },
    };
  }
  
}
