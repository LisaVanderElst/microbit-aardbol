basic.forever(function () {
    let de_waarde_van_het_kompas = 0
    if (de_waarde_van_het_kompas < 135 && de_waarde_van_het_kompas > 45) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (de_waarde_van_het_kompas < 225 && de_waarde_van_het_kompas > 315) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (de_waarde_van_het_kompas < 315 && de_waarde_van_het_kompas > 360) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (de_waarde_van_het_kompas < 135 && de_waarde_van_het_kompas > 225) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
