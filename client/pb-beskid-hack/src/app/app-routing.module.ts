import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AgmCoreModule} from '@agm/core';

import {MainComponent} from './main/main.component';
import {EventListComponent} from './event-list/event-list.component';
import {EventEditComponent} from './event-edit/event-edit.component';
import {SingleActivityComponent} from "./single-activity/single-activity.component";
import {BadgesComponent} from "./badges/badges.component";
import { FriendsComponent } from './friends/friends.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'eventList',
    component: EventListComponent
  },
  {
    path: 'friends',
    component: FriendsComponent
  },
  {
    path: 'eventEdit/:id',
    component: EventEditComponent,
  }, {
    path: 'activity/:id/:number',
    component: SingleActivityComponent
  }
  , {
    path: 'odznaki',
    component: BadgesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDUcBYc-o790SS7zrViOsnk-3oGBbgJdmo'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
