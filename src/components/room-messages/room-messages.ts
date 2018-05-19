import { Component, Input } from '@angular/core';
import { Message } from './../../models/message';

@Component({
  selector: 'room-messages',
  templateUrl: 'room-messages.html'
})
export class RoomMessagesComponent {
  @Input() messages: Message[];
  constructor() { }
}
