input.onGesture(Gesture.Shake, function () {
    sors = randint(1, 3)
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        # # # # #
        . # # # .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . # .
        # . # . .
        . # . . .
        # . # . .
        . . . # .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    if (sors == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (sors == 2) {
        basic.showLeds(`
            . . . # .
            # . # . .
            . # . . .
            # . # . .
            . . . # .
            `)
    } else {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
    }
})
let sors = 0
basic.clearScreen()
