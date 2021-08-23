import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Batter } from './models/batter';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BatterService {

  constructor(private http: HttpClient) { }

  getBatters(): Observable<any> {
    return this.http.get("http://lookup-service-prod.mlb.com/json/named.roster_40.bam?team_id='120'");
  }
}
