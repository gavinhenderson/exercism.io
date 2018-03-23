module.exports = class{
  constructor(ageInSecs){
    this.seconds = ageInSecs;
    this.earthYear = 31557600;
  }

  // the modifier is the number of seconds in a year
  onGeneral(modifier){
    let tempYear = this.earthYear*modifier
    return parseFloat((this.seconds / tempYear).toFixed(2))
  }

  onEarth(){
    return this.onGeneral(1);
  }

  onMercury(){
    return this.onGeneral(0.2408467);
  }

  onVenus(){
    return this.onGeneral(0.61519726);
  }

  onMars(){
    return this.onGeneral(1.8808158);
  }

  onJupiter(){
    return this.onGeneral(11.862615);
  }

  onSaturn(){
    return this.onGeneral(29.447498);
  }

  onUranus(){
    return this.onGeneral(84.016846);
  }

  onNeptune(){
    return this.onGeneral(164.79132);
  }
}
