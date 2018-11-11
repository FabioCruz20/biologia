import { Component, OnInit } from '@angular/core';

import { Tutorial } from '../../data/tutorial.interface';
import { TutorialService } from '../../services/tutorial';

import { TutorialPage } from '../tutorial/tutorial';

@Component({
    selector: 'page-tutorial-menu',
    templateUrl: 'tutorial-menu.html'
})
export class TutorialMenuPage implements OnInit {

    tutorials: Tutorial[];
    tutorialPage = TutorialPage;

    constructor(private tutorialServ: TutorialService) {}

    ngOnInit() {
        this.tutorials = this.tutorialServ.getTutorials();
    }
}