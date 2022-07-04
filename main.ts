let start_time = 0
let end_time = 0
input.onPinPressed(TouchPin.P0, function () {
    start_time = input.runningTime()
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    end_time = input.runningTime()
    basic.showNumber((end_time - start_time) / 1000)
})
basic.forever(function () {
	
})
