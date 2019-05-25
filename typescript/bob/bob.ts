class Bob {
  hey(statement: string) {
    if (this.isNothing(statement)) {
      return 'Fine. Be that way!'
    }

    if (this.isForcefulQuestion(statement)) {
      return 'Calm down, I know what I\'m doing!'
    }

    if (this.isShouting(statement)) {
      return 'Whoa, chill out!'
    }

    if (this.isQuestion(statement)) {
      return 'Sure.'
    }

    return 'Whatever.'
  }

  isNothing(statement: string) {
    const removedWhiteSpace = statement.replace(/\s/g, '')

    return removedWhiteSpace === ''
  }

  isForcefulQuestion(statement: string) {
    return this.isShouting(statement) && this.isQuestion(statement)
  }

  isShouting(statement: string) {
    const lastChar = statement[statement.length - 1]
    const removedChars = statement.replace(/[a-bA-B]/g, '')
    const containsLetters = statement !== removedChars
    const upperCaseMatches = statement === statement.toUpperCase()

    return (
      (upperCaseMatches && containsLetters) ||
      (upperCaseMatches && lastChar === '!')
    )
  }

  isQuestion(statement: string) {
    const noSpaces = statement.replace(/\s/g, '')
    const lastChar = noSpaces[noSpaces.length - 1]

    return lastChar === '?'
  }
}

export default Bob
