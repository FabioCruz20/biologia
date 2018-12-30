import { Injectable } from '@angular/core';

//import tutorials from '../data/tutorial';
//import { Tutorial } from '../data/tutorial.interface';

import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase';

@Injectable()
export class TutorialService {
    //tutorialCollection: Tutorial[] = tutorials;

    constructor(private db: AngularFirestore) {}

    getTutorials() {
        //return this.tutorialCollection.slice();
        return this.db.collection('tutoriais').valueChanges();
    }

    /*
    getUrl(tutorial) {
        return (
            firebase.storage().refFromURL(tutorial.imgUrl)
                .getDownloadURL().then(
                    url => {
                        //console.log(url);
                        return url;
                    }
                )
        );
    }
    */
}