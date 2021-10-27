let conteo = 0
let A = 0
let B = 0
let SUMA = 0
input.onButtonPressed(Button.A, function () {
    conteo = 2
    while (conteo <= 10) {
        basic.showNumber(conteo)
        basic.showIcon(IconNames.Ghost)
        conteo += 2
    }
    basic.showString("BOO!!!")
})
input.onButtonPressed(Button.AB, function () {
    A = randint(1, 5)
    B = randint(1, 5)
    basic.showNumber(A)
    basic.showNumber(B)
    SUMA = A + B
    if (SUMA >= 7 && SUMA <= 10) {
        basic.showIcon(IconNames.Rabbit)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let conteo = 0; conteo <= 10; conteo++) {
        basic.showNumber(conteo)
        if (conteo % 2 == 0) {
            music.playTone(392, music.beat(BeatFraction.Whole))
        }
    }
    music.playMelody("C5 B A G F E D C ", 120)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("A01253575")
})
basic.forever(function () {
    basic.showIcon(IconNames.Butterfly)
    basic.showIcon(IconNames.Chessboard)
    if (input.temperature() < 10) {
        basic.showIcon(IconNames.Rollerskate)
    }
})
