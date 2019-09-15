import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Activity, BeskidEvent, BeskidEventDetails} from "./interfaces/interfaces";

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
    return this.http.get<BeskidEventDetails>(`${this.URL}/${name}`);
  }
}
