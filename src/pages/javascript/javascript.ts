import { Component } from '@angular/core';
import { FbProvider } from './../../providers/fb/fb';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-javascript',
  templateUrl: 'javascript.html'
})
export class JavascriptPage {
  messages: Observable<any>;
  user: any;
  constructor(public fbProvider: FbProvider) {
    this.user = window.localStorage.getItem('user');
  }
  ionViewDidLoad() {
    this.messages = this.fbProvider.getList('javascript').valueChanges();
  }
  send(message) {
    this.fbProvider.addItem('javascript', message);
  }
}
