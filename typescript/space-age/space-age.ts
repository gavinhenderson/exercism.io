/*
  - Earth: orbital period 365.25 Earth days, or 31557600 seconds
  - Mercury: orbital period 0.2408467 Earth years
  - Venus: orbital period 0.61519726 Earth years
  - Mars: orbital period 1.8808158 Earth years
  - Jupiter: orbital period 11.862615 Earth years
  - Saturn: orbital period 29.447498 Earth years
  - Uranus: orbital period 84.016846 Earth years
  - Neptune: orbital period 164.79132 Earth years
*/

const EARTH_SECONDS = 31557600

class SpaceAge {
  seconds: number

  constructor(ageInSeconds: number) {
    this.seconds = ageInSeconds
  }

  onX(comparedToEarth: number) {
    const secondsAliveFor = this.seconds
    const secondsOnX = EARTH_SECONDS * comparedToEarth
    const unrounded = secondsAliveFor / secondsOnX
    const rounded = unrounded.toFixed(2)

    return Number(rounded)
  }

  onEarth() {
    return this.onX(1)
  }

  onMercury() {
    return this.onX(0.2408467)
  }

  onVenus() {
    return this.onX(0.61519726)
  }

  onMars() {
    return this.onX(1.8808158)
  }

  onJupiter() {
    return this.onX(11.862615)
  }

  onSaturn() {
    return this.onX(29.447498)
  }

  onUranus() {
    return this.onX(84.016846)
  }

  onNeptune() {
    return this.onX(164.79132)
  }
}

export default SpaceAge
