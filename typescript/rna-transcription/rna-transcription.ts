/*
  G -> C
  C -> G
  T -> A
  A -> U
*/

const DNA = 'GCTA'.split('')
const RNA = 'CGAU'.split('')

function translateLetter(letter: string): string {
  const indexOf = DNA.indexOf(letter)

  if (indexOf === -1) {
    throw new Error('Invalid input DNA.')
  }

  return RNA[indexOf]
}

class Transcriptor {
  toRna(rnaString: string) {
    const asArray = [...rnaString]
    let transcribed: string = ''

    asArray.forEach((letter) => {
      transcribed += translateLetter(letter)
    })

    return transcribed
  }
}

export default Transcriptor
