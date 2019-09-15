import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgmCoreModule } from '@agm/core';

import { MainComponent } from './main/main.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventEditComponent } from './event-edit/event-edit.component';

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
        path: 'eventEdit/:id',
        component: EventEditComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB9Eh0f0EmQDr8dG4im1E1FBXJhwwcZgTc'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
