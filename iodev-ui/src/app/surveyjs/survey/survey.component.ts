import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as SurveyJS from 'survey-angular';

SurveyJS.StylesManager.applyTheme('modern');

@Component({
  selector: 'lib-survey',
  templateUrl: './survey.component.html'
})
export class SurveyComponent implements OnInit {

  @Output() submitSurvey = new EventEmitter<any>();
  @Input() json!: string;
  result: any;

  constructor() {}

  ngOnInit(): void {
    const surveyModel = new SurveyJS.Model(this.json);

    surveyModel.onComplete.add((result, options) => {
      this.submitSurvey.emit(result.data);
      this.result = result.data;
    });

    SurveyJS.SurveyNG.render('surveyElement', { model: surveyModel });
  }
}
