import {Component, Input, OnInit} from '@angular/core';
import {Activity} from "../interfaces/interfaces";
import ActivityHelper from "../helpers/ActivityHelper";

@Component({
  selector: 'app-activity-list-item',
  templateUrl: './activity-list-item.component.html',
  styleUrls: ['./activity-list-item.component.scss']
})
export class ActivityListItemComponent implements OnInit {

  @Input()
  public activity: Activity;

  public icon: string;

  constructor() { }

  ngOnInit() {
    this.icon = ActivityHelper.getIconBasedOnType(this.activity.type);
  }

}
