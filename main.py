item = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)

def on_forever():
    for index in range(10):
        for index2 in range(3):
            item.range(index2, 1).show_color(neopixel.colors(NeoPixelColors.RED))
            item.shift(1)
            item.range(index2, 1).show_color(neopixel.colors(NeoPixelColors.ORANGE))
            item.shift(1)
            item.range(index2, 1).show_color(neopixel.colors(NeoPixelColors.YELLOW))
            basic.pause(100)
    for index3 in range(10):
        for index4 in range(3):
            item.range(index4, 1).show_color(neopixel.colors(NeoPixelColors.RED))
            item.shift(1)
            item.range(index4, 1).show_color(neopixel.colors(NeoPixelColors.ORANGE))
            item.shift(1)
            item.range(index4, 1).show_color(neopixel.colors(NeoPixelColors.YELLOW))
            item.shift(1)
            item.range(index4, 1).show_color(neopixel.colors(NeoPixelColors.GREEN))
            item.shift(1)
            item.range(index4, 1).show_color(neopixel.colors(NeoPixelColors.BLUE))
            item.shift(1)
            item.range(index4, 1).show_color(neopixel.colors(NeoPixelColors.VIOLET))
            item.shift(1)
            item.range(index4, 1).show_color(neopixel.colors(NeoPixelColors.PURPLE))
            basic.pause(100)
    for index5 in range(20):
        for index6 in range(3):
            item.range(index6, 1).show_color(neopixel.colors(NeoPixelColors.BLUE))
            item.shift(1)
            basic.pause(30)
    for index7 in range(30):
        for index8 in range(3):
            item.range(index8, 1).show_color(neopixel.colors(NeoPixelColors.PURPLE))
            item.shift(1)
            basic.pause(20)
basic.forever(on_forever)
