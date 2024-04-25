function mjerenje () {
    if (m == 1) {
        celzius = Math.floor(input.temperature() / 10)
        basic.showNumber(celzius)
        basic.pause(200)
        celjed = input.temperature() - celzius * 10
        basic.showNumber(celjed)
        basic.pause(1000)
        basic.clearScreen()
    } else {
        basic.clearScreen()
    }
}
let celjed = 0
let celzius = 0
let m = 0
basic.clearScreen()
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        m = 1
        mjerenje()
    }
    if (input.buttonIsPressed(Button.B)) {
        m = 0
        basic.clearScreen()
    } else {
        mjerenje()
    }
})
