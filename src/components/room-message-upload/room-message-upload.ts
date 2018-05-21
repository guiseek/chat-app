import { Component, ViewChild } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'room-message-upload',
  templateUrl: 'room-message-upload.html'
})
export class RoomMessageUploadComponent {
  @ViewChild('imageInput') imageInput;
  upload = new FormGroup({
    code: new FormControl(''),
    image: new FormControl('')
  });

  constructor(public viewCtrl: ViewController) { }
  
  get code(): any { return this.upload.get('code') };
  get image(): any { return this.upload.get('image') };
  takePicture(): void {
    this.imageInput.nativeElement.click();
  }
  processWebImage($event) {
    let reader = new FileReader();
    reader.onload = (readerEvent) => {
      let imageData = (readerEvent.target as any).result;
      this.image.setValue(imageData);
    };
    reader.readAsDataURL($event.target.files[0]);
  }
  save() {
    this.viewCtrl.dismiss(this.upload.value);
  }
}
