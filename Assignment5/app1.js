// // TASK 1 - Greet User

// var fName = prompt('Enter you First Name');
// var lName = prompt('Enter your Last name');
// var fullName = (fName +" "+ lName)
// document.write('Hello '+ fullName+ '. Welcome to assignment 6')


// // TASK 2 - FInd length of User String 

// var favModel = prompt('Enter you favourite mobile model');
// document.write('My favourite phone is :'+ favModel + '<br>');
// document.write('Length of string is :' + favModel.length)


// // TASK 3 - Index of N

// var country = ('Pakistan')
// var n = country.indexOf('n')
// document.write('String: ' + country+ '<br>')
// document.write('Index of N: ' + n)

// // TASK 4 - Index of L

// var message = ('Hello World')
// var l = message.indexOf('l', 4)
// document.write('String: ' + message+ '<br>')
// document.write('Last index of L: ' + l)

// // Task 5 - Character at Index

// var country = ("Pakistani")
// var char= country.charAt(3)
// document.write('String: ' + country+ '<br>')
// document.write("Character at Index 3: " + char)

// // Task 6 - Q1 using String concat () method

// var fName = prompt('Enter you First Name');
// var lName = prompt('Enter your Last name');
// var fullName = fName.concat(lName);
// document.write(fullName)


// // Task 7 - Replace

// var city = 'Hyderabad'
// var rep = city.replace('Hyder', "Islam")
// document.write("City: " + city + "<br>")
// document.write("After replacement: " + rep)

// // Task8 - Again Replace

// var message = ("Ali and Same are best friends. They play cricket and football together.")
// var replace = message.replace(/and/g, "&");
// document.write(replace)


// // Task 9 - String into number
// Number("472")
// var a = 472 
// document.write("Value: " + (a.toString()) + '<br>' + 'Type: String'+ "<br>" )
// document.write( 'Value: ' + 472 + "<br>" + 'Type: number')


// // Task 10 - toUpperCase
// var input = prompt('Enter something here')
// input= input.toUpperCase();
// document.write(input)


// // Task 11 - Title Case
// var input = prompt('Enter something here')
// document.write(input[0].toUpperCase() + input.slice(1).toLowerCase())


// // Task12 - Convert variable to string
// var number = '35.36';
// document.write( 'Number: ' + parseInt(number))

// // Task 13- User Input @,.!

// var userInput = prompt("Enter Username");
// if (userInput = '@') {
//     alert('Enter a valid user name')
// } esleif(userInput = '!');{
//     alert('Enter a valid user name')
// } esleif(userInput = ',');{
//     alert('Enter a valid user name')
// } esleif(userInput = '.');{
//     alert('Enter a valid user name')
// }

// // // Task 14 - Array
// var food = ["cake","apple pie","cookie","chips","patties"];
// var welcome=prompt("Welcome to ABC Bakery.What do you want to order Sir/Ma'm");
// var index = food.indexOf(welcome);
// if (index > -1) {
//     document.write(welcome+" is available at index "+(index+1)+" of our bakery");
//     check=true;
// }
// else {
//     document.write("We are sorry "+welcome  +" is not available in our bakery");
// }


// // Task 16- String Split

// var university = 'University of Karachi';
// for(i=0; i<university.length; i++){
//     document.write(university[i] + '<br>')
// }

// // Task 17- Last index
// var input = prompt('Write you input');
// var lastChar = input.length-1
// var lastLet = input.charAt(lastChar)
// document.write('User Input: ' + input+ '<br>')
// document.write('Last character of Input: ' + lastLet)


// Task 18- The quick brown fox

// var string = 'the quick brown fox jumps over the lazy dog';
// var number = (string.match(/the/g) || []).length;
// document.write("Text: " + string + "<br>");
// document.write("There are " + number + " occurrences of word the ");

// // Task 1 - Positive Int

// var input = +prompt('Enter any positive number');
// document.write('number: ' + input + '<br>')
// var round = Math.round(input)
// document.write('round of value: '+ round + '<br>')
// var floor = Math.floor(input)
// document.write('floor value: '+ floor + '<br>')
// var ceil = Math.ceil(input)
// document.write('ceil value: '+ ceil + '<br>')

// // Task 2 - Negative Int

// var input = +prompt('Enter any negative number');
// document.write('number: ' + input + '<br>')
// var round = Math.round(input)
// document.write('round of value: '+ round + '<br>')
// var floor = Math.floor(input)
// document.write('floor value: '+ floor + '<br>')
// var ceil = Math.ceil(input)
// document.write('ceil value: '+ ceil + '<br>')

// // Task 3 - Absolute Value

// var number = +prompt("Enter a value");
// var number1 = Math.abs(number);
// document.write("The Absolute value of " + number + " is " + number1)


// // TASK 4 - Dice 
// var number = Math.floor(Math.random() * 6 ) +1;
// document.write('Random Dice value: ' + number);


// // Task 5- Random Coin

// var toss = Math.floor(Math.random() * 2) + 1
// if( toss === 1){
//     document.write(toss + "<br>" + "Random Coin Value: Heads")
// }else{
//     document.write(toss + "<br>" +"Random Coin Value: Tails")
// }

