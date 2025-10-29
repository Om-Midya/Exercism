export function decodedResistorValue(colorArray: string[]): string {
  const [firstColor, secondColor, thirdColor] = colorArray
  const resistanceValue = COLOR_CODES.indexOf(firstColor) * 10 + COLOR_CODES.indexOf(secondColor)
  const exponent = COLOR_CODES.indexOf(thirdColor)
  const multiplier = Math.pow(10, exponent)
  const totalResistance = resistanceValue * multiplier

  let unit = 'ohms'
  let displayValue = totalResistance

  if (totalResistance >= 1_000_000_000) {
    unit = 'gigaohms'
    displayValue = totalResistance / 1_000_000_000
  } else if (totalResistance >= 1_000_000) {
    unit = 'megaohms'
    displayValue = totalResistance / 1_000_000
  } else if (totalResistance >= 1_000) {
    unit = 'kiloohms'
    displayValue = totalResistance / 1_000
  }

  return `${displayValue} ${unit}`
}

const COLOR_CODES = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"]
