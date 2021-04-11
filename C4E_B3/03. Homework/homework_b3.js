/*
Bài 1. Variable swap

    Swapping variable is to exchange the values of two variable so that at the end, one
    variable contains the value of the other

        For example:
        let a = 5;
        let b = 6;

        console.log(a, b); // Result: 5 6

    Perform swapping

        console.log(a, b); // Result: 6 5   

    Google ‘JS swap variables’ to learn about at least 2 ways to perform this tuser,
    write at least 2 examples to demonstrate you have acquired them, if you need hints,
    they are at the last page of this homework
*/

// Ví dụ

// Sử dụng thêm biến phụ
let a = 1, b = 2, c = 0
c = a, a = b, b = c,
    console.log(a, b)

// Cách khác đối với số nguyên
c = a + b // 3 
b = c - b // 1
a = c - b // 1
console.log(a, b)

// Hoán đổi trên một dòng
a = b + (b = a, 0)
console.log(a, b)

// (b = a, 0): Đầu tiên gán giá trị của b cho a, trả về 0
// a= b + 0: Tiếp theo a = b + 0 -> gán giá trị ban đầu của a cho b + 0

b = a + (a = b) - b
console.log(a, b)

// (a = b) -> Gán giá trị của b cho a
// b = a + b - b -> giải phương trình ta được b = a

// Đối với mọi kiểu dữ liệu

/*
Hoán đổi trên 1 dòng lệnh: Sử dụng một mảng để thực hiện hoán đổi:
Tạo 1 mảng với 2 biến là b và b = a, lúc này đã gán giá trị của a cho b
Gán giá trị của phần tử đầu là b cho a
*/
a = [b, b = a][0]
console.log(a, b)

// Sử dụng 2 mảng: Destructuring assignment
// Báo lỗi: homework_b3.js:62 Uncaught ReferenceError: Cannot access 'y' before initialization

// let x = 2
// let y = 4
// [y, x] = [x, y]

/* 
Bài 2:  Split String into Array

    Using type conversion from String to Array

        const s = ‘Hello beauty there’;
        const a = Array(s);
        console.log(a); // Result: [“Hello beauty there”]

    Might NOT be what a developer expects; sometimes what they really want is

    const s = ‘Hello beauty there’;

    Perform splittin

    console.log(a); // Result: [“Hello”, “beauty”, “there”]

    Google ‘JS String splitting to Array’ to learn how to perform this tuser. Write
    an example to demonstrate your learning. If you need hints, again, they are at the last
    page of this homework
*/

// Sử dụng phương thức split: Tách các ký tự trong string bằng cách nhập điểm chung

let myString = "Check it out men!"

console.log(myString.split(" "))
// Trong trường hợp trên là dấu cách

console.log(myString.split())
// Nếu để trống thì sẽ chuyển cả string thành 1 phần tử

console.log(myString.split(""))
// Nếu chỉ nhập dấu "" mà ko có điểm chung thì sẽ tách mỗi ký tự thành 1 phần tử của mảng

console.log(myString.split("fdfsdsgfgfdgd"))
// Nếu nhập lung tung mà ko phải điểm chung thì vẫn chuyển cả string thành 1 phần tử của mảng

/*
Bài 3: 
In JavaScript, the spread operator (three dots): ...can be useful in several tusers. 
Of these tusers is to log (print out) an array without using loops, try it:

        const a = [4, 5, 7, -8];
        console.log(...a);
*/


// 3.1 - Copy 1 mảng. Khi thay đổi phần tử 1 mảng, mảng còn lại ko bị thay đổi theo

let arr1 = ["Mot", "Hai", "Ba", "Bon"]

// let arr0 = arr1 -> cách này khi thay đổi 1 phần tử thì phần tử còn lại bị thay đổi theo
// console.log(arr0)
// console.log(arr0.shift(0))
// console.log(arr1) 

arr2 = [...arr1]

