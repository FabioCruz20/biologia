import { Component, OnInit } from '@angular/core';

import { QuizService } from '../../services/quiz';
import { Quiz } from '../../data/quiz.interface';

import { QuizPage } from '../quiz/quiz';

@Component({
    selector: 'page-quiz-menu',
    templateUrl: 'quiz-menu.html'
})
export class QuizMenuPage implements OnInit {

    quizes: Quiz[];
    quizPage = QuizPage;

    constructor(private quizServ: QuizService) {}

    ngOnInit() {
        this.quizes = this.quizServ.getQuizes();
    }
}