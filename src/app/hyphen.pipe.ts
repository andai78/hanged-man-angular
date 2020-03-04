import { Pipe, PipeTransform } from '@angular/core';

/* export function wordJoin(word : Array<string>) : Array<string> {
  const spacedLength = (0 === word.length) ? 0 : word.length * 2 - 1 ;
  const spacedWord = Array<string>(spacedLength).fill(' ') ;
  word.forEach((letter, i) => spacedWord[i << 1] = letter) ;
  return spacedWord ;
} */

@Pipe({
  name: 'hyphen'
})
export class HyphenPipe implements PipeTransform {
    
  transform(word : string) : any {
      //return wordJoin(word.split('')).join('') ;
    }

}
