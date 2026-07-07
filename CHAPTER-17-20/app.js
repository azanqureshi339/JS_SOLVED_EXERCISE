// 1) Initialization
// 2) condition--->  5>6 , 5 <
// 3) increment / decrement , i++ , i--

// Question # 03

// for(let i = 1; i <=10; i++){
//     document.write(i + "<br>")
// }

// Question # 04
// const num = +prompt("Enter a number?")
// for (let i = 1; i <= 10; i++) {
//     document.write(num + " x " + i + " = " + i * num + "<br>")
// }

// Question # 05
// let fruits = ["Apple" , "Mango" , "Banana" , "Orange" , "Graps"];
// for(let i = 0; i < fruits.length; i++){
//     document.write(fruits[i] + "<br>");
// }

// Question # 06

// let counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// document.write("Counting" + "<br>");
// for (let i = 0; i <= 9; i++) {
//     document.write(counting[i] + "<br>");
// }

// let reverseCounting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// document.write("Reverse Counting" + "<br>");
// for (let i = 9; i >= 0; i--) {
//     document.write(reverseCounting[i] + "<br>");
// }

// let evenNumbers = [1,2,3,4,5,6,7,8,9,10];
// document.write("Even" + "<br>")
// for (let i = 0; i < evenNumbers.length; i++){
//     if (evenNumbers[i] % 2 === 0){
//         document.write(evenNumbers[i] + "<br>")
//     }
// }

// Question # 07
// const arr = ["cake", "apple pie", "cokie", "pastry" , "lolypop"];
// const items = prompt("Enter a food?");
// let isFound = false;
// for (let i = 0; i < arr.length; i++) {
//     if (items === arr[i]) {
//         alert("Correct!")
//         isFound = true;
//     }
// }
// if (!isFound) {
//     alert("Sorry!")
// }

// Question # 08
// const arr = [2, 5, 8, 10, 9, 14];
// let largestNumber = arr[0]; //10

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largestNumber) { largestNumber = arr[i]; }
// }

// console.log(largestNumber);


// Question # 09
// const arr = [2, 5, 8, 10, 9, 14];
// let smallestNumber = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallestNumber) { smallestNumber = arr[i]; }
// }

// console.log(smallestNumber);

// Question # 10
// for (let i = 1; i < 101; i++) {
//     if (i % 5 === 0) {
//         document.write(i);
//     }
// }

// Question: 01
// const arr = [[0, 1, , 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// for (let i = 0; i < arr.length; i++){
//     document.write(i);
//     for (let i = ; i >= 9; i--){
//         document.write(i)
//     }
// }

// for (let i = 5; i >= 1; i--) {
//     let pattern = "";
//     for (let j = 1; j <= i; j++) {
//         pattern += " *"
//     }

//     console.log(pattern);
// }
// for (let i = 1; i <= 2; i++) {

//     document.write("Outer:", i + "<br>");

//     for (let j = 1; j <= 3; j++) {
        // document.write(" &nbsp; " + "&nbsp;"+" &nbsp; Inner:", j + "<br>");
//     }

// }

// Outer loop, 1
//   Inner loop, 1
//   Inner loop, 2
// Outer loop, 2
// 4,5,6
// 4,5,6
// 4,5,6