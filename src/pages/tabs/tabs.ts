import { StarComponent } from './star';
import { HeartComponent } from './heart';
import { Component } from '@angular/core';


@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsComponent {

    tab1;
    tab2;

    constructor() {

        this.tab1 = HeartComponent;
        this.tab2 = StarComponent;

    }
}
