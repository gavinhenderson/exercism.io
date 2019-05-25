function isLeapYear(testYear: number) {
  if (testYear % 4 === 0 && testYear % 100 !== 0) {
    return true
  }

  if (testYear % 100 === 0 && testYear % 400 === 0 && testYear % 4 === 0) {
    return true
  }

  return false
}

export default isLeapYear
