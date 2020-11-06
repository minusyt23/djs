// Sample is an 8-bit wave class that has some useful methods.

module.exports = class Sample {
  data = [];
  hasDataChanged = true;

  constructor(data) {
    this.data = data;
  }

  peekWave(frequency, sampleRate, iter, canvas) {
    // Check if there is a cached version of the sample //
    if(!this.hasDataChanged) {;}

    const stepSample = frequency / sampleRate,
          stepCount = 1.0 / stepSample,
          arraySize = Math.round(stepCount),
          arrayStep = stepSample * (stepCount / this.data.length);

    let stepStep = 0,
        dataIndex = 0;

    let sampleArray = new Uint8Array(arraySize);

    for (var i = 0; i < sampleArray.length; i++) {
      stepStep += stepSample;

      sampleArray[i] = this.data[dataIndex];

      if(stepStep >= arrayStep) {
        stepStep -= arrayStep;
        dataIndex++;
      }
    }

    console.log(sampleArray);
  }
}
