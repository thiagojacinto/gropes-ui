import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor() {}

  getOrientacaoDivisor(): string {
    let layout = 'horizontal';
    if (window.innerWidth > 650) {
      layout = 'vertical'
    }
    return layout;
  }

  ngOnInit(): void {}
}
