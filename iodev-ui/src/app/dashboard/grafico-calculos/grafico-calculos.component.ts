import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-grafico-calculos',
  templateUrl: './grafico-calculos.component.html'
})
export class GraficoCalculosComponent implements OnChanges {
  @Input() score: number = 473;
  dados: any;
  percentual: number = 0;
  ALVO = 1000;

  constructor() {
    this.dados = {
      labels: ['Alvo', 'Score'],
      datasets: [
        {
          data: [100 - this.percentual, this.percentual],
          backgroundColor: ['#264653', '#E76F51'],
          hoverBackgroundColor: ['#228176', '#E0451F'],
        },
      ],
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.score) {
      this.percentual = this.calcularPercentualScore(this.score);
      console.log(`[INFO] CHANGE of SCORE: ${this.score}`);
      console.log(`[INFO] IMPACT in PERCENTUAL to: ${this.percentual}`);
    }
  }

  calcularPercentualScore(score: number): number {
    return (score / this.ALVO) * 100;
  }

}
