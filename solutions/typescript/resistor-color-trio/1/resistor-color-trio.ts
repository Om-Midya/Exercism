export function decodedResistorValue(colorArray: string[]): string {
  const [firstColor, secondColor, thirdColor] = colorArray
  const resistanceValue = COLOR_CODES.indexOf(firstColor) * 10 + COLOR_CODES.indexOf(secondColor)
  const exponent = COLOR_CODES.indexOf(thirdColor)
  switch (true) {
    case exponent >= 9:
      return `${resistanceValue} gigaohms`
    case exponent >= 6:
      return `${resistanceValue} megaohms`
    case exponent >= 3:
      return `${resistanceValue} kiloohms`
  }
  return `${resistanceValue} ohms`
}

const COLOR_CODES = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
