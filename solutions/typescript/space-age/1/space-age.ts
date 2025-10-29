export function age(planet: string, seconds: number): number {
  const earthYearInSeconds = 31557600
  const orbitalPeriod = orbitalPeriods[planet.toLowerCase()]

  if (!orbitalPeriod) {
    throw new Error('Unknown planet')
  }

  const ageInYears = seconds / (earthYearInSeconds * orbitalPeriod)
  return Math.round(ageInYears * 100) / 100
}

type OrbitalPeriods = {
  [key: string]: number
}

const orbitalPeriods: OrbitalPeriods = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1.0,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
}
