const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

function bonus(employee){
  let annualBonus;
  if(employee.reviewRating <=2){
    annualBonus = 0;
  }
  else if (employee.reviewRating == 3){
    annualBonus = employee.annualSalary * .04;
  }
  else if (employee.reviewRating == 4){
    annualBonus = employee.annualSalary * .06;
  }
  else if (employee.reviewRating == 5){
    annualBonus = employee.annualSalary * .1;
  }
  finalBonus(employee, annualBonus);
}

function finalBonus(employee, calculatedBonus){
if (employee.employeeNumber.length == 4){
  calculatedBonus += employee.annualSalary * .05;
 }
//after much debate we went with $9718 for Scout's bonus...
//due to the fact that he had seniority and a good rating
//we decided the company meant to take the 1% off before the cap of 13%

 if (employee.annualSalary > 65000){
  calculatedBonus = calculatedBonus * .99;
}
 if ((calculatedBonus / employee.annualSalary) > .13){
  calculatedBonus = employee.annualSalary * .13;
}
if (calculatedBonus < 0){
  calculatedBonus = 0;
}
calculatedBonus = Math.round(calculatedBonus);
employee.bonus = calculatedBonus; 
return calculatedBonus;
};


for(let i = 0; i < employees.length; i++){
let calculatedBonus = bonus(employees[i]);
console.log(`${employees[i].name}'s bonus is  $${employees[i].bonus}.`)
};

console.log(employees);

//let outputtext = `<h3> ${employee.name} </h3>`