import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { QuizMenuPage } from '../pages/quiz-menu/quiz-menu';
import { QuizPage } from '../pages/quiz/quiz';
import { QuizResultPage } from '../pages/quiz-result/quiz-result';

import { QuizService } from '../services/quiz';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuizMenuPage,
    QuizPage,
    QuizResultPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuizMenuPage,
    QuizPage,
    QuizResultPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuizService
  ]
})
export class AppModule {}
