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

  public isWithoutMap = true;

  constructor(private route: ActivatedRoute, private eventsService: EventsService, private router: Router) {
  }

  ngOnInit() {
    console.log(this.route.snapshot.paramMap);
    this.eventName = this.route.snapshot.paramMap.get("id");
    this.activityIndex = this.route.snapshot.paramMap.get("number");

    this.eventsService.getEventDetails(this.eventName)
      .subscribe(eventDetails => {
        this.activity = eventDetails.steps[this.activityIndex];

        this.isWithoutMap = !(this.activity.local && this.activity.local.lat && this.activity.local.lng);

        if (!this.isWithoutMap) {
          this.latitude = this.activity.local.lat;
          this.longitude = this.activity.local.lng;
        }
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

  private getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
    }
  }

  private showPosition(location): void {
    console.log(location);
    const currentLat = location.coords.latitude;
    const currentLng = location.coords.longitude;
    console.log(SingleActivityComponent.LatLngDist(currentLat, this.latitude, currentLng, this.longitude));
  }

  public finishActivity(): void {
    this.eventsService.completeActivity(this.eventName, this.activity.name);
    this.router.navigate(["eventEdit", this.eventName]);
  }

  public static distance(lat1, lon1, lat2, lon2, unit?) {
    if ((lat1 === lat2) && (lon1 === lon2)) {
      return 0;
    } else {
      const radlat1 = Math.PI * lat1 / 180;
      const radlat2 = Math.PI * lat2 / 180;
      const theta = lon1 - lon2;
      const radtheta = Math.PI * theta / 180;
      let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180 / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit === "K") { dist = dist * 1.609344; }
      if (unit === "N") { dist = dist * 0.8684; }
      return dist;
    }
  }

  public static LatLngDist( lat1, lng1, lat2, lng2 ) {
    console.log(lat1,  lng1,  lat2,  lng2);

    // Convert Degress to Radians
    function Deg2Rad(deg) {
      return deg * Math.PI / 180;
    }

    function PythagorasEquirectangular(lati1, lon1, lati2, lon2) {
      lati1 = Deg2Rad(lati1);
      lati2 = Deg2Rad(lati2);
      lon1 = Deg2Rad(lon1);
      lon2 = Deg2Rad(lon2);
      const R = 6371; // km
      // const R = 3959; // miles
      const x = (lon2 - lon1) * Math.cos((lati1 + lati2) / 2);
      const y = (lati2 - lati1);
      const d = Math.sqrt(x * x + y * y) * R;
      return d;
    }

    return PythagorasEquirectangular( lat1, lng1, lat2, lng2 );
  }

  public shareThis() {
    const url = window.location.href;
    /**
     * <a href="https://www.facebook.com/sharer/sharer.php?u=example.org" target="_blank">
     Share on Facebook
     </a>
     */
    const ref = document.createElement("a");
    ref.setAttribute("href", `https://www.facebook.com/sharer/sharer.php?u=${url}`);
    ref.setAttribute("target", "_blank");
    document.body.appendChild(ref);
    ref.click();
    document.body.removeChild(ref);
  }


}
