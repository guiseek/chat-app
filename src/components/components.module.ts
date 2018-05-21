import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { RoomMessagesComponent } from './room-messages/room-messages';
import { RoomMessageComponent } from './room-message/room-message';
import { RoomMessageUploadComponent } from './room-message-upload/room-message-upload';
@NgModule({
	declarations: [
    RoomMessagesComponent,
    RoomMessageComponent,
    RoomMessageUploadComponent,
  ],
	imports: [
    IonicModule
  ],
	exports: [
    RoomMessagesComponent,
    RoomMessageComponent,
    RoomMessageUploadComponent,
  ]
})
export class ComponentsModule {}
