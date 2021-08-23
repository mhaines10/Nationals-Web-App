import { Directive, IterableChangeRecord, IterableDiffer, KeyValueChanges, KeyValueDiffers } from '@angular/core';
import { DoCheck, IterableDiffers, OnChanges, SimpleChanges } from '@angular/core';
import { KeyValueDiffer } from '@angular/core';
import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Batter } from '../models/batter';
import { BatterStats } from '../models/batterStats';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnChanges {

  @Input() set stats(inStats: BatterStats[]) {
    console.log(JSON.stringify(inStats));
    this._stats = inStats;
    this.data = inStats.map((x:any) => {
      let currStat = {
        
        name: x.year,
        series: [
          {
            name: "Avg",
            value: parseFloat(x.avg)
          },
          {
            name: "Ops",
            value: parseFloat(x.ops)
          },
          {
            name: "Slg",
            value: parseFloat(x.slg)
          }
        ]
      }
      return currStat;
    });
  }

  @Input() updateDate: string = '';
  private _stats: BatterStats[] = [];
  data: any[] = [];
  view: number[] = [700, 400];
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = true;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Batting Stats';
  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#AAAAAA']
  };
  constructor(){
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges){
    if (changes.updateDate){
      /*
      this.data = currStats.map((x:any) => {
        let currStat = {
          
          name: x.year,
          series: [
            {
              name: "Avg",
              value: parseFloat(x.avg)
            },
            {
              name: "RBIs",
              value: parseFloat(x.rbis)
            },
            {
              name: "Slg",
              value: parseFloat(x.slg)
            }
          ]
        }
        console.log(currStat);
        return currStat;
      });
      */
    }
  }

}
