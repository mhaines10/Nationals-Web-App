import { ChangeDetectionStrategy, Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { Batter } from '../models/batter';
import { BatterStats } from '../models/batterStats';
import {BatterStatsService} from '../batter-stats.service';

@Component({
  selector: 'app-batter-card',
  templateUrl: './batter-card.component.html',
  styleUrls: ['./batter-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BatterCardComponent implements OnInit {

  @Input() 
    get batter(): Batter {return this._batter;}
    set batter(batter: Batter) {
      this._batter = batter || {firstName: '', lastName: '', position: '', playerId: ''};
    }
  
    batterHasStats: boolean = false;
    batterSelectedRender: boolean = false;
    updateDate: string = "";
    _batter: Batter = {firstName: '', lastName: '', position: '', playerId: ''};
    _stats: BatterStats[] = [];
    constructor(private batterStatsService:BatterStatsService) { }
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.batter && changes.batter.currentValue.firstName != ''){
      this.batterSelectedRender = true;
      const currBatter = changes.batter.currentValue;
      let currYear = 2021;
      this._stats.length = 0;
      for (let i = 0; i < 3; i++){
        this.batterStatsService.getBatters(currBatter.playerId, (currYear - i).toString()).subscribe(resp => {
          if (resp.sport_hitting_tm.queryResults.totalSize != "0"){
            this.batterHasStats = true;
            const respObj: any = resp.sport_hitting_tm.queryResults.row;
            this._stats.push({
              ab: respObj.ab,
              avg: respObj.avg,
              slg: respObj.slg,
              bb: respObj.bb,
              rbis: respObj.rbi,
              ops: respObj.ops,
              year: (currYear - i).toString()
            });
            this._stats = [...this._stats];
          }
        })        
      }
      let now = new Date();
      this.updateDate = String(now.getSeconds());
    }
    else if (changes.batter && changes.batter.currentValue.firstName == '') {
      this._stats = [];
      this.batterHasStats = false;
    }
  }
}
