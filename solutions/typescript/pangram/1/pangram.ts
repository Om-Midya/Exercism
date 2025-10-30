export function isPangram(sentence: string): boolean {
  let alphabets  = new Set<string>();
  for (let char of sentence.toLowerCase()) {
    if (char >= 'a' && char <= 'z') {
      alphabets.add(char);
    }
  }
  return alphabets.size === 26;
}
