import {Component, Input, OnInit} from '@angular/core';
import {Activity} from "../interfaces/interfaces";
import ActivityHelper from "../helpers/ActivityHelper";

@Component({
  selector: 'app-single-activity',
  templateUrl: './single-activity.component.html',
  styleUrls: ['./single-activity.component.scss']
})
export class SingleActivityComponent implements OnInit {

  @Input()
  public activity: Activity;

  public latitude: number;
  public longitude: number;
  public typeIcon: string;

  constructor() {
  }

  ngOnInit() {
    this.latitude = this.activity.local.lat;
    this.longitude = this.activity.local.lng;
    this.typeIcon = ActivityHelper.getIconBasedOnType(this.activity.type);
  }

  public openInMaps() {
    if ((navigator.platform.indexOf("iPhone") !== -1) ||
      (navigator.platform.indexOf("iPad") !== -1) ||
      (navigator.platform.indexOf("iPod") !== -1)) {
      window.open(`maps://maps.google.com/maps?daddr=${this.latitude},${this.longitude}&amp;ll=`);
    } else {
      window.open(`https://maps.google.com/maps?daddr=${this.latitude},${this.longitude}&amp;ll=`);
    }
  }


}
