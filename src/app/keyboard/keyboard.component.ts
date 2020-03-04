import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  private line1 : Array<string> = 'AZERTYUIOP'.split('') ;
  private line2 : Array<string> = 'QSDFGHJKLM'.split('') ;
  private line3 : Array<string> = 'WXCVBN'.split('') ;
  readonly rowsOfKeys : Array<Array<string>> = [this.line1, this.line2, this.line3] ;
  randomWord:string;

  constructor(private gameServ: GameService) { 
  }

  ngOnInit() {
    this.gameServ.getInfoGame().subscribe(resp => {
      this.randomWord = resp.randomWord;
    })
  }

  replay() {
    this.gameServ.replay();
  }

  public selectKey(key: string) {
    if(this.randomWord.includes(key)) {
      this.gameServ.selectedGoodKey(key)
    }
    else {
      this.gameServ.playerError();
    }
    this.gameServ.selectKey(key);
  }

  public isWin() {
    this.gameServ.isWin();
  }
}
