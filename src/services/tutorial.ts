import tutorials from '../data/tutorial';
import { Tutorial } from '../data/tutorial.interface';

export class TutorialService {
    tutorialCollection: Tutorial[] = tutorials;

    getTutorials() {
        return this.tutorialCollection.slice();
    }
}