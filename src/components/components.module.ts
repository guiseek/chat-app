import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { RoomMessagesComponent } from './room-messages/room-messages';
import { RoomMessageComponent } from './room-message/room-message';
@NgModule({
	declarations: [
    RoomMessagesComponent,
    RoomMessageComponent
  ],
	imports: [
    IonicModule
  ],
	exports: [
    RoomMessagesComponent,
    RoomMessageComponent
  ]
})
export class ComponentsModule {}
