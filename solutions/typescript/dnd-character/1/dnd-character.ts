export class DnDCharacter {
  public strength: number
  public dexterity: number
  public constitution: number
  public intelligence: number
  public wisdom: number
  public charisma: number

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore()
    this.dexterity = DnDCharacter.generateAbilityScore()
    this.constitution = DnDCharacter.generateAbilityScore()
    this.intelligence = DnDCharacter.generateAbilityScore()
    this.wisdom = DnDCharacter.generateAbilityScore()
    this.charisma = DnDCharacter.generateAbilityScore()
  }

  public static generateAbilityScore(): number {
    return Math.floor(Math.random() * 16) + 3
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2)
  }

  public get hitpoints(): number {
    return 10 + DnDCharacter.getModifierFor(this.constitution)
  }
}
