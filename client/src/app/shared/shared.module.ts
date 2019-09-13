import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { ListaComponent } from '../lista/lista.component';
import { AddTrailComponent } from '../add-trail/add-trail.component';
import { FormularzComponent } from '../formularz/formularz.component';
import { TrailsListComponent } from '../trails-list/trails-list.component';
import { EditTrailComponent } from '../edit-trail/edit-trail.component';

import {HeaderComponent, FooterComponent, HeaderShadowDirective} from '@app/shared';

@NgModule({
    imports: [CommonModule, FormsModule, RouterModule,ReactiveFormsModule,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB9Eh0f0EmQDr8dG4im1E1FBXJhwwcZgTc'
      /* apiKey is required, unless you are a 
      premium customer, in which case you can 
      use clientId 
      */
    })],
    declarations: [HeaderComponent, FooterComponent, HeaderShadowDirective, ListaComponent, FormularzComponent,AddTrailComponent,
    TrailsListComponent,EditTrailComponent],
    exports: [HeaderComponent, FooterComponent, HeaderShadowDirective, FormsModule, CommonModule,ReactiveFormsModule]
})
export class SharedModule {}
