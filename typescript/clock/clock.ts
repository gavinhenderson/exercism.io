const pad = (unpadded: number) => unpadded.toString().padStart(2, '0')

class Clock {
  hours: number
  minutes: number

  constructor(hours?: number, minutes?: number) {
    const givenHours = hours || 0
    const givenMinutes = minutes || 0

    this.setHours(givenHours)
    this.setMinutes(givenMinutes)
  }

  setHours(hours: number) {
    this.hours = hours % 24

    if (this.hours < 0) {
      this.hours += 24
    }
  }

  setMinutes(minutes: number) {
    const hoursRollOver = Math.floor(minutes / 60)

    this.setHours(this.hours + hoursRollOver)

    this.minutes = minutes % 60

    if (this.minutes < 0) {
      this.minutes += 60
    }
  }

  toString() {
    return `${pad(this.hours)}:${pad(this.minutes)}`
  }

  plus(toAdd: number) {
    this.setMinutes(this.minutes + toAdd)

    return this
  }

  minus(toMinus: number) {
    this.setMinutes(this.minutes - toMinus)

    return this
  }

  equals(clock: Clock) {
    return this.minutes === clock.minutes && this.hours === clock.hours
  }
}

export default Clock
