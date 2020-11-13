// Sample is an 8-bit wave class that has some useful methods.

module.exports = class Sample {
  data = [];
  _dataIndex = 0;
  _stepStep = 0;

  constructor(data) {
    this.data = data;
  }

  genBuffer(frequency, sampleRate, bufLen) { // Fixa
    const stepSample = frequency / sampleRate,
          stepCount = 1.0 / stepSample,
          // arraySize = Math.round(stepCount),
          arrayStep = stepSample * (stepCount / this.data.length);

    var sampleArray = new Uint8Array(bufLen);

    for (var i = 0; i < bufLen; i++) {
      
      this._stepStep += stepSample;

      sampleArray[i] = this.data[Math.floor(this._dataIndex)];

      if(this._stepStep >= arrayStep) {
        this._dataIndex += (arrayStep <= stepSample) ? (stepSample / arrayStep) : 1; 
        this._stepStep -= arrayStep;
        this._dataIndex %= this.data.length;
      }
    }

    return sampleArray;
  }
}
