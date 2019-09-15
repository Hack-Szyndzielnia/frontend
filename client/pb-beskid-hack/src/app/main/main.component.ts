import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    
    dates = [
        '01-09-2019 - 08-09-2019',
        '08-09-2019 - 15-09-2019',
        '15-09-2019 - 22-09-2019',
        '22-09-2019 - 29-09-2019'
    ];
    
    private events = [
        { 
            'date' : '01-09-2019 - 08-09-2019',
            'name' : 'trail1',
            'id' : 1
        },
        { 
            'date' : '01-09-2019 - 08-09-2019',
            'name' : 'trail2',
            'id' : 2
        }
    ]
    
    foundTrails = [];
    
    
    
    constructor() { }

    ngOnInit() {
    }
  
    showEvents(date){
        
        this.foundTrails = this.events.map( item => {
            return date == item['date'] ? item : { 'name' : '' }; 
        });
        
        
    
        console.log(this.foundTrails);
    }
    
    

}
