import {Component, Input, OnInit} from '@angular/core';
import {Activity} from "../interfaces/interfaces";
import ActivityHelper from "../helpers/ActivityHelper";
import {ActivatedRoute, Router} from "@angular/router";
import {EventsService} from "../events.service";

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

  private eventName: string;
  private activityIndex: string;

  public isLoaded = false;

  constructor(private route: ActivatedRoute, private eventsService: EventsService, private router: Router) {
  }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap);
    this.eventName = this.route.snapshot.paramMap.get("id");
    this.activityIndex = this.route.snapshot.paramMap.get("number");

    this.eventsService.getEventDetails(this.eventName)
      .subscribe(eventDetails => {
        this.activity = eventDetails.steps[this.activityIndex];
        this.latitude = this.activity.local.lat;
        this.longitude = this.activity.local.lng;
        this.typeIcon = ActivityHelper.getIconBasedOnType(this.activity.type);
        this.isLoaded = true;
      });
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

  public routeToEvent() {
    this.router.navigate(['eventEdit', this.eventName]);
  }


}
