import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EventsService} from "../events.service";
import {BeskidEventDetails} from "../interfaces/interfaces";

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {

  public eventId: string;
  public eventDetails: BeskidEventDetails;

  constructor(private route: ActivatedRoute, private eventService: EventsService) { }

  ngOnInit() {
    this.eventId = this.route.snapshot.paramMap.get("id");
    this.eventService.getEventDetails(this.eventId)
      .subscribe(eventDetails => {
        this.eventDetails = eventDetails;
      });
  }

}
