// // let yourName = prompt("What's your name?")
// // console.log(yourName)
// // console.log(`Your name is ${yourName}`)

// // let age = 10
// // console.log(`Tien Dao ${age + 2}`)


// // -----------------

// boolean
// let isCheck = true // 1 boolean
// let areCheck = false // 0 boolean

// null và undefine
let checker = 3
// console.log(checker)

// so sánh == -> so sánh bất kỳ kiểu dữ liệu gì
// so sánh === -> cùng kiểu dữ liệu mới so sánh
// kiểu so sánh này dùng rất nhiều
// console.log(checker == 3)
// console.log(checker === "3")

// >= =< ><  ->  Chỉ dùng cho số
console.log(3 >= 4)
console.log(4 < 4)

// // ve thu mot || ve thu hai
// // && và

console.log(checker > 2 || checker < 2)
console.log(checker > 2 && checker < 3)
console.log(checker > 2 || (checker < 1 && checker === 3))

// let something = null //false || false = true
// let wrongNumber

// console.log(!something)
// console.log(!wrongNumber)

// if (true) {
// //     //logic code
// // }
// // else

// // do smt

let userName = "Tien_Dao"
if (userName !== null && userName !== undefined && userName.length > 8) { // có nhập tài khoàn và tk có độ dài
    console.log("Tài khoản hợp lệ, mời làm bước tiếp theo")
} else if (userName !== null && userName !== undefined && userName.length < 8) {
    // có nhập tài khoản nhưng tài khoản có độ dài <8
    console.log("Tài khoản quá ngắn")
} else {
    // không nhập
    console.log("mời nhập lại")
}
console.log("done")


// // 1

// let q1 = prompt("Nhập vào số thứ 1")
// let q2 = prompt("Nhập vào số thứ 2")
// let q3 = prompt("Nhập vào phép tính")
// let q1Number = Number(q1);
// let q2Number = Number(q2)
// if (q3 === '+') {console.log(q1Number + q2Number)}

// else if (q3 === "-") {console.log(q1Number - q2Number)}

// else if (q3 === "*") {console.log(q1Number * q2Number)}

// else if (q3 === "/") {console.log(q1Number / q2Number)}

// else if (q3 === "%") {console.log(q1Number % q2Number)}

let no1Str = Number(prompt("Number 1?"))
let no2Str = Number(prompt("Number 2?"))
let q3 = prompt("Nhập vào phép tính")

if (q3 === '+') {console.log(q1Number + q2Number)}

else if (q3 === "-") {console.log(q1Number - q2Number)}

else if (q3 === "*") {console.log(q1Number * q2Number)}

else if (q3 === "/") {console.log(q1Number / q2Number)}

else if (q3 === "%") {console.log(q1Number % q2Number)}

// let q1 = prompt("Nhap so hoac chu muon chuyen sang Tieng Anh")

// if (q1 === "khong" || Number(q1) === 0) {
//     console.log("Ket qua la: ", "Zero")
// }

// else if (q1 === "mot" || Number(q1) === 1) {
//     console.log("Ket qua la: ", "One")
// }

// Tương tự với các số khác

// Scope
// let check = true
// let check2 = null

// if (check) {
//     let number = 10
//     if (!check2) {
//         console.log(number)
//     }
//     console.log(number)
// }
// console.log(number)

// ============================
// // vòng lặp Loop

// // for (bắt đầu ; dieu kien ket thuc; buoc nhay)}+{
// // console.log(số cần in ra)

// for (let i = 1; i < 10; i++) {
//     console.log(i)
// }

// console.log("-------------------")

// for (let i = 2; i <= 20; i += 2) {
//     console.log(i)
// }

// Chỉ nên dùng vòng lặp khi bắt đầu từ 4 vòng lặp trở lên, hoặc khi không biết có bao nhiêu vòng lặp

// Cho người dùng nhập 1 số n, in ra từ 1 đến n

// let q1 = Number(prompt("Enter any number"))
// 
// for (q1 =1; q1 <= 20;q1++    ) {
// console.log(q1)
// }

//while (dieu kien ket thuc) {
//logic code
// Bước nhảy
//}

// let n = 1
// while (n < 10) {
//     n++
//     console.log(n)


// let b = 2
// while (b) {

// }

// let b = prompt("Enter number") {



// break: Là cú pháp để ngắt vòng lặp

// for (let b = 2; b <= 100; b += 2) {
//     if (b % 2 === 0)
//         console.log(b)
//         b += 2
//         break
// }

// let i = 0
//  while (i < 101) {
//     if (i % 2 === 0) {
//        console.log(i)
//     }
// }

// tìm hiểu về vòng lặp do
// so sánh sự khác nhau giữa do và do while