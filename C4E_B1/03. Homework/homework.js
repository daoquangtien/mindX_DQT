console.log('Homework')

// Session 1 Homework


// 1.1. In JavaScript, in what cases, you will get the SyntaxError telling you that some 
//    of your variables have invalid names? Can you give 3 different examples of
//    invalid variable names?

// Answer: Hệ thống sẽ thông báo lỗi nếu tên biến đặt theo các trường hợp sau:
//              1. Tên biến chứa số ở đầu
//              2. Tên biến trùng với Keyword của Javascript như: let, prompt, var, break, ...
//              3. Tên biến chưa ký tự đặc biệt (Ngoại trừ dấu gạch dưới '_')
//         Ví dụ:
//              1. let 09Nine = 99 - Có số ở đầu
//              2. let var = " Cong nghe VAR" - Trường hợp này trùng với keyword của Javascript
//              3. let tie-break = "Loat tie break" - Có chứa ký tự đặc biệt là (-)

// 1.2. In JavaScript, how to check a variable data types?

// Answer: Dùng hàm 'typeof' để kiểm tra  kiểu dữ liệu của biến: console.log(typeof tenbien). Ví dụ:

let toiNay = "Toi thu 7"
console.log("1.2 =>", typeof toiNay)
// Bien có dạng string

// 2. HTML, CSS, JavaScript functions in the front-end web

// Answer:   
//           1. Front-end          b. Consist of HTML, CSS, JS
//           2. HTML               a. Content
//           3. CSS                e. Decoration, appearance
//           4. JS                 c. Direct User interaction

// 3. Declare the following variables

// a. A String named message with value ‘Coding is great’, then use console.log to print it out

let message = "Coding is great"
console.log("3a =>", message)

// b. A Number named studentCount with value 0, then use console.log to print it out

let studentCount = 0
console.log("3b =>", studentCount)

// 4. Update the declared variables in Exercise 3

// a. Change message into ‘Coding might not be easy, but still great’, then use console.log to print it out

message = "Coding might not be easy, but still great"
console.log("4a =>", message)

// b. Change studentCount into total of the students in our class right now (16 for example), then use console.log to print it out

studentCount = 21
console.log("4b =>", studentCount)

// c. After completing exercise a, change the message into lowercase, then use console.log to print it out

console.log("4c =>", message.toLowerCase())

// d. After completing exercise b, increase studentCount by 1, then use console.log to print it out
// Sử dụng 1 trong 3 cách

let totalStudent = studentCount + 1
console.log("4d =>", totalStudent)

studentCount += 1
console.log("4d =>", studentCount)

studentCount++
console.log("4d =>", studentCount) // Sĩ số cộng thêm 1 ở câu lệnh trên

// 5. Write a script to show user a nice message

alert("Have a nice day!")

// 6. Write a script to ask user about their name, and then say hi to them, say something nice to them if you want :)

let userName = prompt("What's your name?")
alert("Hello " + userName + "!" + " Welcome to my world!")

// 7. Write a script that ask 2 things from users, their first name and last name, then greet them with their full name

let firstUserName = prompt("Please enter your First Name")
let lastUserName = prompt("Please enter your Last Name")
alert("Welcome, " + firstUserName + " " + lastUserName)

// 8. Write a script that calculates the area of a square

let aSquare = prompt("Enter the side length of the square (cm2)")
alert("The square area is " + aSquare * aSquare + "cm2")
alert(`The square area is ${aSquare * aSquare}cm2`)

// 9. Write a script that calculates the area of a circle

let rCircle = prompt("Enter the radius of the circle (cm2)")
alert("The raidus of the circle is " + rCircle * rCircle * 3.14)
alert(`The radius of the circle is ${(rCircle * rCircle) * 3.14}`)

// 10. Write a script that converts Celsius ( 0 C) into Fahrenheit ( 0 F)

let celsius = prompt("Enter the temperature of celsius")
alert(celsius + " (C) = " + (1.8 * celsius + 32) + " (F)")
alert(`${celsius} (C) = ${1.8 * celsius + 32} (F)`)




// ---------------------- Phan bai tap cuoi bai trong link DATA TYPES Khanh gui----------------------
// let yourName = prompt("What is your name?")
// let yourAge = prompt("How old are you?")
// console.log(yourName + " is " + yourAge + " years old!")

// let fb1Name = prompt("Tell me your 5 names of favourite football players and their age. The first is:")
// let fb1Age = prompt("How's his age?")
// console.log(fb1Name + " is " + fb1Age + " years old!")

// let fb2Name = prompt("Another name?")
// let fb2Age = prompt("And his age?")
// console.log(fb2Name + " is " + fb2Age + " years old!")

// let fb3Name = prompt("Next is?")
// let fb3Age = prompt("His age is?")
// console.log(fb3Name + " is " + fb3Age + " years old!")

// let fb4Name = prompt("The fourth is")
// let fb4Age = prompt("How old is he?")
// console.log(fb4Name + " is " + fb4Age + " years old!")

// let fb5Name = prompt("And the last?")
// let fb5Age = prompt("Tell me his age?")
// console.log(fb5Name + " is " + fb5Age + " years old!")

// ---------------------- ---------------------- ---------------------- ---------------------- 