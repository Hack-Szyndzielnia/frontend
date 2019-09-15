import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Activity, BeskidEvent, BeskidEventDetails} from "./interfaces/interfaces";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private serviceUrlPart = "events";
  private URL = `${environment.apiUrl}${this.serviceUrlPart}`;

  constructor(private http: HttpClient) { }

  public getEvents(): Observable<BeskidEvent[]> {
    return this.http.get<BeskidEvent[]>(this.URL);
  }

  public getEventDetails(name: string): Observable<BeskidEventDetails> {
    return this.http.get<BeskidEventDetails>(`${this.URL}/${name}`)
      .pipe(
        map(event => {
          return {...event, steps: event.steps.sort(this.activitySorter)};
        })
      );
  }

  private activitySorter(a: Activity, b: Activity): number {
    const same = a.status === b.status;
    if (same) {
      return a.name.localeCompare(b.name);
    } else if (a.status === "COMPLETED") {
      return 1;
    } else if (b.status === "COMPLETED") {
      return -1;
    }
  }
}