arr2.unshift("Khong") // Thêm phần tử vào mảng vừa copy

console.log(arr1) // ["Mot", "Hai", "Ba", "Bon"]
console.log(arr2) // ["Khong", "Mot", "Hai", "Ba", "Bon"]

// Phần tử ở mảng gốc arr1 không thay đổi

console.log(...arr1) // In ra dạng string

// 3.2 - Nối mảng

console.log(arr1.concat(arr2))

arr1 = [...arr1, ...arr2]
console.log(arr1)

// 3.3 - Thêm phần tử vào mảng: Thay thể cả push và unshift

arr1.push("Nam")
console.log(arr1)

arr1 = ["Khong", ...arr1, "Sau"]
console.log(arr1)



// Bài 5:
// Write a script to ask users enter a sequence of numbers, 
// the Numbers are separated by commas, calculate the sum of the numbers and show it to users


// let questNumber = prompt("Enter a squence of Number, separated by commas(,)")

// userNumber = questNumber.split(",")
// console.log(userNumber)
// let sum = 0
// for (i in userNumber) {
//     sum = sum + Number(userNumber[i])
// } console.log(sum)
// alert(`The sum of them is ${sum}`)



/* 
Bài 6: 
Write a script asking users to enter a sequence of numbers, the numbers are separated by commas
find the smallest number and log it out to users
*/

// let askNumber = prompt("Enter a squence of Number, separated by commas(,)")

// let arrayNumber = askNumber.split(",")
// arrayNumber.sort()
// alert(`The Smallest Number is ${arrayNumber[0]}`)

/*
Bài 7.	
Create an array containing at least 5 numbers, then ask users enter a number, 
perform a search to look for the number in the array, if the number is found, 
tell user that with the index of it in the array, if not, also tell them so

    const arr = [3, 4, 6, -9, 10, -88, 2];

*/

// let arr7 = [1, 2, 5, 6, 9]
// let checkNumber = Number(prompt("Enter any Number"))

// if (arr7.includes(checkNumber)) {
//     alert(`Match! ${checkNumber} was found at index of ${arr7.indexOf(checkNumber)}`)
// } else {
//     alert("Not match")
// }

/*
Bài 8: You are a shepherd who owns a flock of sheep. Each of your sheep of your flock has varied sizes:
*/

// 8.1 - Create an array to represent the sizes of your flock, and log all of your flock size, expected screen output:

let flockSize = [5, 7, 300, 34, 67, 43, 4]

console.log(`Hi, here is my flock of sheep size: ${flockSize}`)

// 8.2 - At the end of each month, you have to choose one and only one sheep to shear and thus you want to choose the biggest one to maximize your profit. Add scripts to search for the biggest sheep in your list:
// Hint: Google ‘JS Array find max’

let maxSize = Math.max(...flockSize)
console.log("Con bự nhất sẽ bị cạo trụi lông là " + maxSize)

// 8.3.	- When your biggest sheer, its size will return to the default size, which is 8.Hint: Google ‘JS Array indexOf

let sheer = flockSize.indexOf(maxSize)
flockSize[sheer] = 8
console.log(flockSize)

console.log("Kích thước cả đàn sau khi con bự nhất bị cạo lông là: " + flockSize)

// 8.4 - In the following month, EVERY sheep in your flock grow, they have their size increased by 50. Log them out

for (let i = 0; i < flockSize.length; i++) {
    flockSize[i] += 50
} console.log("After one month, here is my sheep size: " + flockSize)

// 8.5 - Let’s do this for 4 months (or as long as you want)

// let maxSize2 = Math.max(...flockSize)
// console.log("Con bự nhất sẽ tiếp tục bị cạo trụi lông là " + maxSize2)

// let sheer2 = flockSize.indexOf(maxSize2)
// flockSize[sheer2] = 8
// console.log(flockSize)

