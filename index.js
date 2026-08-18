//   Section 1-Variables & Oprators

// 1 Basic Calculator

 let a = 20;
 let b = 15;

console.log(a + b);
 console.log(a - b);
 console.log(a * b);
 console.log(a / b);
 console.log(a % b);

// 2. Swap Two Numbers

let a = 10;
 let b = 20;
 let c;

 r = a ;
 a = b ;
b = r ;
console.log(a ,b );


// 3. Student Marks

let Maths = 80 ;
let Eng = 89 ;
let Science = 95 ;

let total = Maths + Eng + Science ;
console.log(total);
let average = total/3 ;
console.log(average);
let percentage = average ;
console.log(percentage);


// 4. Shopping Bill

let Price = 200 ;
let Quantity = 5 ;
let totalBill = Price * Quantity ;
console.log(totalBill);
let discount = totalBill * 10 / 100 ;
console.log(discount);
let finalBill = totalBill - discount ;
console.log(finalBill);

// 5. Area Calculator

let lenght = 10 ;
let width = 5 ;

let areaOfRetangle = lenght * width ;
console.log(areaOfRetangle);
let perimeter = 2 *(lenght + width) ;
console.log(perimeter);


// Section 2-Comparison & Logical Oprators

// 6. Even or Odd

let Num = 23 ;
if(Num % 2 ===0){
    console.log("Even number");
} else {
    console.log("Odd number");
}

// 7. Positive Nigative or Zero

let Num = 10 ;
if(Num > 0){
    console.log("Positive Number");
}else if(Num < 0){
    console.log("Negative Number");
}else{
    console.log("Zero");
}


// 8. Greater Number

let Num1 = 30 ;
let Num2 = 50 ;
if(Num1 > Num2){
    console.log("First Number is Greater");
}else if(Num2 > Num1){
    console.log("Second Number is Greater");
}else{
    console.log("Both Number are Equal");
}

// 9. Largest of Three Numbers

let Num1 = 40 ;
let Num2 = 30 ;
let Num3 = 80 ;
if(Num1 > Num2 && Num1 > Num3){
    console.log("First Number is Largest");
}else if(Num2 > Num1 && Num2 > Num3){
    console.log("Second Number is Largest");
}else{
    console.log("Third Number is Largest");
}


// 10. Voting Eligibility

let age = 21 ;
if(age >= 18){
    console.log("Eligibility to vote");
}else{
    console.log("Not eligibility to vote");
}


// 11. Driving Eligibility

let age = 21 ;
let hasLicense = false ;
if(age >= 18 && hasLicense === true){
    console.log("Eligible to drive");
}else{
    console.log("Not eligible to drive");
}


// 12. Number Range

let number =85 ;

if(number >= 10 && number <= 100){
    console.log("Number is between 10 and 100");
} else{
    console.log("Number is not between 10 and 100");
}

// Section 3-if, elde-if & Nested Condition

// 13. Student Grade

let percentage = 89.9 ;

if(percentage <= 100 && percentage >= 90){
    console.log("Grade A");
} else if(percentage < 90 && percentage >=80){
    console.log("Grade B");
} else if(percentage < 80 && percentage >=70){
    console.log("Grade C");
} else if(percentage < 70 && percentage >= 60){
    console.log("Grade D");
} else if(percentage < 60 && percentage >= 40){
    console.log("Grade E");
} else{
      console.log("Grade F");
}

// 14. Student Result

let Sub1 = 50 ;
let Sub2 = 45 ;
let Sub3 = 60 ;

let total = Sub1 + Sub2 + Sub3 ;
let average = total / 3 ;

if(Sub1 < 40 || Sub2 < 40 || Sub3 <40){
    console.log("Fail");
} else if(average >= 75){
    console.log("Result : Pass with Distinction");
} else if(average >= 60){
    console.log("Result : Pass with First Division");
}else if(average >= 50){
    console.log("Result : Pass with Second Division");
} else {
    console.log("Result : Pass");
}

