import { Component } from '@angular/core';
import { IonicPage, NavController, 
  LoadingController, AlertController } from 'ionic-angular';

import { NgForm } from '@angular/forms';  

import { AuthService } from '../../services/auth';

//import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private authServ: AuthService
  ) {}

  onSignup(form: NgForm) {
    //console.log(form.value);

    // inicia animação de carregamento
    const loading = this.loadingCtrl.create({
      content: 'Espere um pouco...'
    });
    loading.present();

    this.authServ.signup(form.value.email, form.value.password)
      .then(user => {
        // sucesso. tire a animação de carregamento e vá para
        // a página inicial.
        loading.dismiss();
        //this.navCtrl.push(HomePage);

        console.log(user);
      })
      .catch(error => {
        // falha. exiba uma mensagem de erro.
        loading.dismiss();

        let traducao = { 
          'auth/email-already-in-use': 
          'O endereço de email já está sendo usado em outra conta.',
          'auth/network-request-failed':
          'Falha de conexão com a Internet.'
        };

        this.exibeAlerta('Erro!', traducao[error.code] || error.message);

        console.log(error);
      });
  }

   /**
     * Exibe uma mensagem em um componente de alerta.
     * @param {string} titulo título da mensagem
     * @param {string} msg corpo da mensagem
     */
    exibeAlerta(titulo: string, msg: string) {
      const alerta = this.alertCtrl.create({
          title: titulo,
          message: msg,
          buttons: ['OK']
      });
      alerta.present();
    }

}
