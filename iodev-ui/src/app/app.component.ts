import { Component } from '@angular/core';
import surveyData from '../assets/survey-data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ioDev';
  data: string;

  constructor() {
    this.data = JSON.stringify(surveyData);
  }
}
