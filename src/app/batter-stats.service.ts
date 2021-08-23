import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BatterStatsService {

  constructor(private http: HttpClient) { }

  getBatters(batterId: string, year: string): Observable<any> {
    let url: string = "http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='" + year + "'&player_id='" + batterId + "'";
    return this.http.get(url);
  }
}
