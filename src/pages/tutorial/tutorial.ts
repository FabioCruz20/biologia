import { Component, OnInit, ViewChild } from '@angular/core';

import { NavParams, Slides } from 'ionic-angular';

import { Tutorial } from '../../data/tutorial.interface';

@Component({
    selector: 'page-tutorial',
    templateUrl: 'tutorial.html'
})
export class TutorialPage implements OnInit {
    @ViewChild(Slides) slides: Slides;

    tutorial: Tutorial;

    constructor(private navParams: NavParams) {}

    ngOnInit() {
        console.log(this.navParams.data);
        this.tutorial = this.navParams.data;
        //console.log(this.tutorial);
    }

    previous() {
        this.slides.slidePrev(300);
    }

    next() {
        this.slides.slideNext(300);
    }

    tutorialBeginning() {
        return this.slides.isBeginning();
    }

    tutorialEnd() {
        return this.slides.isEnd();
    }

}