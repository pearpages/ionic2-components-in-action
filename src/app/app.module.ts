import { MyFormComponent } from './../pages/modals/form/form';
import { ModalsExample } from './../pages/modals/modal';
import { LoadingExample } from './../pages/loading/loading-example';
import { ListsExamples } from './../pages/lists/lists-examples';
import { InputsExample } from './../pages/inputs/inputs';
import { CardsExample } from './../pages/cards/cards';
import { MoreExamples } from './../pages/more-examples/MoreExamples';
import { HelloWorldPage } from './../pages/hello-world/hello-world';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    HelloWorldPage,
    ListPage,
    MoreExamples,
    CardsExample,
    InputsExample,
    ListsExamples,
    LoadingExample,
    ModalsExample,
    MyFormComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    HelloWorldPage,
    MoreExamples,
    CardsExample,
    InputsExample,
    ListsExamples,
    LoadingExample,
    ModalsExample,
    MyFormComponent
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
