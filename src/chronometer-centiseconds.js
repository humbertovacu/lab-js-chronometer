class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    this.intervalId = setInterval(()=> {
      this.currentTime ++;
      if(printTimeCallback){
        printTimeCallback();
      }
    },10);
  }

  getMinutes() {
    let seconds = this.currentTime/100;
    return Math.floor(seconds/60);
  }

  getSeconds() {
    let seconds = this.currentTime/100;
    return seconds % 60;
  }

  getCentiseconds() {
   return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    let stringValue = value.toString();
    if(value<10){
      return `0${stringValue}`
    }
    else return stringValue;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    // let splitSeconds = this.getSeconds(this.currentTime);
    // let addedZeroInSeconds = this.computeTwoDigitNumber(splitSeconds);
    // let splitMinutes = this.getMinutes(this.currentTime);
    // let addedZeroInMinutes = this.computeTwoDigitNumber(splitMinutes);
    // let splitCentiseconds = this.getCentiseconds(this.currentTime);
    // let addedZeroInCentiseconds = this.computeTwoDigitNumber(splitCentiseconds);
    // return `${addedZeroInMinutes}:${addedZeroInSeconds}:${addedZeroInCentiseconds}`
  }
}
