import { Component } from '@angular/core';


@Component({
  selector: 'app-heart',
  template: `  <ion-header>
  <ion-navbar>
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>heart</ion-title>
  </ion-navbar>
</ion-header>


<ion-content padding>

  <h3>Heart</h3>

  HearComponent

</ion-content>`
})
export class HeartComponent {
  constructor() {

  }
}
