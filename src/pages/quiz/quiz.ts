import { Component, OnInit, ViewChild } from '@angular/core';

import { NavParams, Slides } from 'ionic-angular';

import { Quiz, Alternativa } from '../../data/quiz.interface';

import { QuizResultPage } from '../quiz-result/quiz-result';

@Component({
    selector: 'page-quiz',
    templateUrl: 'quiz.html'
})
export class QuizPage implements OnInit {
    @ViewChild(Slides) slides: Slides;

    quiz: Quiz;
    answers: Alternativa[] = [];
    quizResultPage = QuizResultPage;

    constructor(private navParams: NavParams) {}

    ngOnInit() {
        this.quiz = this.navParams.data;
    }

    saveAnswer(alt, questionIndex) {
        if (alt) {
            this.answers[questionIndex] = alt;
        }
        console.log(this.answers);
    }

    previous() {
        this.slides.slidePrev(300);
    }

    next() {
        this.slides.slideNext(300);
    }

    formBeginning() {
        return this.slides.isBeginning();
    }

    formEnd() {
        return this.slides.isEnd();
    }

    quizIncomplete() {
        let a = this.answers.filter(Boolean);
        return a.length != this.quiz.questoes.length;
    }

    submit() {
        console.log(this.answers);
    }

}