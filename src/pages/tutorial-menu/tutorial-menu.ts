import { Component, OnInit } from '@angular/core';

import { Tutorial } from '../../data/tutorial.interface';
import { TutorialService } from '../../services/tutorial';

import { TutorialPage } from '../tutorial/tutorial';

import { LoadingController, AlertController } from 'ionic-angular';

@Component({
    selector: 'page-tutorial-menu',
    templateUrl: 'tutorial-menu.html'
})
export class TutorialMenuPage implements OnInit {

    tutorials: Tutorial[] = [];
    tutorialPage = TutorialPage;

    constructor(
        private tutorialServ: TutorialService,
        public alertCtrl: AlertController,
        public loadingCtrl: LoadingController) {}

    ngOnInit() {
        const loading = this.loadingCtrl.create({
            content: 'Carregando...'
        });
        loading.present();

        this.tutorialServ.getTutorials()
        .subscribe(
            (data: Tutorial[]) => {
                loading.dismiss();
                this.tutorials = data;
            },
            error => {
                loading.dismiss();
                const alert = this.alertCtrl.create({
                    title: 'Erro!',
                    message: error.message,
                    buttons: ['OK']
                });
                alert.present();
                //console.log(error.message);
            }
        )
    }
}