import { Injectable } from '@angular/core';

import quizes from '../data/quiz';
import { Quiz } from '../data/quiz.interface';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class QuizService {
    quizCollection: Quiz[] = quizes;

    constructor(private db: AngularFirestore) {
        //console.log(this.db);
    }

    getQuizes() {
        //return this.quizCollection.slice();
        return this.db.collection('quizes').valueChanges();
    }
}