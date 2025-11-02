export function commands(code: number): Array<string> {
  const result: Array<string> = [];
  for (let i = 0; i < actions.length; i++) {
    if (code & (1 << i)) {
      result.push(actions[i]);
    }
  }
  if (code & 16) {
    result.reverse();
  }
  return result;
}

const actions = ["wink", "double blink", "close your eyes", "jump"];
