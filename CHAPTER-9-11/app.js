//Question # 01
// let city = prompt("Enter a city?");
// if (city == "karachi") {
//     alert("Welcome to city of lights");
// }

//Question # 02
// let gender = prompt("Enter a Gender?")
// if (gender == "male") {
//     alert("Good Morning Sir!")
// } else if (gender == "female") {
//     alert("Good Morning Ma'm!")
// }
//Question # 03
// let signalColor = prompt("Road traffic signal")
// if (signalColor == "red") {
//     alert("Must Stop")
// } else if (signalColor == "yellow") {
//     alert("Ready to move")
// } else if (signalColor == "green") {
//     alert("Move Now")
// }
//Question # 04
// let fuel = prompt("How much fuel in the car?")
// if(fuel < 0.25){
//     alert("PLease refil the fuel in your car")
// }

//Question # 05
//..................... //

// var totalMarks = +prompt("Enter total marks")
// var obtainedMarks = +prompt("Enter obtained marks")
// var percentage = obtainedMarks / totalMarks * 100;

// document.write("Total Marks: " + totalMarks + "");
// document.write("<br>Marks Obtained " + obtainedMarks + "")
// document.write("<br>Percentage: " + percentage + "% <br>")
// if (percentage >= 90) {
//     document.write("Grade: A+")
// }
// else if (percentage >= 80) {
//     document.write("Grade: A")
// }
// else if (percentage >= 70) {
//     document.write("Grade: B")
// }
// else if (percentage >= 50) {
//     document.write("Grade: C")
// }
// else if (percentage >= 40) {
//     document.write("Grade: D")
// }
// else {
//     document.write("Grade: Fail")
// }
// document.write("<br>Remarks: You need to improve")

//Question # 07
// let myNumber =  7;
// const usernumber = +prompt("Enter a number?")
// if (myNumber === usernumber){
//     alert("Correct answer!")
// }else if (myNumber +1 === usernumber){
//     alert("You're very close")
// }

//Question # 08
// let temperature = +prompt("What is today's temperature?")
// if (temperature >= 40) {
//     alert("It is to hot outside")
// } else if (temperature >= 30) {
//     alert("The Weather today is Normal")
// } else if (temperature >= 20) {
//     alert("Today's Wether is Cool")
// } else if (temperature >= 10) {
//     alert("OMG! Today's Weather is Cool")
// }

//Question # 09
const num1 = +prompt("Enter a First Number?");
const operators = prompt("Enter a Operator?");
const num2 = +prompt("Enter a Second Number?");
if (isNaN(num1)) {
    alert("Error! Please Valid Number")
}
else if (isNaN(num2)) {
    alert("Error! Please Valid Number")
}
else if (operators == "+") {
    alert(num1 + num2)
}
else if (operators == "*") {
    alert(num1 * num2)
}
else if (operators == "/") {
    alert(num1 / num2)
}
else if (operators == "-") {
    alert(num1 - num2)
}
else if (operators == "%") {
    alert(num1 % num2)
}
else {
    alert("Error! Please enter Operator & Numbers!")
}