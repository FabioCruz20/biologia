import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { QuizMenuPage } from '../quiz-menu/quiz-menu';
import { TutorialMenuPage } from '../tutorial-menu/tutorial-menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  quizMenuPage = QuizMenuPage;
  tutorialMenuPage = TutorialMenuPage;

  constructor(public navCtrl: NavController) {

  }

}
