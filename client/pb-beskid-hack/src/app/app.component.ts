import {Component, OnInit} from '@angular/core';
import {EventsService} from "./events.service";
import {Activity} from "./interfaces/interfaces";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public loaded = false;
  public activities: Activity[];

  constructor(private eventService: EventsService) {}
  title = 'pb-beskid-hack';

  ngOnInit(): void {
    this.eventService.getEventDetails("bbdays4it")
      .subscribe(act => {
        this.loaded = true;
        this.activities = act.steps;
      });
  }
}
