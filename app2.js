

// CHAPTER 38-42

// task 1

// var a = +prompt("Enter A Value")
// var b = +prompt("Enter B Value")

// var sqr = Math.pow(a,b);

// document.write("Value of A: " + a + "<br>")
// document.write("Value of B: " + b + "<br>" + "<br>")
// document.write("Raised Value: " + sqr)




// task 2
// var year = +prompt("enter a year")

// function leapyear(){
// return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
// }
// alert(leapyear())





// task 3
// var a = +prompt("Enter Value of First Side")
// var b = +prompt("Enter Value of Second Side")
// var c = +prompt("Enter Value of Third Side")

// var s = (a + b + c) / 2;

// var area = s*(s-a)*(s-b)*(s-c);

// document.write("Value of Triangle's First Side: " + a + "<br>")
// document.write("Value of Triangle's First Side: " + b + "<br>")
// document.write("Value of Triangle's First Side: " + c + "<br>" + "<br>")
// document.write("Area of Triangle is: " + area)




// task 4
// var marks1 = +prompt("Enter numbers of First Subject")
// var marks2 = +prompt("Enter numbers of Second Subject")
// var marks3 = +prompt("Enter numbers of Third Subject")
// var getMarks = marks1 + marks2 + marks3

// function  mainFunction(){
//     var totalMarks = 300;

//     function average(){
//         return getMarks / 3
//     }
//     document.write("Average Marks: " + average() + "<br>")

//     function percentage(){
//         return (getMarks / totalMarks) * 100
//     }
//     document.write(" Marks Percentage: " + percentage())
// }
//  mainFunction()





// task 6
// function disemvowel() {
//     var text = prompt("enter a text")
//     return text.replace(/[aeiou]/gi, '');
    
//   }
//  document.write(disemvowel())
 



// task8
// var distance = +prompt("Enter distance in Km");

// function meter(){
//     document.write("Distance in Meters: " + distance*1000 + "<br>")
// };
// meter();

// function feet(){
//     document.write("Distance in Feet: " + distance*3280.8 + "<br>")
// };
// feet();

// function inches(){
//     document.write("Distance in Inches: " + distance*39370 + "<br>")
// };
// inches();

// function centimeter(){
//     document.write("Distance in Centimeters: " + distance*100000)
// };
// centimeter();



// task9
// var workingHours = +prompt("Enter time you do work above 40 Hours") ;
// var overtime = workingHours - 40 ;
// var amount = overtime * 12.00 ;

// function overTime(){
//     if(workingHours - 40){
//         console.log(overtime * 12 )
//     }
// }

// console.log(amount);



// task 10
// function currencyDenomination() {
//     var cash =  prompt("Enter cash (in hundreds): ");                              
//     var hundred = parseInt(cash / 100);
//     var fifty = parseInt((cash % 100) / 50);
//     var ten = parseInt(((cash % 100) % 50) / 10);
//     document.writeln('You will have ', hundred, ' hundred notes ', fifty, ' fifty notes, ', ten, ' ten notes');

// }
// currencyDenomination()



// CHAPTER 38-42 END








//  CHAPTER 43-48 

// task1
// function link(){
//     alert('Welcome to our website')
// }


// task2
// function purchase(){
//     alert("Thanks for purchasing a phone from us. ")
// }


// task3
// function del(e){
//     e.parentNode.parentNode.remove()
// }


// task4
// function setNewImage(){
//  document.getElementById("img1").src = "car2.jpg"
// }


// task5
// function setOldImage(){
//     document.getElementById("img1").src = "car1.jpg"
// }






// let add = document.getElementById("add");
// let subtract = document.getElementById("Subtract"); 
// let input = document.getElementById("input");

// add.addEventListener('click', () => {
//     input.value = parseInt(input.value) + 1
// });

// subtract.addEventListener('click', () => {
//     input.value = parseInt(input.value) - 1
// });




//  CHAPTER 43-48 End 







//  CHAPTER 49-52  

