export function toRna(dna: string): string {
  return dna.split('').map((char)=>{
    if (!isDnaNucleotide(char)) {
      throw new Error('Invalid input DNA.');
    }
    return map[char];
  }).join('');
}

type dnaNucleotide = 'C' | 'G' | 'A' | 'T';
type rnaNucleotide = 'G' | 'C' | 'U' | 'A';

const map: Record<dnaNucleotide, rnaNucleotide> = {
  'C': 'G',
  'G': 'C',
  'A': 'U',
  'T': 'A',
};

const isDnaNucleotide = (char: string): char is dnaNucleotide => {
  return char in map;
}