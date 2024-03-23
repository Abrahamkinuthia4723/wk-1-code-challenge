// Prompts the user to input speed.
// This variable will store the user's input, which is the speed of the car.
let userInput = prompt("Enter the speed of the car");

// Constants are used to define values that cannot be changed.
// Here, the speed limit is defined as a constant.
const speedLimit = 70;

// This function, examinecarspeed, takes one parameter: speed.
// The function will examine the speed of the car, calculate the number of demerit points, and check if the driver's license should be suspended.
function examinecarspeed(speed) {
    // Initializing the Demeritpoints variable to 0.
    // This variable will store the total number of demerit points.
    let Demeritpoints = 0;

    // An if-else statement that checks if the speed of the car is less than or equal to the speed limit.
    // If the condition is true, the driver will not receive any demerit points and a message will be logged to the console.
    if (speed <= 70) {
        Demeritpoints = 0;
        console.log("ok.");
    }
    // If the speed of the car is greater than the speed limit, the function calculates the number of demerit points.
    // The driver gets one demerit point for every 5 km/s above the speed limit.
    else if (speed > 70) {
        // The number of demerit points is calculated by dividing the difference between the car's speed and the speed limit by 5.
        Demeritpoints = (speed - 70) / 5;
        // The calculated number of demerit points is then logged to the console.
        console.log("points: " + Demeritpoints);
    }

    // This if-statement checks if the driver's total number of demerit points is greater than 12.
    if (Demeritpoints > 12) {
        // If the driver's total number of demerit points is greater than 12, the function will log a message indicating that the license is suspended.
        console.log("License suspended.");
    }
}

// Example of the program's execution
// Here, the program is examining the speed of a car traveling at 80 km/s.
examinecarspeed(80); 
// The output will be "points: 2."
// Since the number of points is not greater than 12, the license is not suspended.
