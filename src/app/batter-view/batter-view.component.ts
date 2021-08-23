import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Batter } from '../models/batter';

@Component({
  selector: 'app-batter-view',
  templateUrl: './batter-view.component.html',
  styleUrls: ['./batter-view.component.css']
})
export class BatterViewComponent implements OnInit {
  selectedBatter: Batter = {firstName: '', lastName: '', position: '', playerId: ''};
  constructor() { }

  ngOnInit(): void {
  }
  
  onBatterSelect(batter: Batter){
    this.selectedBatter = {firstName: batter.firstName, lastName: batter.lastName, position: batter.position, playerId: batter.playerId};
  }
}
