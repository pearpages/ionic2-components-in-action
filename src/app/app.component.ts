import { ModalsExample } from './../pages/modals/modal';
import { LoadingExample } from './../pages/loading/loading-example';
import { ListsExamples } from './../pages/lists/lists-examples';
import { InputsExample } from './../pages/inputs/inputs';
import { CardsExample } from './../pages/cards/cards';
import { MoreExamples } from './../pages/more-examples/MoreExamples';
import { HelloWorldPage } from './../pages/hello-world/hello-world';
import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'Hello World', component: HelloWorldPage },
      { title: 'More Examples', component: MoreExamples },
      { title: 'Cards Examples', component: CardsExample },
      { title: 'Inputs Examples', component: InputsExample },
      { title: 'Lists Examples', component: ListsExamples },
      { title: 'Loading Example', component: LoadingExample },
      { title: 'Modals Example', component: ModalsExample }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
