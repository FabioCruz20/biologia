import { Component, OnInit } from '@angular/core';

import { NavParams, NavController } from 'ionic-angular';

import { Alternativa } from '../../data/quiz.interface';

@Component({
    selector: 'page-quiz-result',
    templateUrl: 'quiz-result.html'
})
export class QuizResultPage implements OnInit {

    answers: Alternativa[];
    answerCount: number;
    correctAnswers: number;

    constructor(private navParams: NavParams, private navCtrl: NavController) {}

    ngOnInit() {
        this.answers = this.navParams.data;
        this.answerCount = this.answers.length;
        this.correctAnswers = this.answers.filter((a) => {
            if (a.correta) {
                return a;
            }
        }).length;
    }

    finish() {
        this.navCtrl.popToRoot();
    }
}