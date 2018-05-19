import { TabsPage } from './../tabs/tabs';
import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user = new FormGroup({
    nickname: new FormControl()
  });

  constructor(public navCtrl: NavController) { }
  enter() {
    window.localStorage.setItem('user',this.user.get('nickname').value);
    this.navCtrl.setRoot(TabsPage);
  }
  ionViewDidLoad() {
  }
}
