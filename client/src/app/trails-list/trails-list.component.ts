import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trails-list',
  templateUrl: './trails-list.component.html',
  styleUrls: ['./trails-list.component.scss']
})
export class TrailsListComponent implements OnInit {
    
    trailsList = [
        { id : 1 , 'trail_name' : 'Szlak numer 1' },
        { id : 2 , 'trail_name' : 'Szlak numer 2' },
        { id : 3 , 'trail_name' : 'Szlak numer 3' },
        { id : 4 , 'trail_name' : 'Szlak numer 4' },
        { id : 5 , 'trail_name' : 'Szlak numer 5' }
    ];
    
    
  constructor() { }

  ngOnInit() {
  }
  
    removeTrail(id){
        
        const index = this.trailsList.findIndex( (element) => { 
            return element.id == id;   
        }); 
        
        this.trailsList.splice(index,1);
        console.log(this.trailsList);
    }

}
