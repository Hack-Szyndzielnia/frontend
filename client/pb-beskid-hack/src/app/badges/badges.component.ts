import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {
    
    badges = [
        {
            coverImage: "assets/bolek.png",
            desc: "W tym tygodniu podążamy szlakiem Bolka i Lolka",
            duration: {from: "2019-09-09", to: "2019-09-15"},
            name: "bbdays4it",
            title: "Tydzień z Bolkiem i Lolkiem"
        },
        {
            coverImage: "assets/reksio.png",
            desc: "Poznajmy historię Reksia w Bielsku-Białej",
            duration: {from: "2020-02-01", to: "2020-02-14"},
            name: "zadymka-jazzowa",
            title: "Śladami Reksia"
        }
    ];
    
  constructor() { }

  ngOnInit() {
  }

}
