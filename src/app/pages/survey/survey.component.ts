import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  baseUrl = "assets/images/tf-";
  images: Array<String> = [];
  constructor() {
    for (let index = 1; index < 8; index++) {
      this.images.push(this.baseUrl + String(index) + ".webp");
    }
  }

  ngOnInit(): void {

  }

}