// let i = 1
// while (i <= 4) {
//     for (let i = 0; i <= flockSize.length; i++) {
//         flockSize[i] += 50
//         console.log(flockSize)
//     }
//     i++
// }



for (let i = 1; i <= 4; i++) {
    console.log(`MONTH ${i}`);
    console.log("One month has passed,my sheeps have grown,here are their sizes :")

    for (let n = 0; n < flockSize.length; n++) {
        flockSize[n] += 50
    } console.log(flockSize)
    console.log(`Now my biggest sheep has size ${Math.max(...flockSize)},let's shave it`);
    for (n in flockSize) {
        if (flockSize[n] === Math.max(...flockSize)) {
            flockSize[n] = 8;
            break;
        }
    }
    console.log("After shearing,here is my flock:");
    console.log(flockSize)
}

// 8.6 

let totalSheep = 0
for (i in flockSize) {
    totalSheep = totalSheep + flockSize[i]
} console.log(`I would get ${totalSheep} * 2$ = ${totalSheep * 2}$`)


// Bài 10: (Optional) Write a script asking users to enter a sequence of names, separated by commas (,), Create a new array containing the names, each surrounded with <>. If you need hints, find them at the end of this homework

// let askName = prompt("Nhập 1 chuỗi tên, ngăn cách bằng dấu ","")
// let askName2 = askName.split(",")
// let changeNames = []
// for (i in askName2) {
//     changeNames[i] = `<${askName2[i]}>`
// } alert(changeNames)

// Bài 11: chưa làm kịp

// let askNumber = prompt("Nhập 1 chuỗi số, ngăn cách bằng ", "")
// let askNumber1 = askNumber.split(",")

// let odd = []
// for (i in askNumber1) {
//     if (askNumber1[i] % 2 !== 0) {
//         odd.push(askNumber1[i])
//     } 
// } console.log(odd)



// Bài 4.
// Write a script to simulate a clothes shop usering and performing certain tusers from users

// let items = ["", "Jean", "T-Shirt", "Sock"]
// let askAgain = true

// while (askAgain) {
// let user = prompt("Hi there, welcome to shop admin panel, what do u want(C, R, U, D)?")
//     if (user !== "C" && user !== "R" && user !== "U" && user !== "D") {
//         alert("This command is not supported")
//         askAgain = false
//     }
// }




// if (user != "C" && user !== "R" && user !== "U" && user !== "D") {
//     alert("This command is not supported")
//     user = prompt("Hi there, welcome to shop admin panel, what do u want(C, R, U, D)?")
// } else if (user === "R") {
//     alert("The current items are: 1. Jeans - 2. T-shirt - 3. Sock")
// } else if (user === "C") {
//     user = prompt("Enter the name of the new item")
//     alert("Done")
// } else if (user === "R") {
//     alert("The current items are: 1. Jeans - 2. T-shirt - 3. Sock - 4. Tie")
// } else if (user === "U") {
//     user = prompt("Enter the position you want to update")
//     user = prompt("Enter the new name")
//     alert("Done")
// } else if (user === "R") {
//     alert("The current items are: 1. Jeans - 2. T-shirt - 3. Sock - 4. Tie")
// } else if (user === "D") {
//     user = prompt("Enter the position you want to delete")
//     alert("Done")
//     alert("The current items are: 1. Jeans - 2. T-shirt - 3. Tie")
// }

// Cho 3 ngôn ngữ, hỏi muốn xóa ngôn ngữ nào

let languages = ["English", "Vietnamese", "Korean"]

// let asking = prompt(`Ban muốn xóa ngôn ngữ nào?`)

// for (let j = 0; j < languages.length; j++) {
//     if (asking === languages[j]) {
//         languages.splice(j, 1)
//         console.log(languages)
//     }
// }    



for (let j in languages) {
    console.log(j) // trả về index dạng string
    console.log(languages[j])
}

for (let k of languages) {
    console.log(k)
    console.log(languages.indexOf(k)) // trả về index dạng number
}

