//prompts the user to input basic salary and benefits.
let basicSalary = prompt("Enter your basic salary:");  // variable to store the basic salary of the user
let benefits = prompt("Enter any benefits you receive:");  // variable to store any additional benefits the user receives

//calculate gross salary.
let grossSalary = basicSalary + benefits;  // gross salary is calculated as the sum of basic salary and benefits

//function to calculate payee based on the tax rates provided in the table using monthly taxable pay.
function calculatePayee(grossSalary) {
    //check if the gross salary is less than or equal to 24000
    if (grossSalary <= 24000){
        console.log(grossSalary * 0.1);  //if so, calculate the payee as 10% of the gross salary
    }
    //check if the gross salary is greater than 24000 and less than or equal to 32,333
    else if (grossSalary >= 24001 && grossSalary <= 32333){
        console.log(grossSalary * 0.25);  //if so, calculate the payee as 25% of the gross salary
    }
    //all other cases
    else {
        console.log(grossSalary * 0.3);  //calculate the payee as 30% of the gross salary
    }
}

//A function to calculate NHIF deductions based on the rates provided on the table.
//implement claculations based on nhif rates.
function calculateNHIFdeductions(grossSalary) {
    //check if the gross salary is less than or equal to 5999
    if (grossSalary <= 5999) {
        return 150;  //if so, return the NHIF deductions as 150
    }
    //check if the gross salary is greater than or equal to 6000 and less than or equal to 7999
    else if (grossSalary >= 6000 && grossSalary <= 7999) {
        return 300;  //if so, return the NHIF deductions as 300
    }
    //check if the gross salary is greater than or equal to 8000 and less than or equal to 11999
    else if (grossSalary >= 8000 && grossSalary <= 11999) {
        return 400;  //if so, return the NHIF deductions as 400
    }
    //check if the gross salary is greater than or equal to 12000 and less than or equal to 14999
    else if (grossSalary >= 12000 && grossSalary <= 14999) {
        return 500 ;  //if so, return the NHIF deductions as 500
    }
    //check if the gross salary is greater than or equal to 15000 and less than or equal to 19999
    else if (grossSalary >= 15000 && grossSalary <= 19999) {
        return 600;  //if so, return the NHIF deductions as 600
    }
    //check if the gross salary is greater than or equal to 20000 and less than or equal to 24999
    else if (grossSalary >= 20000 && grossSalary <= 24999) {
        return 750;  //if so, return the NHIF deductions as 750
    }
    //check if the gross salary is greater than or equal to 25000 and less than or equal to 29999
    else if (grossSalary >= 25000 && grossSalary <= 29999) {
        return 850;  //if so, return the NHIF deductions as 850
    }
    //check if the gross salary is greater than or equal to 30000 and less than or equal to 34999
    else if (grossSalary >= 30000 && grossSalary <=34999) {
        return 900;  //if so, return the NHIF deductions as 900
    }
    //Check if the gross salary is within the range of 35000 to 39999, and assign the appropriate NHIF deduction value.
    else if (grossSalary >= 35000 && grossSalary <= 39999) {
        return 950;
    } 
    // Check if the gross salary is within the range of 40000 to 44999, and assign the appropriate NHIF deduction value.
    else if (grossSalary >= 40000 && grossSalary <= 44999) {
        return 1000;
    } 
    // Check if the gross salary is within the range of 45000 to 49999, and assign the appropriate NHIF deduction value.
    else if (grossSalary >= 45000 && grossSalary <= 49999) {
        return 1100;
    } 
    // Check if the gross salary is within the range of 50000 to 59999, and assign the appropriate NHIF deduction value.
    else if (grossSalary >= 50000 && grossSalary <= 59999) {
        return 1200;
    } 
    // Check if the gross salary is within the range of 60000 to 69999, and assign the appropriate NHIF deduction value.
    else if (grossSalary >= 60000 && grossSalary <= 69999) {
        return 1300;
    } 
    // Check if the gross salary is within the range of 70000 to 79999, and assign the appropriate NHIF deduction value.
    else if (grossSalary >= 70000 && grossSalary <= 79999) {
        return 1400;
    }
    // Check if the gross salary is within the range of 80000 to 89999, and assign the appropriate NHIF deduction value.
    else if (grossSalary >= 80000 && grossSalary <= 89999) {
        return 1500;
    }
    // Check if the gross salary is within the range of 90000 to 99999, and assign the appropriate NHIF deduction value.
    else if (grossSalary >= 90000 && grossSalary <=99999) {
        return 1600;
    }
    //check if th e gross salary is 100000 and above, and assign the appropriate NHIF deduction value.
    else if (grossSalary >= 100000) {
        return 1700
    }
}
// A function to calculate NSSF deductions based on NSSF rate.
function calculateNSSFDeductions(grossSalary) {
    // Calculate the NSSF deductions as a percentage of the gross salary (6%).
    // The input gross salary is multiplied by 0.06 to find the NSSF deduction amount.
    return grossSalary * 0.06;
}
// calculate net salary.
let netSalary = grossSalary - calculatePayee(grossSalary) - calculateNHIFdeductions(grossSalary) - calculateNSSFDeductions(grossSalary);