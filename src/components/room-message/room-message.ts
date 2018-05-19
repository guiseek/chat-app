import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'room-message',
  templateUrl: 'room-message.html'
})
export class RoomMessageComponent implements OnInit {
  message = new FormGroup({
    user: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required),
  });
  isReadyToSend: boolean;
  @Input() from: any;
  @Output() send = new EventEmitter<any>();
  constructor() {
    this.message.valueChanges.subscribe(() => {
      this.isReadyToSend = this.message.valid;
    });
  }
  get user(): any { return this.message.get('user') };
  get text(): any { return this.message.get('text') };
  ngOnInit() {
    this.user.setValue(this.from);
  }
  sendMessage() {
    this.send.emit(this.message.value);
    this.text.reset();
  }
}