// // Task 6- Random Numbers

// var number = Math.floor(Math.random() * 100 ) +1;
// document.write('Random number between 1 and 100: ' + number);

// // Task 7 - Weight

// var weight = +prompt('Enter Your Weight');
// var roundWeight = Math.round(weight);
// var ceilWeight = Math.ceil(weight);
// var floorWeight = Math.floor(weight)
// document.write('Weight: ' + weight + '<br>');
// document.write('Weight In Round: ' + roundWeight +  'Kgs'+ '<br>');
// document.write('Weight In Ceil: ' + ceilWeight+ 'Kgs'+ '<br>');
// document.write('Weight In Floor: ' + floorWeight +  'Kilograms'+ '<br>'+ '<br>');
// document.write('Weight of the user is: '+ weight+ ' kgs.' + '<br>')


// // Task 8 - Random Number

// var input = +prompt("Enter a number between 1 to 10")
// var number = Math.floor(Math.random() * 10 ) +1;
// if(number === input){
//     alert('Congrats')
// } else(alert('Try again'))

// //Task 1 - Current Date and time (dAt means Date and Time)

// var dAt = new Date()
// document.write(dAt)


// // Task 2 - Current Month
// var month = ["January","February","March","April","May","June","July","August","September","October","November","December"]
// var date = new Date();
// var currMonth = month[date.getMonth()];
// alert("Current Month: " + currMonth)


// TASK 3 - Current Day
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var date = new Date();
// var currDay = dayNames[date.getDay()];
// alert("Today is " + currDay)



// // TASK 4 - It's Fun day
// var dayNames = ["Sunday", "Monday", "Tueday", "Wedneday", "Thursday", "Friday", "Saturday"];
// var date = new Date();
// var currDay = dayNames[date.getDay()];
// if(currDay === 0 || currDay === 6){
//     document.write("it's FunDay")
// }else{
//     document.write("It is Working Day")
// }



// //TASK 5 - First 15 days
// var date = new Date();
// if (date <= 15){
//     document.write("First fifteen days of the month ")
// } else{
//     document.write("Last days of the month")
// }


// //TASK 6 - Minutes since 1970
// var date = new Date();
// document.write("Current Date: " + date + "<br>")
// var year = date.getTime();
// document.write("Elapesd milliseconds since January 1, 1970: " + year + "<br>")
// var mint = year/(1000*60)
// document.write("Elapesd minutes since January 1, 1970: " + mint + "<br>")



// //TASK 7 - AM PM
// var date = new Date();
// var hour = date.getTime();
// if(hour < 12){
//     document.write("It's AM")
// }else{
//     document.write("It's PM")
// }



// //TASK 8 - Later Date
// var laterDate = new Date("December 31, 2020");
// document.write("Later Date Of Year: " + laterDate)


// //TASK 9 - Ramadan Date
// var date = new Date().getTime()
// var rdate = new Date("June 18, 2015").getTime();
// var diff = (date - rdate );
// var rdiff = Math.floor(diff / (1000*60*60*24))
// document.write(rdiff + " days have passed since 1st Ramzan 2015." )



// //TASK 10 - Time has passed
// var date = new Date("January 1,2015").getTime()
// var date1 = new Date("December 5, 2015").getTime();
// var diff = (date1 - date );
// var diff1 = Math.floor(diff / (1000*60))
// document.write(diff1 + " days have passed since 1st Ramzan 2015." )



// //TASK 11 - Complicated
// var date = new Date();
// document.write("Curent Date: " + date + "<br>")
// var hour = new Date();
// var hour1 = hour.getHours() - 1
// hour.setHours(hour1)
// document.write( "1 hour ago, it was " + hour)




// //TASK 12 - Date Object
// var date = new Date();
// document.write("Curent Date: " + date + "<br>")
// var backYear = new Date();
// backYear.setFullYear(1920)
// document.write( "100 Years Back, it was " + backYear)




// //TASK 13 - Calculating Year of birth
// var dob = new Date(prompt("Enter Your Birth Year"));
// var dob1 = dob.getTime();
// var today = new Date();
// var today1 = today.getTime();
// var diff = today1 - dob1
// var age = Math.floor(diff/(1000*60*60*30*12*24));
// var birthYear = new Date().getFullYear() - age 
// document.write("Your age is " + age + "<br>");
// document.write("Yor Birth Year is " + birthYear)



// //TASK 14 - K-electric Bill
// var name = prompt("Enter Customer Name");
// var month = prompt("Enter Month Name");
// var unit = +prompt("Enter Used Units");
// var unitPrice = +prompt("Enter Price of units ");
// var charge = 200;
// var billPay = unit*unitPrice;
// var billAfterDate = billPay + charge;
// document.write("<h1>" + "K-Electric Bill " + "</h1>" + "<br>"  );
// document.write("Customer Name: " + name +  "<br>");
// document.write("Current Month: " +  month +  "<br>");
// document.write("Number of units: " +  + unit +  "<br>");
// document.write("Charges per unit: " +  + unitPrice  + "<br>" + "<br>");
// document.write("Net Amount Payable (within Due Date): " + billPay.toFixed(2) + "</h1>" + "<br>");
// document.write("Late Payment Surcharge: " +  charge.toFixed(2) + "<br>");
// document.write("Gross Amount Payable (after Due Date):" + billAfterDate.toFixed(2)  + "<br>");

