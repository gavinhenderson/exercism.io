const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const randomLetter = () =>
  ALPHABET[Math.floor(Math.random() * ALPHABET.length)]

const randomDigit = () => Math.floor(Math.random() * 10).toString()

const usedNames: string[] = []

class RobotName {
  name: string

  constructor() {
    this.name = this.generateName()
  }

  resetName() {
    this.name = this.generateName()
  }

  generateName() {
    while (true) {
      let name = ''
      name += randomLetter()
      name += randomLetter()
      name += randomDigit()
      name += randomDigit()
      name += randomDigit()

      if (usedNames.indexOf(name) === -1) {
        usedNames.push(name)
        return name
      }
    }
  }
}

export default RobotName
