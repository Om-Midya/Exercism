export class Robot {
  private _name: string = ''
  private static usedNames: Set<string> = new Set()
  constructor() {
    this._generateName()
    Robot.usedNames.add(this._name)
  }

  public get name(): string {
    return this._name
  }

  public resetName(): void {
    this._name = ''
    while (this._name === '' || Robot.usedNames.has(this._name)) {
      this._generateName()
    }
    Robot.usedNames.add(this._name)
  }

  public static releaseNames(): void {
    Robot.usedNames.clear()
  }

  private _generateName(): void {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const digits = '0123456789'
    let robotName = '' 
    for (let i = 0; i < 2; i++) {
      robotName += letters.charAt(Math.floor(Math.random() * letters.length))
    }
    for (let i = 0; i < 3; i++) {
      robotName += digits.charAt(Math.floor(Math.random() * digits.length))
    }
    this._name = robotName
  }
}