// 15. Electricity Bill 

let unit = 250 ;
let bill = 0 ;

if(unit <=100){
     bill = unit * 5 ;
} else if(unit <=200){
    bill = 500 +(unit - 100) * 7 ;
}  else {
    bill = 1200 + (unit - 200)* 10 ;
}
console.log("bill: " +bill);

// 16. Simple Login 

let userName = "admin";
let password = "12345";
if(userName === "admin" && password === "12345"){
    console.log("Login successful");
} else {
    console.log("Invalid userNmae or password");
}

// 17.  Salary Bonus

let salary = 50000 ;
let experience = 7 ;

let bonusPercentage = 0 ;

if(experience >= 10){
     bonusPercentage = 0.20 ;
} else if(experience >= 5 && experience <10){
    bonusPercentage = 0.10 ;
} else if(experience >= 2 && experience <5){
    bonusPercentage = 0.05 ;
}else {
    bonusPercentage = 0 ;
}

let bonusAmount = salary * bonusPercentage ;
let finalSalary = salary + bonusAmount ;

console.log("Original Salary:" +salary);
console.log("Bonus :" +bonusAmount);
console.log("Final Salary:" +finalSalary);

//  18. Age Category

let age = 21 ;
if(age > 0 && age <= 12){
    console.log("Child");
}else if(age > 12 && age <= 19){
    console.log("Teenager");
} else if(age > 19 && age <= 59){
    console.log("Adult");
} else {
    console.log("Senior Citizen ");
}

// Section 4 - switch-case

// 19.  Day of the Week 

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Sutarday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// 20. Simple Calculator

let firstNum = 20 ;
let secondNum = 5 ;
let oprator = '*'

switch(oprator){
    case '*':
        console.log("Multiple Number:" +(firstNum*secondNum));
}


// 21. Month Name

let month = 8 ;

switch(month){
    case 1 :
        console.log("Jan");
        break ;
        case 2 :
        console.log("Feb");
        break ;
        case 3 :
        console.log("Mar");
        break ;
        case 4 :
        console.log("Apr");
        break ;
        case 5 :
        console.log("May");
        break ;
        case 6 :
        console.log("Jun");
        break ;
        case 7 :
        console.log("July");
        break ;
        case 8 :
        console.log("Aug");
        break ;
        case 9 :
        console.log("Sep");
        break ;
        case 10 :
        console.log("Oct");
        break ;
        case 11 :
        console.log("Nov");
        break ;
        case 12 :
        console.log("Dec");
        break ;
        default:
            console.log("Invalid Month");
}


// 22.Menu-Based Calculator 

let Num1 = 20;
let Num2 = 6;
let Choice = 3;

switch (Choice) {
    case 1:
        console.log("Add Number:"+(Num1 + Num2));
        break;
    case 2:
        console.log("Subtrack Number:"+(Num1 - Num2));
        break;
    case 3:
        console.log("Multiple Number:"+(Num1 * Num2));
        break;
    case 4:
        console.log("Divide Number:"+(Num1 / Num2));
        break;
    case 5:
        console.log("Modules Number:"+(Num1 % Num2));
        break;
    default:
        console.log("Invalid Choice");
}


// 23.Traffic Signal 

let trafficSignal = "yellow" ;

switch(trafficSignal){
    case "red":
        console.log("Stop");
        break ;
        case "yellow":
        console.log(" Wait ");
        break ;
        case "green":
        console.log("go");
        break ;
        default :
        console.log("Invalid signal ");
}


// Section 5 - Mixed Problems

// 24. ATM Transaction

let balance = 10000 ;
let withDrawAmount = 3000 ;
if(withDrawAmount > 0 && withDrawAmount < balance){
    balance = balance - withDrawAmount ;
    console.log("withDrawal Successful");
    console.log("Remaining balance:" +balance);
} else {
    console.log("Transaction Faild");
}


// 25. Movie Ticket System

