import { Component, OnInit } from '@angular/core';

import { EventsService } from '../events.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    
    dates = [
        '2019-09-09T00:00:00+0200',
        '2020-02-01T00:00:00+0200',
        '2019-09-01T00:00:00+0200'
    ];
    
    spinner : boolean = false;
    allTrails = [];
    foundTrails = [];
    
    
    
    constructor(private eventsList: EventsService) { }

    ngOnInit() {
        
        this.eventsList.getEvents().subscribe( res => { this.allTrails = res; } )
        
    }
  
    showEvents(date){
        
        this.spinner = true;
        this.foundTrails.length = 0;
        const trails = [];
        
        for(let item of this.allTrails){
            if(date == item['duration']['from']){
                trails.push(item);
            } 
        }
        
        setTimeout( () => {
                 this.spinner = false;
                 this.foundTrails = trails;
        },1000)
            
        
    }
    
}
