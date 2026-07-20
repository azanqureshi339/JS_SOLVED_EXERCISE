// Question # 01
// const currentDate = new Date();
// document.write(currentDate); 

// Question # 02 
// let today = new Date();

// let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
// ];

// alert("Current Month: " + months[today.getMonth()]);

// Question # 03
// let today = new Date();

// let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
// ];

// alert("Today is: " + days[today.getDay()]);

// Question # 04 

// const today = new Date("07-25-2026");
// const day = today.getDay();
// if (day == 0 || day == 6) {
//     alert("It's fun day.");
// }

// Question # 05
// let today = new Date();
// let date = today.getDate();
// if (date >= 15){
//     alert("First fifteen days of the Month");
// }else if (isNaN(date)){
//     alert("Invalid Date!");
// }
// else{
//     alert("Last days of the Month");
// }

// Question # 06
// let currentDate = new Date();
// document.write("Current Date : " + currentDate);

// document.write("<br>");

// let seconds = new Date();
// document.write("Elpsed milliseconds since January 1, 1970: " + seconds.getTime());

// document.write("<br>");

// let mints = new Date();
// document.write("Elpsed minutes since January 1, 1970: " + mints.getMinutes() + "." + mints.getTime());

// Question # 07 
// let today = new Date();
// let hours =  today.getHours();
// if (hours <= 12){
// alert("It's AM");
// }else{
//     alert("It's PM");
// }

// Question # 08
// let laterDate = new Date("December 31, 2020");
// document.write("Later Date : " + laterDate); 

//Question # 10
// let start2015 = new Date("December-05-2015");
// document.write("On reference date " + start2015 + "," + "<br>" + start2015.getTime() + " seconds has passed since beginning of 2015");

// Question # 11
// let currentDate = new Date();
// document.write("Current Date : " + currentDate + "<br>" + "I hour ago, it was " + currentDate);

// Question # 12
// let today =  new Date();
// today.setFullYear(today.getFullYear() - 100);
// console.log(today);

// Question # 13
// const currentYear = new Date().getFullYear();
// let age = +prompt("Enter your Age?");
// let birthYear = currentYear - age;
// document.write("Your age is " + age);
// document.write("<br>");
// document.write("Your birth years is " + birthYear);

// let today = new Date();
// let date = today.setMinutes(today.getMinutes() - 10);
// console.log(today);

// Question # 14
let today = new Date();
let customerName = prompt("Enter Your Full Name?");
let currentMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let units = +prompt("Enter Number Of Units?");
let perUnitCharges = +prompt("Enter Charges per Unit?");

let netAmount = units * perUnitCharges;
let latePaymentCharges = 350;
let grossAmount = netAmount + latePaymentCharges;

document.write(`
<div style="
    border:3px solid black;
    border-radius : 10px;
    width:500px;
    padding:20px;
    margin:20px auto;
    font-family:Arial;
    line-height:30px;
    box-shadow : 0px 0px  20px gray;
">
    <h2 style="text-align:center;">K-Electric Bill</h2>

    <b>Customer Name :</b> ${customerName} <br>
    <b>Month :</b> ${currentMonth[today.getMonth()]} <br>
    <b>Number Of Units :</b> ${units} <br>
    <b>Charges Per Unit :</b> ${perUnitCharges} <br><br>

    <b>Net Amount Payable (Within Due Date) :</b> ${netAmount.toFixed(2)} <br>
    <b>Late Payment Charges :</b> ${latePaymentCharges} <br>
    <b>Gross Amount Payable (After Due Date) :</b> ${grossAmount.toFixed(2)}
</div>
`);