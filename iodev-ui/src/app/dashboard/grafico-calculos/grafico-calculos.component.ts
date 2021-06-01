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
      labels: ['% para próximo nível', '% Score'],
      datasets: [
        {
          data: [100 - this.percentual, this.percentual],
          backgroundColor: ['#CFF2EF', '#E76F51'],
          hoverBackgroundColor: ['#228176', '#E0451F'],
          borderColor: ['#fff', '#7E2711'],
        },
      ],
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.score) {
      this.percentual = this.calcularPercentualScore(this.score);
      console.log(`[INFO] CHANGE of SCORE: ${this.score}`);
      console.log(`[INFO] IMPACT in PERCENTUAL to: ${this.percentual}`);

      this.dados.datasets[0].data = [100 - this.percentual, this.percentual];
      // this.dados.datasets[0].data = [100 - 45.9, 45.9];
      console.log(`[INFO] UPDATE dataset of SCORE...`);
    }
  }

  calcularPercentualScore(score: number): number {
    return Math.floor((score / this.ALVO) * 100);
  }

}
