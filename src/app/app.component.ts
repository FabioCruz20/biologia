import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, 
  MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';

// firebase para a inicialização da comunicação com o bd
// e monitoramento do estado de autenticação do usuário
import firebase from 'firebase';
import { firebaseConfig } from './credentials';

// serviço de autenticação para fazer logout
import { AuthService } from '../services/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  loginPage = LoginPage;
  signupPage = SignupPage;

  isAuthenticated = false;

  // para controlar a navegação entre páginas neste momento em que
  // a pilha de páginas ainda está sendo criada
  @ViewChild('nav') nav: NavController;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private menuCtrl: MenuController,
    private authServ: AuthService) {
    
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isAuthenticated = true;
        this.rootPage = HomePage;
      }
      else {
        this.isAuthenticated = false;
        this.rootPage = LoginPage;
      }
    })

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  /**
   * Carrega uma página
   * @param page Referência a uma classe de Página
   */
  onLoad(page) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogout() {
    this.authServ.logout();
    this.nav.setRoot(this.loginPage);
    this.menuCtrl.close();
  }
}

