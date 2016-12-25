import {AlertController, ActionSheetController} from 'ionic-angular';
import {Component} from '@angular/core';


@Component({
  selector: 'page-hello-world',
  templateUrl: 'hello-world.html'
})
export class HelloWorldPage {
  constructor(public actionSheetCtrl: ActionSheetController, public alertCtrl: AlertController) {

  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted you',
      buttons: ['OK']
    });
    alert.present();
  }
}
