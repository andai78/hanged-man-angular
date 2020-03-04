export function matchKey(word: string, key:string) {
  const regExp = new RegExp(key,"g");
  const keyCount = word.match(regExp).length;
  return keyCount;
}

export function randomWord(words: Array<string>) {
  let randNum = Math.floor(Math.random() * 4);
  return words[randNum];
}