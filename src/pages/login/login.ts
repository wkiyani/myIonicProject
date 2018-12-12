import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { RegisterPage } from '../register/register';
import { AlertController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { HTTP } from '@ionic-native/http';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

let navCtrl = this.navCtrl; 
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  login() {
    class MyHTTP {
      username: string;
      password: string;
      next_page: boolean;
      constructor(private http: HTTP) {
        this.http.post('http://localhost:3000/process_login', { username: this.username, password: this.password }, {})
          .then(data => {

            console.log(data.status);
            console.log(data.data); // data received by server
            console.log(data.headers);
            if (data.status == 200) {
              navCtrl.push(WelcomePage)
            } else {
              class AlertPage {
                constructor(public alerCtrl: AlertController) { }
                doAlert() {
                  let alert = this.alerCtrl.create({
                    title: 'Login failed',
                    message: 'Invalid username or passsword!',
                    buttons: ['OK']
                  });
                  alert.present()
                }
              }

            }

          }).catch(error => {

            console.log(error.status);
            console.log(error.error); // error message as string
            console.log(error.headers);

          });

      }
    }
  }

  goRegister() {
    this.navCtrl.push(RegisterPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
