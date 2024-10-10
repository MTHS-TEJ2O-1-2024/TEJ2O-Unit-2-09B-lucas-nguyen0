/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Lucas Nguyen
 * Created on: Oct 2024
 * This program can play rock, paper, scissors.
*/

let randomNumber: number = 0
let winsNumber: number

winsNumber = 0
randomNumber = -1
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 2)
    basic.clearScreen()

// rock
if (randomNumber == 0) {
    basic.showIcon(IconNames.SmallSquare)
}

// paper
if (randomNumber == 1) {
    basic.showIcon(IconNames.Square)
}

// scissors
if (randomNumber == 2) {
    basic.showIcon(IconNames.Scissors)
}

    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})

// if win
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    winsNumber = winsNumber + 1
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})

// show score
input.onButtonPressed(Button.B, function () {
    basic.showNumber(winsNumber)
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})
