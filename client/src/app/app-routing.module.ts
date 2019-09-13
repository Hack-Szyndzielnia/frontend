import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {ListaComponent} from './lista/lista.component';
import {AddTrailComponent} from './add-trail/add-trail.component';
import {FormularzComponent} from './formularz/formularz.component';
import {TrailsListComponent} from './trails-list/trails-list.component';
import {EditTrailComponent} from './edit-trail/edit-trail.component';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },

    {
        path: 'list',
        children: [
            // header outlet, loads header component
            {
                path: '',
                outlet: 'header',
                component: HeaderComponent
            },
            // main content outlet, loads the page you want at path "yourpage"
            {
                path: '',
                component: TrailsListComponent
            },
            // footer outlet, loads footer component
            {
                path: '',
                outlet: 'footer',
                component: FooterComponent
            }
        ]
    },
    
    {
        path: 'addTrail',
        children: [
            // header outlet, loads header component
            {
                path: '',
                outlet: 'header',
                component: HeaderComponent
            },
            // main content outlet, loads the page you want at path "yourpage"
            {
                path: '', 
                component: AddTrailComponent
            },
            // footer outlet, loads footer component
            {
                path: '',
                outlet: 'footer',
                component: FooterComponent
            }
        ]
    },
    
    {
        path: 'edit/:id">',
        children: [
            // header outlet, loads header component
            {
                path: '',
                outlet: 'header',
                component: HeaderComponent
            },
            // main content outlet, loads the page you want at path "yourpage"
            {
                path: '', 
                component: EditTrailComponent
            },
            // footer outlet, loads footer component
            {
                path: '',
                outlet: 'footer',
                component: FooterComponent
            }
        ]
    },
    
    {
        path: 'formularz',
        children: [
            // header outlet, loads header component
            {
                path: '',
                outlet: 'header',
                component: HeaderComponent
            },
            // main content outlet, loads the page you want at path "yourpage"
            {
                path: '',
                component: FormularzComponent
            },
            // footer outlet, loads footer component
            {
                path: '',
                outlet: 'footer',
                component: FooterComponent
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
