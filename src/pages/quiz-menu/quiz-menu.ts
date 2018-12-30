import { Component, OnInit } from '@angular/core';

import { QuizService } from '../../services/quiz';
import { Quiz } from '../../data/quiz.interface';

import { QuizPage } from '../quiz/quiz';

import { LoadingController, AlertController } from 'ionic-angular';

@Component({
    selector: 'page-quiz-menu',
    templateUrl: 'quiz-menu.html'
})
export class QuizMenuPage implements OnInit {

    quizes: Quiz[] = [];
    quizPage = QuizPage;

    constructor(
        public loadingCtrl: LoadingController,
        public alertCtrl: AlertController,
        private quizServ: QuizService
    ) {}

    ngOnInit() {
        const loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();

        this.quizServ.getQuizes()
        .subscribe(
            (data: Quiz[]) => {
                loading.dismiss();
                this.quizes = data;
            },
            error => {
                loading.dismiss();
                const alert = this.alertCtrl.create({
                    title: 'Erro!',
                    message: error.message,
                    buttons: ['OK']
                });
                alert.present();
                //console.log('error.message');
            }
        );
    }
}