// function showText(){
//     var first = document.getElementById("first");
//     var last = document.getElementById("last");
//     var email = document.getElementById("email");
//     var phone = document.getElementById("phone");
//     var address = document.getElementById("address");

//     document.write("First Name: " + first.value + "<br>")
//     document.write("Last Name: " + last.value+ "<br>")
//     document.write("Email Address: "  + email.value+ "<br>")
//     document.write("Phone Number: " + phone.value+ "<br>")
//     document.write("Address: " + address.value+ "<br>")
    

// }
 



// function readMore() {
//     var dots = document.getElementById("dots");
//     var moreText = document.getElementById("more");
//     var btnText = document.getElementById("myBtn");
  
//     if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "Read more";
//       moreText.style.display = "none";
//     } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "Read less";
//       moreText.style.display = "inline";
//     }
//   }






// var table = document.getElementById("table")

// function add(){
//     var id = document.getElementById("id")
//     var name = document.getElementById("name")
//     var Subject = document.getElementById("Subject")




//     var tr = document.createElement("tr")

//     var td1 = document.createElement("td");
//     td1.appendChild(document.createTextNode(id.value));
//     tr.appendChild(td1)
    
//     var td2 = document.createElement("td");
//     td2.appendChild(document.createTextNode(name.value));
//     tr.appendChild(td2)

//     var td3 = document.createElement("td");
//     td3.appendChild(document.createTextNode(Subject.value));
//     tr.appendChild(td3)

//     var td4 = document.createElement("td");
   

//     var editBtn = document.createElement("button");
//     editBtn.setAttribute("class" , "btn btn-success  mr-2")
//     editBtn.setAttribute("onclick" , "editBtn(this)")
//     editBtn.appendChild(document.createTextNode("Edit Text"))
    
//     var delBtn = document.createElement("button");
//     delBtn.setAttribute("class" , "btn btn-danger")
//     delBtn.setAttribute("onclick" , "delBtn(this)")
//     delBtn.appendChild(document.createTextNode("Delete Item"))

//     td4.appendChild(editBtn);
//     td4.appendChild(delBtn);

//     tr.appendChild(td4)

//     table.appendChild(tr);

//     id.value = ""
//     name.value = ""
//     Subject.value = ""
// }

// function delBtn(e){
//     e.parentNode.parentNode.remove();
// }

//  CHAPTER 49-52  END




















// CHAPTER 52-57

// var modal = document.getElementById("myModal");
    
// var img = document.getElementById("img");
// var modalImg = document.getElementById("image");

// img.onclick = function () {
//     modal.style.display = "block";
//     modalImg.src = this.src;
// }
   
// var span = document.getElementsByClassName("close")[0];
// span.setAttribute("onclick" , "closeDisplay()")
      
// function closeDisplay(){
//     modal.style.display = "none";
// }






// CHAPTER  58-67

//part1
// var mainContent = document.getElementById("main-content");
// part2
// console.log(mainContent.childNodes)
// part3
// var render = document.getElementsByClassName("render");
// console.log(render)
// part4
// var firstName = document.getElementById("first-name").value = "Johnny ";
//part5
// var lastName = document.getElementById("last-name").value = " Bravo";
// var email = document.getElementById("email").value = "johnny121@gmail.com";










// part1
// var a = document.getElementById("form-content");
// console.log(a.nodeType)
//part2
// var b = document.getElementById("lastName").childNodes;
// console.log(b.nodeType)
//part3
// var target = document.getElementById("lastName");
// target.setAttribute("class" , "blue")
// part4
// var a = document.getElementById("main-content");
// console.log(a.firstChild)
// var a = document.getElementById("main-content");
// console.log(a.lastChild)
// part5
// var a = document.getElementById("lastName");
// console.log(a.previousSibling)
// var a = document.getElementById("lastName");
// console.log(a.nextSibling)
// part6
// var a = document.getElementById("email");
// console.log(a.parentNode)
//  a = document.getElementById("email");
// console.log(a.nodeType)


// CHAPTER  58-67 END
