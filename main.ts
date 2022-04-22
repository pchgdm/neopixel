let item = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
basic.forever(function on_forever() {
    for (let index = 0; index < 10; index++) {
        for (let index2 = 0; index2 < 3; index2++) {
            item.range(index2, 1).showColor(neopixel.colors(NeoPixelColors.Red))
            item.shift(1)
            item.range(index2, 1).showColor(neopixel.colors(NeoPixelColors.Orange))
            item.shift(1)
            item.range(index2, 1).showColor(neopixel.colors(NeoPixelColors.Yellow))
            basic.pause(100)
        }
    }
    for (let index3 = 0; index3 < 10; index3++) {
        for (let index4 = 0; index4 < 3; index4++) {
            item.range(index4, 1).showColor(neopixel.colors(NeoPixelColors.Red))
            item.shift(1)
            item.range(index4, 1).showColor(neopixel.colors(NeoPixelColors.Orange))
            item.shift(1)
            item.range(index4, 1).showColor(neopixel.colors(NeoPixelColors.Yellow))
            item.shift(1)
            item.range(index4, 1).showColor(neopixel.colors(NeoPixelColors.Green))
            item.shift(1)
            item.range(index4, 1).showColor(neopixel.colors(NeoPixelColors.Blue))
            item.shift(1)
            item.range(index4, 1).showColor(neopixel.colors(NeoPixelColors.Violet))
            item.shift(1)
            item.range(index4, 1).showColor(neopixel.colors(NeoPixelColors.Purple))
            basic.pause(100)
        }
    }
    for (let index5 = 0; index5 < 20; index5++) {
        for (let index6 = 0; index6 < 3; index6++) {
            item.range(index6, 1).showColor(neopixel.colors(NeoPixelColors.Blue))
            item.shift(1)
            basic.pause(30)
        }
    }
    for (let index7 = 0; index7 < 30; index7++) {
        for (let index8 = 0; index8 < 3; index8++) {
            item.range(index8, 1).showColor(neopixel.colors(NeoPixelColors.Purple))
            item.shift(1)
            basic.pause(20)
        }
    }
})
