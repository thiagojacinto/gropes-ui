import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
// https://coolors.co/264653-2a9d8f-e9c46a-f4a261-e76f51
@Component({
  selector: 'app-grafico-barras',
  templateUrl: './grafico-barras.component.html',
})
export class GraficoBarrasComponent implements OnChanges {
  dados: any;
  opcoes: any;
  @Input() score: number = 0;

  constructor() {
    this.dados = {
      labels: ['W18', 'W19', 'W20', 'W21'],
      datasets: [
        {
          label: 'Score',
          backgroundColor: '#e9c46a',
          data: [
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
            Math.floor(Math.random() * 1000),
          ],
        },
      ],
    };

    this.opcoes = {
      legend: {
        labels: {
          fontColor: '#264653',
        },
      },
      scales: {
        xAxes: [
          {
            ticks: {
              fontColor: '#264653',
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              fontColor: '#264653',
            },
          },
        ],
      },
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.score) {
      this.dados.datasets[0].data.push(this.score);
      this.dados.datasets[0].data.reverse();

      while (this.dados.datasets[0].data.length > 4) {
        this.dados.datasets[0].data.pop()
      };

      this.dados.datasets[0].data.reverse();
    }
  }
  
}
