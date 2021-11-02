// when you press a it will show countdown until it is thrown then shows a touchdown 
input.onButtonPressed(Button.A, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        # # . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        # . . . .
        # # . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . # .
        . . . . .
        # . . . .
        # # . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        # . . . .
        # # . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        # . . # .
        . . . # .
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # #
        . . . # #
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . # .
        . . # # .
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . # # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        # # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showString("Touchdown")
    basic.showLeds(`
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # . # . #
        . # # # .
        # . # . #
        . # # # .
        `)
    basic.showLeds(`
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        . # # # .
        `)
})
// on button b being pressed countdown then show the pass was intercepted
input.onButtonPressed(Button.B, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        # # . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        # . . . .
        # # . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        # . . . .
        # # . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        # . . . .
        # # . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        # . . # .
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        # . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # . . .
        . . . # .
        . . # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # # .
        . . # # #
        `)
    basic.showString("Interception")
})
// when the microbit is shaked it will show an incomplete pass
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . # . # .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        # # . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        # . . . .
        # # . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . # .
        . . . . .
        # . . . .
        # # . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        # . . . .
        # # . . #
        # . . . #
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        # . . # .
        . . . # .
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . # . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.showString("Incomplete")
})
