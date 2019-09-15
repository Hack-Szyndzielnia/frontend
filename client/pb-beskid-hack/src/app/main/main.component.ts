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
    
    
  constructor() { }

  ngOnInit() {
  }

}
