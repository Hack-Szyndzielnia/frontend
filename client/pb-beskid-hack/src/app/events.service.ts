import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Activity, BeskidEvent} from "./interfaces/interfaces";

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

  public getSpecificEvent(name: string): Observable<Activity> {
    return this.http.get<Activity>(`${this.URL}/${name}`);
  }
}
