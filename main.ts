function mjerenje () {
    if (m == 1) {
        celzius = input.temperature()
        basic.showNumber(celzius)
        if (m != 1) {
            basic.clearScreen()
        }
    }
}
let celzius = 0
let m = 0
basic.clearScreen()
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        m = 1
    }
    if (input.buttonIsPressed(Button.B)) {
        m = 0
    }
    mjerenje()
})
