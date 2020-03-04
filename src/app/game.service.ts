import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  constructor(private store:Store<any>) { }

  isWin() {
    this.store.dispatch({type : 'Win', payload: true})
  }

  getInfoGame(): Observable<any> {
    return this.store.pipe(select('wordStore'));
  }

  selectKey(key: string) {
    this.store.dispatch({type: 'SelectKey', payload: key})
  }

  replay() {
    this.store.dispatch({type: 'Replay'})
  }

  selectedGoodKey(key:string) {
    this.store.dispatch({type: 'GoodKey', payload: key})
  }

  playerError() {
    this.store.dispatch({type: 'PlayerError', payload: 1})
  }
}