let age = 21 ;
let numberOfTickets = 4;
let ticketPrice = 0 ;
if(age < 12){
    ticketPrice = 100 ;
}else if(age >=12 && age <= 59){
    ticketPrice = 200 ;
} else if(age >= 60){
    ticketPrice = 120 ;
}
let totalCost = ticketPrice * numberOfTickets ;
console.log("Total ticket price:" +totalCost);


// 26. Restaurant Menu

let Choice = 2;
let Quantity = 3;
let pricePerItems = 0;
switch (Choice) {
    case 1:
        pricePerItems = 150;
        break ;
    case 2:
        pricePerItems = 250;
        break ;
    case 3:
        pricePerItems = 180;
        break ;
    case 4:
        pricePerItems = 120;
        break ;
        default:
            console.log("Invalid Choice");
}

if(pricePerItems > 0){
    let totalBill = pricePerItems * Quantity ;
    console.log("Total:" +totalBill );
}

// 27. Electricity Bill + Discount 

let Units = 250 ;
let OriginalBill = 0 ;
let discount = 0 ;
let finalBill = 0 ;

if(Units <= 100){
    OriginalBill = units* 5 ;
}else if (Units <= 200){
        OriginalBill = units*7 ;
} else {
    OriginalBill = Units * 10 ;
}
if(OriginalBill >= 2000){
    discount = OriginalBill * 0.10 ;
}

 finalBill = OriginalBill - discount ;
console.log("Units:" + Units);
console.log("OriginalBill:" + OriginalBill);
console.log("discount:" + discount);
console.log("finalBill:" + finalBill);


// 28. Simple ATM Menu

let balance = 5000 ;
let choice = 2 ;
let amount = 1500 ;

switch(choice){
    case 1 :
        console.log("Current Balance:" +balance);
        break ;
        case 2 :
            balance = balance + amount ;
            console.log("Amount Deposite. New Balance:" +balance);
            break ;
            case 3 :
                if (amount <= balance){
                    balance = balance - amount ;
                    console.log("Withdrawal Successful.Remaining Balance" +balance);
                } else {
                    console.log("Error:");
                }
                break ;

                case 4 :
                    console.log("Thank you for using our ATM.");
                    break ;
                    default :
                    console.log("Invalid Choice! Please enter a number between 1 and 4.");
}


// // Q 29. Number Classification

let num = 150;

if (num > 0){
    console.log("Positive");
}
else if(num < 0){
    console.log("Negative");
}
else{
    console.log("Zero");
}

// even or odd 

if (num % 2 === 0){
    console.log("Even");
}
else{
    console.log("Odd");
}

// greater, less or equal to 100

if (num > 100){
    console.log("Gretaer than 100");
}
else if(num < 100){
    console.log("Less than 100");
}
else{
    console.log("Equal to 100");
}

// Q 30. Student Result System 


let studentName = "Rahul";
let rollNum = 101;

let math = 95;
let science = 88;
let english = 72;

let totalMarks = math + science + english;
let percentage = totalMarks / 3;

let grade;

if (math < 40 || science < 40 || english < 40){
    grade = "F";
}

else if (percentage >= 90){
    grade = "A";
}
else if (percentage >= 80){
    grade = "B";
}
else if (percentage >= 70){
    grade = "C";
}
else {
    grade = "E";
}

let result;

if (math >= 40 && science >= 40 && english >= 40){
    result = "PASS";
}
else{
    result = "FAIL"
}

console.log("------------------------------------");
console.log(" STUDENT RESULT");
console.log("------------------------------------");

console.log("Name                      :", studentName);
console.log("Name                      :", rollNum);
console.log("Math                      : ", math);
console.log("Science                   : ", science);
console.log("English                   : ", english);
console.log("Total Marks               : ", totalMarks);
console.log("Percentage                : ",percentage + "%");
console.log("Grade                     : ", grade);
console.log("--------------------------------------");
console.log("Result                    : ", result);

console.log("--------------------------------------");