input.onButtonPressed(Button.A, function () {
    if (鎚仔.isTouching(地鼠)) {
        game.addScore(1)
        地鼠.change(LedSpriteProperty.X, randint(0, 4))
    }
})
input.onGesture(Gesture.Shake, function () {
    函數()
})
input.onButtonPressed(Button.AB, function () {
    serial.redirectToUSB()
})
function 函數 () {
    鎚仔.delete()
    地鼠.delete()
    game.pause()
    images.createBigImage(`
        . . # . . . . . . .
        # . # . # . . . . .
        # . # . # . . . . #
        # . . . # . # . # .
        . # # # . . . # . .
        `).scrollImage(1, 200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # # # . #
        # . # . .
        # # # . #
        # . # . #
        `)
    basic.showLeds(`
        . . . . .
        # . . . #
        # # # . .
        # . # . #
        # . # . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    無限 = 999
    for (let index = 0; index < 無限; index++) {
        無限 += 999
        if (input.buttonIsPressed(Button.A)) {
            basic.showLeds(`
                . # # . .
                . # . . .
                . # . . .
                # # . . .
                # # . . .
                `)
            for (let index = 0; index < 2; index++) {
                music.playMelody("C5 A B G A F G E ", 120)
                music.playMelody("G B A G C5 B A B ", 120)
            }
            basic.clearScreen()
        }
        if (input.buttonIsPressed(Button.B)) {
            basic.pause(1000)
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.showLeds(`
                # # # # .
                # . # . #
                # . # # #
                # . . . #
                # # # # #
                `)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            _1 = 0
            _1 = randint(1, 3)
            if (_1 == 1) {
                basic.showLeds(`
                    # # . . #
                    # # . # .
                    . . # . .
                    # # . # .
                    # # . . #
                    `)
            } else if (_1 == 2) {
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
            } else {
                basic.showLeds(`
                    # # # # .
                    # . # . #
                    # . # # #
                    # . . . #
                    # # # # #
                    `)
            }
            basic.pause(5000)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
        if (input.buttonIsPressed(Button.AB)) {
            basic.showString("Im a AI")
            basic.showLeds(`
                . # # # .
                . # . # .
                . # # # .
                . # . # .
                . # . # .
                `)
            basic.showLeds(`
                . . # . .
                . . . . .
                . . # . .
                . . # . .
                . . # . .
                `)
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . # # #
                . # . . .
                `)
            basic.showLeds(`
                . # # . .
                # . . # .
                . . # . .
                . . . . .
                . . # . .
                `)
        }
    }
}
input.onButtonPressed(Button.B, function () {
    分數 = game.score()
    basic.showNumber(分數)
})
let 分數 = 0
let 無限 = 0
let 地鼠: game.LedSprite = null
let 鎚仔: game.LedSprite = null
let _1 = 0
basic.showLeds(`
    # # # # #
    # . . . #
    # # # # #
    . . # . .
    . . # . .
    `)
鎚仔 = game.createSprite(0, 2)
地鼠 = game.createSprite(randint(0, 4), 2)
basic.clearScreen()
basic.forever(function () {
    鎚仔.ifOnEdgeBounce()
    鎚仔.move(1)
    basic.pause(800)
})
