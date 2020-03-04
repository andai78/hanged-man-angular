import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  attempt: number;
  constructor(private gameServ: GameService) { }

  ngOnInit() {
    this.gameServ.getInfoGame().subscribe(
         resp => this.attempt = resp.attempt )
  }

}
