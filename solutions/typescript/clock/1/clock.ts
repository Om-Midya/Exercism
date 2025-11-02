export class Clock {
  private _hour: number
  private _minute: number
  constructor(hour: number, minute: number = 0) {
    this._hour = hour
    this._minute = minute
    this.normalizeTime(this._hour, this._minute)
  }

  public toString(): string {
    const hourString = this._hour < 10 ? `0${this._hour}` : `${this._hour}`
    const minuteString = this._minute < 10 ? `0${this._minute}` : `${this._minute}`
    return `${hourString}:${minuteString}`
  }

  public plus(minutes: number): Clock {
    this.normalizeTime(this._hour, this._minute + minutes)
    return this
  }

  public minus(minutes: number): Clock {
    this.normalizeTime(this._hour, this._minute - minutes)
    return this
  }

  public equals(other: Clock): boolean {
    return this._hour === other._hour && this._minute === other._minute
  }

  private normalizeTime(hour: number, minute: number = 0): void {
   //We will process the hour and minute to fit in the clock range
    const totalMinutes = hour * 60 + minute
    const minutesInDay = 24 * 60
    let processedMinutes = ((totalMinutes % minutesInDay) + minutesInDay) % minutesInDay
    const processedHours = Math.floor(processedMinutes / 60)
    processedMinutes = processedMinutes % 60
    this._hour = processedHours % 24
    this._minute = processedMinutes
  }
}
