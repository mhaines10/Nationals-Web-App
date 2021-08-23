import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Batter} from '../models/batter';
import {BatterService} from '../batter.service';

@Component({
  selector: 'app-batters',
  templateUrl: './batters.component.html',
  styleUrls: ['./batters.component.css']
})
export class BattersComponent implements OnInit {

  @Output() viewBatter = new EventEmitter<Batter>();
  batters: Batter[] = [];
  selectedBatter?: Batter;

  constructor(private batterService: BatterService) { }

  ngOnInit(): void {
    this.batterService.getBatters().subscribe((resp) => {
      this.batters = resp.roster_40.queryResults.row.filter((x:any) => {
        return x.position_txt != "P";
      }).map((x:any) => {
        let batterObj: Batter = {
          firstName: x.name_use,
          lastName: x.name_last,
          position: x.position_txt,
          playerId: x.player_id
        }
        return batterObj;
      }).sort((a:any, b:any) => {
        if (a.lastName > b.lastName){
          return 1;
        }
        else if (a.lastName < b.lastName) {
          return -1
        }
        else {
          return 0
        }
      })
    })
  }

  batterChosen(event:any) {
    let batter = event.value;
    this.viewBatter.emit(batter);
    this.selectedBatter = batter;
  }
}
