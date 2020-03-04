import { WordActionsType } from '../actions/word.action';
import { matchKey, randomWord } from '../../game.helper';
import { Words } from '../../random.word';

const initialState = {
  randomWord: randomWord(Words),
  isWin: false,
  guessCount: 0,
  attempt: 6,
  playerError: 0,
  selectedKey: []
};

export function WordReducer(state = initialState, action) {
  switch(action.type) {
    case WordActionsType.Replay:
      return {
        ...initialState,
        randomWord: randomWord(Words)
      };
    case WordActionsType.PlayerError:
      return {
        ...state,
        playerError: state.playerError + action.payload,
        attempt: state.attempt - action.payload
      };
    case WordActionsType.SelectKEY:
      return {
        ...state,
        selectedKey: [...state.selectedKey, action.payload]
      };
    case WordActionsType.Win:
      return {
        ...state,
        isWin: action.payload
      };
    case WordActionsType.GoodKey:
      return {
        ...state,
        guessCount: state.guessCount + matchKey(state.randomWord, action.payload)
      };
    default:
      return state
  }
}



