basic.forever(function () {
    if (input.temperature() < 22) {
        basic.showString("fred!")
    } else {
        basic.showString("calor!")
    }
})
