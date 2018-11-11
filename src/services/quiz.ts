import quizes from '../data/quiz';
import { Quiz } from '../data/quiz.interface';

export class QuizService {
    quizCollection: Quiz[] = quizes;

    getQuizes() {
        return this.quizCollection.slice();
    }
}