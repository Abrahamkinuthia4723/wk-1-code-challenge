// Prompts the user to input student marks.
let userInput = prompt("Enter the student marks (0-100):");

// Validates the input
if (/^\d+$/.test(userInput) && Number(userInput) >= 0 && Number(userInput) <= 100) {
    // Converts the input to a number
    let marksNumber = Number(userInput);

    // Determines the grade of a student based on their marks
    function determineGrade(marks) {
        let grade;

        if (marks > 79) {
            // If the marks greater than 79, the function returns "A"
            grade = "A";
        } else if (marks >= 60 && marks <= 79) {
            // If the marks are between 60 and 79 (inclusive), the function returns "B"
            grade = "B";
        } else if (marks >= 50 && marks <= 59) {
            // If the marks are between 50 and 59(inclusive), the function returns "C"
            grade = "C";
        } else if (marks >= 40 && marks <= 49) {
            // If the marks are between 40 and 49(inclusive), the function returns "D"
            grade = "D";
        } else {
            // If the marks are below 40, the function returns "E"
            grade = "E";
        }

        // Displays the grade
        console.log('The grade is: $(grade)');
        return grade;
    }

    let grade = determineGrade(marksNumber);
} else {
    // Displays an error message if the input is invalid
    alert("Invalid input. Please enter a number between 0 and 100.");
}