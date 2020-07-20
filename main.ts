input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(100)
    basic.showString("Howdy! I'm FLOWEY. FLOWEY the FLOWER! Hmmm... You're new to the UNDERGROUND, aren'tcha? Golly, you must be so confused. Someone ought to teach you how things work around here! I guess little old me will have to do. Ready? Here we go!")
    basic.pause(100)
    basic.showString("*Battle Stars*")
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.Heart)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.pause(100)
    basic.showString("See that heart? That is your SOUL, the very culmination of your being! Your SOUL starts off weak, but can grow strong if you gain a lot of LV. What's LV stand for? Why, LOVE, of course! You want some LOVE, don't you? Don't worry, I'll share some with you!")
    basic.pause(100)
    basic.showString("*Five spinning white pellets appear around Flowey.*")
    basic.pause(100)
    basic.showString("Down here, LOVE is shared through... little white... \"friendliness pellets.\" Are you ready?")
    basic.showString("*The spinning white pellets go towards the player's SOUL*")
    basic.showString("Touch them")
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.pause(100)
    basic.showString("or")
    basic.pause(100)
    basic.showString("Move away")
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # . .
        . # . # .
        . # # # .
        `)
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("*The pellets drained the player's HP by 19. Flowey's expression changes from a friendly smile to an evil smile*")
        basic.pause(100)
        basic.showString("You idiot! In this world, it's kill or BE killed. Why would ANYONE pass up an opportunity like this!?")
        basic.pause(100)
        basic.showString("*Dozens more spinning white pellets appear around the player.*")
        basic.pause(100)
        basic.showString("DIE")
    } else {
    	
    }
})
