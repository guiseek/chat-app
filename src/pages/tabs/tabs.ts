import { Component } from '@angular/core';
import { Events, NavController } from 'ionic-angular';
import { HtmlPage } from '../html/html';
import { JavascriptPage } from '../javascript/javascript';
import { CssPage } from '../css/css';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  user: any;
  tab1Root = HtmlPage;
  tab2Root = CssPage;
  tab3Root = JavascriptPage;

  constructor(public events: Events, public navCtrl: NavController) {
  }
  ionViewDidLoad() {
    this.user = window.localStorage.getItem('user');
    // if (window.localStorage.getItem('user')) {
    //   this.disabled = true;
    // }
  }
  logout() {
    window.localStorage.removeItem('user');
    this.navCtrl.setRoot('LoginPage');
  }

}
