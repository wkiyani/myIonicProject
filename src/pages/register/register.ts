import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  username: string;
  password: string;
  confpass: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  register() {
    if(this.password == this.confpass){
      console.log('Username '+ this.username + ' with password ' + this.password + ' has registered'); 
      
    } else {
      console.log('Username '+ this.username + ' with password ' + this.password + ' has attempted to register');
    }
  }

  goLogin() {
    this.navCtrl.push(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
