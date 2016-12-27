import { Component } from '@angular/core';


@Component({
  selector: 'app-star',
  template: `<ion-header>
  <ion-navbar>
    <button ion-button menuToggle>
      <ion-icon name="menu"></ion-icon>
    </button>
    <ion-title>Star</ion-title>
  </ion-navbar>
</ion-header>


<ion-content padding>

  <h3>Star</h3>

  StarComponent

</ion-content>
`
})
export class StarComponent {
  constructor() {

  }
}
