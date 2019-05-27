class Handshake {
  secret: number

  constructor(handshakeValue: number) {
    this.secret = handshakeValue
  }

  commands(): string[] {
    const toReverse = Math.floor(this.secret / 16) % 2 === 0
    let secret = this.secret % 16

    const commandList: string[] = []

    const check = (value: number, command: string) => {
      if (value <= secret) {
        secret -= value
        return [command]
      }
      return []
    }

    /*
    1 = wink
    10 = double blink
    100 = close your eyes
    1000 = jump
    */

    commandList.push(...check(8, 'jump'))
    commandList.push(...check(4, 'close your eyes'))
    commandList.push(...check(2, 'double blink'))
    commandList.push(...check(1, 'wink'))

    if (toReverse) {
      return commandList.reverse()
    }
    return commandList
  }
}

export default Handshake