// //TASK 1 - Current Day and TIme
// function date(){
//     document.write(new Date())
// };
// date();




// //TASK 2 - Name
// var firstName = prompt("Enter First Name")
// var lastName = prompt("Enter Last Name")
// function fullName(a ,  b){
//     var add = a + " " + b
//     return add;
// }
// alert(fullName(firstName, lastName))






// //TASK 3 + Sum Of Numbers
// var val1 = +prompt("Enter First value")
// var val2 = +prompt("Enter second value")

// function sum(a,b){
//     var theSum = a+b
//     return theSum;
// }

// alert(sum(val1, val2))




// //TASK 4 - Calculator
// var val1 = +prompt("Enter First value")
// var val2 = +prompt("Enter second value")
// var opr = prompt("Enter operater value")
// function calc(val1, opr, val2){
//     if(opr ==="+"){
//         return val1 + val2
//     }else if (opr === "-"){
//         return val1- val2
//     }else if (opr === "*"){
//         return val1 * val2
//     }else if (opr === "/"){
//         return val1 / val2
//     }else {
//         return "Incorrect Operation"
//     }
// }
// document.write(calc(val1, opr, val2));




// //TASK 5 - Square 
// var val1 = +prompt("Enter value")
// function sqr(val1 ){
//     var sqr1 = Math.pow(val1, 2);
//     return sqr1;
// }
// alert(sqr(val1));




// //TASK 6 - Factorial
// var val1 = +prompt("Enter value")
// function factorialize(num) {
//     if (num < 0) 
//           return -1;
//     else if (num == 0) 
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
//   }  
// alert(factorialize(val1))




// //TASK 7 - Last Input
// var val1 = +prompt("Enter First Number")
// var val2 = +prompt("Enter second Number")
// function myFunction(a,b) {
//    for( var i = a; i <= b ; i++  ){
//     document.write(i + "<br>" )
// }
// }
// myFunction(val1 ,val2);
// var val1 = +prompt("Enter First Number")
// var val2 = +prompt("Enter second Number")
// for( var i = val1; i <= val2 ; i++  ){
//     document.write(i + "<br>" )
// }




// //TASK 8 - Hypotenuse2
// var base = +prompt("Enter base")
// var per = +prompt("Enter perpendicular")
// function hypo(b, p ){
//     function sqr(s){
//         return s*s
//     }
//     var base1 = sqr(b)
//     var per1 = sqr(p)
//     var hypo1 = base1 + per1
//     return Math.sqrt(hypo1)
// }
// document.write(hypo(base, per))




// //TASK 9 - Rectangle Area
// var val1 = 4
// var val2 = 5
// function multiply(a , b){
//     var c = a * b
//     return c
// }
// console.log(multiply(val1, val2))
// console.log(multiply(4,5))




// //TASK 10 - palindrome
// var str = prompt("Enter A Palindrome Word")
// function palindrome(str) {
//     var len = str.length;
//     var mid = Math.floor(len/2);
//     for ( var i = 0; i < mid; i++ ) {
//         if (str[i] !== str[len - 1 - i]) {
//             return false + ": it is not a palindrome word";
//         }
//     }
//     return true + ": it is a palindrome word";
// }
// document.write(palindrome(str))




// //TASK 11 - Upper case
// str = prompt("Enter a string")
// function uppercase(str){
//   var array1 = str.split(" ");
//   var newarray1 = [];
//   for(var i = 0; i < array1.length; i++){
//       newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
//   }
//   return newarray1.join(" ");
// }
// console.log(uppercase(str));






// //TASK 12 - Find the longest word
// var str =prompt("Enter a few words")
// function find_longest_word(str)
// {
//   var arrMatch = str.match(/\w[a-z]{0,}/g);
//   var result = arrMatch[0];
//   for(var x = 1 ; x < arrMatch.length ; x++)
//   {
//     if(result.length < arrMatch[x].length)
//     {
//     result = arrMatch[x];
//     } 
//   }
//   return result;
// }
// console.log(find_longest_word(str));



// //TASK 13 - Find Occurence
// var str = prompt("Enter string");
// var word = prompt("Enter word");
// function count(a, l) {
//     return a.split(l).length - 1;
// }
// console.log(count(str, word));





// //TASK 14 - Geometrizer
// var radius = +prompt("Enter radius")
// function calcCircumference(a){
//     var b = 2*Math.PI*radius
//     return "The circumference is " + b
// }
// document.write(calcCircumference(radius))
// FOR AREA
// var radius = +prompt("Enter radius")
// function calcArea(a){
//     var b = Math.PI*radius*radius
//     return "The Area is " + b
// }
// document.write(calcArea(radius))
