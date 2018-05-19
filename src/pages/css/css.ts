import { FbProvider } from './../../providers/fb/fb';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-css',
  templateUrl: 'css.html'
})
export class CssPage {
  messages: Observable<any>;
  user: any;
  constructor(public fbProvider: FbProvider) {
    this.user = window.localStorage.getItem('user');
  }
  ionViewDidLoad() {
    this.messages = this.fbProvider.getList('css').valueChanges();
  }
  send(message) {
    this.fbProvider.addItem('css', message);
  }
}
