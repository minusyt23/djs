/*

ENGINE:

It's going to work like this:

Play function:


*/

const Sample = require("./sample");
const Structure = require("./structure");

module.exports = class Engine{
    sampleRate = 44100;
    bufferSize = 512;
    cursorPos = 0;
    structures = [];
    midiGBTable = [
        0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,
        0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,
        0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,
        0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,
        0x0000,0x0000,0x0000,0x0000,0x002C,0x009C,0x0106,0x016B,
        0x01C9,0x0223,0x0277,0x02C6,0x0312,0x0356,0x039B,0x03DA,
        0x0416,0x044E,0x0483,0x04B5,0x04E5,0x0511,0x053B,0x0563,
        0x0589,0x05AC,0x05CE,0x05ED,0x060A,0x0627,0x0642,0x065B,
        0x0672,0x0689,0x069E,0x06B2,0x06C4,0x06D6,0x06E7,0x06F7,
        0x0706,0x0714,0x0721,0x072D,0x0739,0x0744,0x074F,0x0759,
        0x0762,0x076B,0x0773,0x077B,0x0783,0x078A,0x0790,0x0797,
        0x079D,0x07A2,0x07A7,0x07AC,0x07B1,0x07B6,0x07BA,0x07BE,
        0x07C1,0x07C4,0x07CB,0x07CE,0x07D1,0x07D4,0x07D6,0x07D9,
        0x07DB,0x07DD,0x07DF,0x0000,0x0000,0x0000,0x0000,0x0000,
        0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,
        0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,0x0000,
    ];

    file = {
        tempo: 60,
        pu1: [
            { instruction: 1, frames: 120 },
            { instruction: 0, midi: 69, frames: 120 },
            { instruction: 1, frames: 120 },
            { instruction: 0, midi: 72, frames: 120 },
        ]
    };

    decodeFile(file) {

        var out = {};

        for(byte of data) {
            var byte = data[i];
            var instruction = (byte & 0b10000000) === 0b10000000 ? 1 : 0;
            if (instruction === 1) { // PLAY
                midi = (byte & 0b01111111);
            } else {

            }
        }

        return out;
    }

    encodeFile(data) {

    }

    musicInterrupt = undefined;
    frameSequencer = undefined;

    play() {
        // Every 60 frames = 1 second
        
        // Goes through every instruction before. Needed for simplicity of the system.
        var instrIndex = 0, addedFrames = 0;
        while(addedFrames <= this.cursorPos) {
            var instruction = this.file.pu1[i];
            if(instruction.frames) addedFrames += instruction.frames;
            // Remember to check if it is a set instruction, to set various Structure variables.
            instrIndex++;
        }

        // Sets frames for every channel
        // Code it, bstaard
        
        // I don't really know what I'm doing. Continue tho
        // Advantages of using Javascript: Intervals! I can guarantee 100% accuracy
        var that = this;

        // WARNING - TOO MANY LINES OF CODE AHEAD
        this.musicInterrupt = window.setInterval(() => {
            for(var i = 0; i < that.structures.length; i++) {

                if (that.structures[i].emulator.pu1.frames > 0) {
                    that.structures[i].emulator.pu1.frames--; 
                    that.cursorPos++;
                } else {
                    that.structures[i].emulator.pu1.index++;
                    // Setting stuff.
                    let pu1index = that.structures[i].emulator.pu1.index;
                    let instruction = that.file.pu1[pu1index];

                    if(instruction.instruction === 0) { // PLAY INSTRUCTION
                        that.structures[i].pu1.frequency = that.midiGBTable[instruction.midi];
                        that.structures[i].emulator.pu1.frames = instruction.frames;
                    } else { // SET INSTRUCTION
                        if(instruction.frames) that.structures[i].emulator.pu1.frames = instruction.frames;
                        // WIP
                    }
                }

            }

        }, (1 / 60) * 1000);

        // inner logic of the chip
        this.frameSequencer = window.setInterval(() => {
            
        }, (1 / 512) * 1000);
        
    }

    init() {
        this.structures.push(new Structure());
    }

}