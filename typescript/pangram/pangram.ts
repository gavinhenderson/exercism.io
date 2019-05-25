const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

const formatSentance = (unformatted: string) =>
  unformatted.replace(/\s_/g, '').toLowerCase()

interface LooseObject {
  [key: string]: number
}

class Pangram {
  sentance: string

  constructor(sentance: string) {
    this.sentance = formatSentance(sentance)
  }

  isPangram() {
    const letterCount: LooseObject = {}

    const asArray = [...this.sentance]

    asArray.forEach((letter: string) => {
      if (letterCount[letter]) {
        letterCount[letter]++
      } else {
        letterCount[letter] = 1
      }
    })

    /* Each letter of the alphabet must be used once */
    let notFailed = true
    ALPHABET.split('').forEach((letter) => {
      const counted = letterCount[letter]

      if (!counted || counted < 1) {
        notFailed = false
      }
    })

    return notFailed
  }
}

export default Pangram
