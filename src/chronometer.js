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
    },1000);

  }

  getMinutes() {
    return Math.floor(this.currentTime/60);
  }

  getSeconds() {
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    let stringValue = value.toString();
    if(stringValue.length===1){
      return `0${stringValue}`
    }
    else return stringValue;
  }

  stop() {
    clearInterval(this.intervalId)
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let splitSeconds = this.getSeconds(this.currentTime);
    let addedZeroInSeconds = this.computeTwoDigitNumber(splitSeconds);
    let splitMinutes = this.getMinutes(this.currentTime);
    let addedZeroInMinutes = this.computeTwoDigitNumber(splitMinutes);
    return `${addedZeroInMinutes}:${addedZeroInSeconds}`
    
}
}