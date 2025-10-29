export function score(x: number, y: number): number {
  const distance = Math.sqrt(x * x + y * y);

  if (distance <= 1) return 10;  // inner circle
  if (distance <= 5) return 5;   // middle circle
  if (distance <= 10) return 1;  // outer circle
  return 0;                      // outside the board
}
