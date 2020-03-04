import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss']
})
export class WordComponent implements OnInit {
  randomWord:string;
  hiddenWord = [];
  selectedKey = [];
  isWin: Boolean = false;
  isLose: Boolean = false;

  constructor(private gameServ: GameService) { }

  ngOnInit() {
    this.gameServ.getInfoGame().subscribe(resp => {
      this.randomWord = resp.randomWord;
      this.hiddenWord = [...this.randomWord];
      this.selectedKey = resp.selectedKey;
      this.isLose = resp.isLose;
      this.isGuessWin(this.randomWord, resp.guessCount);
      if(resp.attempt === 0) {
        this.isLose = true;
      }
    });
  }

  testWord(key) {
    return this.selectedKey.includes(key)
  }

  private isGuessWin(word: string, goodKey: number): void {
    if(word.length === goodKey) {
      this.isWin = true;
    }
    else {
      this.isWin = false;
    }
  }

}
