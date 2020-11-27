const Sample = require("./sample")

module.exports = class Structure {
    pu1 = {
        // Sweep Stuff
        sweepPeriod: 0,
        negate: 0, // 1-bit (false / true)
        shift: 0,

        duty: 0,

        // Volume Stuff
        startingVolume: 0,
        envAddMode: 0, // 1-bit (false / true)
        period: 0,

        // Frequency Stuff
        frequency: 0,

        // Internal Variables Stuff
        currentVolume: 0, // For Volume Envelope
        currentFrequency: 0, // For Sweep Envelope
    }

    pu2 = {
        duty: 0,

        // Volume Stuff
        startingVolume: 0,
        envAddMode: 0, // 1-bit (false / true)
        period: 0,

        // Frequency Stuff
        frequency: 0,

        // Internal Variables Stuff
        currentVolume: 0, // For Volume Envelope
        currentFrequency: 0, // For Vibrato
    }

    wav = {
        DACPower: 0, // 1-bit (false / true)

        volumeCode: 0,
        
        // Frequency Stuff
        frequency: 0,

        // Internal Variables Stuff
        currentFrequency: 0, // For Vibrato
    }

    noi = {
        // Volume Stuff
        startingVolume: 0,
        envAddMode: 0,
        period: 0,

        // Noise Stuff
        clockShift: 0,
        widthMode: 0, // 1-bit (false / true)
        divisorCode: 0,
    }

    mixer = {
        leftVIN: 1, // 1-bit (false / true)
        leftVolume: 7, // 0 to 7
        
        rightVIN: 1, // 1-bit (false / true)
        rightVolume: 7,
    }

    samples = {
        squareDuty_0: new Sample([
            0xFF, 0x00, 0x00, 0x00, 
            0x00, 0x00, 0x00, 0x00
        ]),
        squareDuty_1: new Sample([
            0xFF, 0xFF, 0x00, 0x00, 
            0x00, 0x00, 0x00, 0x00
        ]),
        squareDuty_2: new Sample([
            0xFF, 0xFF, 0xFF, 0xFF, 
            0x00, 0x00, 0x00, 0x00
        ]),
        squareDuty_3: new Sample([
            0xFF, 0xFF, 0xFF, 0xFF, 
            0xFF, 0xFF, 0x00, 0x00
        ]),
        
    }

    emulator = {
        pu1: {
            index: 0, // Instruction Index
            frames: 0,
        },
        pu2: {
            index: 0, // Instruction Index
            frames: 0,
        },
        wav: {
            index: 0, // Instruction Index
            frames: 0,
        },
        noi: {
            index: 0, // Instruction Index
            frames: 0,
        },
    }
}