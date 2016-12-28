import {Content} from 'ionic-angular';
import {Component, ViewChild} from '@angular/core';


@Component({
  selector: 'page-content',
  templateUrl: 'content.html'
})
export class ContentExample {

  @ViewChild(Content) content: Content;
  constructor() {
    
  }

  gotoBottom() {
    this.content.scrollToBottom();
  }
}
