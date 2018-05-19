import { Component } from '@angular/core';
import { FbProvider } from './../../providers/fb/fb';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-html',
  templateUrl: 'html.html'
})
export class HtmlPage {
  messages: Observable<any>;
  user: any;
  constructor(public fbProvider: FbProvider) {
    this.user = window.localStorage.getItem('user');
  }
  ionViewDidLoad() {
    this.messages = this.fbProvider.getList('html').valueChanges();
  }
  send(message) {
    this.fbProvider.addItem('html', message);
  }
}
