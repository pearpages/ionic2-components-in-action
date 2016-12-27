import {HelloWorldPage} from '../hello-world/hello-world';
import {ListsExamples} from '../lists/lists-examples';
import {NavController} from 'ionic-angular';
import {Component} from '@angular/core';


@Component({
  selector: 'page-navigation-examples',
  templateUrl: 'navigation.html'
})
export class NavigationExamples {
  constructor(private navCtrl: NavController) {

  }

  gotoLists() {
    this.navCtrl.push(ListsExamples)
  }

  gotoHelloWorld() {
    this.navCtrl.push(HelloWorldPage);
  }

  goBack() {
    this.navCtrl.pop().then( (res) => console.log (res)).catch((ex) => {
    console.error('Error ', ex);
    });
  }

  gotoRoot() {
    this.navCtrl.popToRoot().then( () => console.log('popped'));
  }
}
