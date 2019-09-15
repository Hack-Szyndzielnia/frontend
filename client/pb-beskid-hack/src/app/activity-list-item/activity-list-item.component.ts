import {Component, Input, OnInit} from '@angular/core';
import {Activity} from "../interfaces/interfaces";
import ActivityHelper from "../helpers/ActivityHelper";
import {Router} from "@angular/router";

@Component({
  selector: 'app-activity-list-item',
  templateUrl: './activity-list-item.component.html',
  styleUrls: ['./activity-list-item.component.scss']
})
export class ActivityListItemComponent implements OnInit {

  @Input()
  public activity: Activity;
  @Input()
  public index: number;
  @Input()
  public eventName: string

  public icon: string;

  constructor(public router: Router) { }

  ngOnInit() {
    this.icon = ActivityHelper.getIconBasedOnType(this.activity.type);
  }

  public isComplete(): boolean {
    return this.activity.status === "COMPLETED";
  }

  public openActivityDetails() {
    this.router.navigate(['activity', this.eventName, this.index]);
  }

}
