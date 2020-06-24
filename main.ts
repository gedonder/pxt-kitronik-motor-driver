input.onButtonPressed(Button.A, function () {
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor1, kitronik_motor_driver.MotorDirection.Forward, 100)
    kitronik_motor_driver.motorOn(kitronik_motor_driver.Motors.Motor2, kitronik_motor_driver.MotorDirection.Reverse, 100)
    kitronik_motor_driver.motorOff(kitronik_motor_driver.Motors.Motor1)
})
