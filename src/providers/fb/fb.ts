import { Message } from './../../models/message';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FbProvider {

  constructor(public afs: AngularFirestore) { }

  getObject(document) {
    return this.afs.doc(document);
  }

  getList(document) {
    return this.afs.collection(document, ref => {
      return ref.orderBy('timestamp', 'desc');
    });
  }

  addItem(document, item: Message) {
    item.timestamp = new Date();
    return this.afs.collection(document).add(item);
  }

  removeItem(document, key) {
    return this.afs.collection(document).doc(key).delete();
  }

  updateItem(document, data) {
    return this.afs.doc(document).update(data);
  }

  query(document, options) {
    return this.afs.collection(document, options)
  }
}
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// /*
//   Generated class for the FbProvider provider.

//   See https://angular.io/guide/dependency-injection for more info on providers
//   and Angular DI.
// */
// @Injectable()
// export class FbProvider {

//   constructor(public http: HttpClient) {
//     console.log('Hello FbProvider Provider');
//   }

// }
