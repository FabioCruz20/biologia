import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { QuizMenuPage } from '../quiz-menu/quiz-menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  quizMenuPage = QuizMenuPage;

  constructor(public navCtrl: NavController) {

  }

}
