import { Component } from '@angular/core';
import { IonicPage, NavController, 
  LoadingController, AlertController} from 'ionic-angular';

import { NgForm } from '@angular/forms';

import { AuthService } from '../../services/auth';

//import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private authServ: AuthService
  ) {
  }

  onLogin(form: NgForm) {
    //console.log(form.value);

    // animação de carregamento
    const loading = this.loadingCtrl.create({
      content: 'Espere um pouco...'
    });
    loading.present();

    this.authServ.login(form.value.email, form.value.password)
      .then(user => {
        // sucesso. finaliza a animação de carregamento
        // e muda a página
        loading.dismiss();
        //this.navCtrl.setRoot(HomePage);
      })
      .catch(error => {
        // falha. finaliza a animação de carregamneto
        // e exibe um alerta
        loading.dismiss();

        let traducao = { 
          'auth/email-already-in-use': 
          'O endereço de email já está sendo usado em outra conta.',
          'auth/network-request-failed':
          'Falha de conexão com a Internet.'
        }

        this.exibeAlerta('Erro!', traducao[error.code] || error.message);
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
