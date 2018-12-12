import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { connect, Client } from 'mqtt';


/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  client: Client;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.client  = connect('mqtt://broker.hivemq.com/mqtt',{port:8000});

    this.client.on('connect',()=>{
      this.client.publish('BLEconnected/fc:9b:f3:c7:79:6a', '{"beaconMacAddress" : "c6:37:90:cc:3b:39"}');
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

}
