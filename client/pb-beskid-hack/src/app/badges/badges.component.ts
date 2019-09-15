import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {
    
    badges = [
        {
            coverImage: "http://images-bbdays4it-hack.s3-website.eu-central-1.amazonaws.com/bbdays/logo.png",
            desc: "W tym tygodniu w bielsku rządzi informatyka! Czeka na Ciebie mnóstwo atrakcji związanych z lokalnymi firmami informatycznymi",
            duration: {from: "2019-09-09", to: "2019-09-15"},
            name: "bbdays4it",
            title: "Konferencja BBDays4.it"
        },
        {
            coverImage: "http://images-bbdays4it-hack.s3-website.eu-central-1.amazonaws.com/zadymka/logo.png",
            desc: "Jazz opanował Bielsko, czeka na Ciebie mnóstwo muzycznych atrakcji",
            duration: {from: "2020-02-01", to: "2020-02-14"},
            name: "zadymka-jazzowa",
            title: "Bielska zadymka jazzowa 2020"
        }
    ];
    
  constructor() { }

  ngOnInit() {
  }

}
