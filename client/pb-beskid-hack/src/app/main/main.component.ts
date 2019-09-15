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
        
        this.eventsList.getEvents().subscribe( res => { this.allTrails = res;
            for(let item of res){   
                const dateArr = item['duration']['from'];
                const ind = dateArr.toString().indexOf('T');
                const itemek = dateArr.toString().slice(0,ind)
                this.dates.push( itemek ); 
            }
        } );
        
    }
  
    showEvents(date){
        
        this.spinner = true;
        this.foundTrails.length = 0;
        const trails = [];
        
        for(let item of this.allTrails){
            if( item['duration']['from'].indexOf(date) > -1 ){
                trails.push(item);
            } 
        }
        
        setTimeout( () => {
                 this.spinner = false;
                 this.foundTrails = trails;
        },1000)
            
        
    }
    
}
