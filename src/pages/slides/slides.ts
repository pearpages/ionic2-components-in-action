import {Slides} from 'ionic-angular';
import {Component, ViewChild} from '@angular/core';


@Component({
  selector: 'pages-slides',
  templateUrl: 'slides.html'
})
export class SlidesExample {

  @ViewChild('mySlider') slider: Slides;
  
  index = 0;

  constructor() {
  }

  onSlideChanged() {
    this.index = this.slider.getActiveIndex();
  }
}
