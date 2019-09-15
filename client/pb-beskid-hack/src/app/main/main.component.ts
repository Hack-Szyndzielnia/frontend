import { Component, OnInit } from '@angular/core';

import { EventsService } from '../events.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    
    dates = [
    ];
    
    spinner : boolean = false;
    allTrails = [];
    foundTrails = [];
    
    
    
    constructor(private eventsList: EventsService) { }

    ngOnInit() {
        
        this.spinner = true;
        
        this.eventsList.getEvents().subscribe( res => { 
            setTimeout( () => {
                 this.spinner = false;
                 this.foundTrails = res;
                 console.log(res)
            },1000)
        } );
        
    }
  
    
    
}
