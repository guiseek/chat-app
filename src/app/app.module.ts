import { RoomMessageComponent } from './../components/room-message/room-message';
import { RoomMessagesComponent } from './../components/room-messages/room-messages';
import { ComponentsModule } from './../components/components.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { environment } from './../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { MyApp } from './app.component';

import { HtmlPage } from '../pages/html/html';
import { JavascriptPage } from '../pages/javascript/javascript';
import { CssPage } from '../pages/css/css';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FbProvider } from '../providers/fb/fb';

@NgModule({
  declarations: [
    MyApp,
    HtmlPage,
    JavascriptPage,
    CssPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    // AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HtmlPage,
    JavascriptPage,
    CssPage,
    TabsPage,
    RoomMessagesComponent,
    RoomMessageComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FbProvider
  ]
})
export class AppModule {}
