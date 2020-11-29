const Engine = require("./engine/engine");
const Speaker = require("speaker");
const Sample = require("./engine/sample");
const { Readable } = require("stream");

const config = {
    channels: 1,
    bitDepth: 8,
    sampleRate: 44100,
    // signed: false, // Lo implementi nell'engine.
}

var bruh = new Readable();

var r = new Sample([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,])

bruh._read = () => { // Works if you put the right stuff into it
    var buf = r.genBuffer(220, 44100, 1024)
    
    bruh.push(buf);
}

bruh.pipe(new Speaker(config));