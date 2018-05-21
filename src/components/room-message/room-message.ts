import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { RoomMessageUploadComponent } from './../room-message-upload/room-message-upload';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'room-message',
  templateUrl: 'room-message.html'
})
export class RoomMessageComponent implements OnInit {
  message = new FormGroup({
    user: new FormControl('', Validators.required),
    text: new FormControl('', Validators.required),
    code: new FormControl(''),
    image: new FormControl('')
  });
  isReadyToSend: boolean;
  @Input() from: any;
  @Output() send = new EventEmitter<any>();
  constructor(public modalCtrl: ModalController) {
    this.message.valueChanges.subscribe(() => {
      this.isReadyToSend = this.message.valid;
    });
  }
  get user(): any { return this.message.get('user') };
  get text(): any { return this.message.get('text') };
  get code(): any { return this.message.get('code') };
  get image(): any { return this.message.get('image') };
  ngOnInit() {
    this.user.setValue(this.from);
  }
  openUploadModal() {
    let modal = this.modalCtrl.create(RoomMessageUploadComponent)
    modal.present();
    modal.onDidDismiss(upload => {
      if (upload) {
        if (upload.code) this.code.setValue(upload.code.trim());
        if (upload.image) this.image.setValue(upload.image);
      }
    });
  }
  sendMessage() {
    this.send.emit(this.message.value);
    this.text.reset();
    this.code.reset();
    this.image.reset();
  }
}
