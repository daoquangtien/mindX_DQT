// Bài 1:

// 1. Tạo 1 mảng có tên là style với các mục là "Jazz" và "Blues"

// 01

let style = ["Jazz", "Blues"]

// 02

style = [...style, "Rock-n-Roll"]

// 03

style.splice(style.length / 2, 1, "Classic")

// 04

console.log(style.shift()) // Xóa phần tử đầu tiên và in ra phần tử đã xóa

let [a] = style // Destructuring: Lấy ra phần tử theo thứ tự index
console.log(a)

console.log(style[0]) // In ra phần tử đầu tiên

// 05

style = ["Rap", "Reggae", ...style]
console.log(style)

// Bài 2: Anh chế số để sử dụng được với hoàn cảnh khác

array = [1, 855, 34, 4555, 7, 9, 6]

// Tìm số lớn nhất và nhỏ nhất
let maxArray = Math.max(...array)
let minArray = Math.min(...array)
console.log(maxArray)
console.log(minArray)

// Sắp xếp từ bé tới lớn 

let smallest
for (let i = 0; i < array.length; i++) { // Xét từng phần tử trong mảng
    for (let j = i + 1; j < array.length; j++) { // Xét từng phần tử kế tiếp của mảng
        if (array[i] > array[j]) { // Nếu số kế tiếp lớn hơn số trước nó thì hoán đổi giá trị cho nhau
            smallest = array[i] // Gán số bé vào 1 biến tạm
            array[i] = array[j] // Gán số bé cho phần tử đứng trước
            array[j] = smallest // Gán giá trị của biến tạm cho phần tử đứng sau, tức là gán số lớn cho phần tử đứng sau
        }
    }
} console.log(array) // Kết thúc vòng lặp ta được mảng với số từ bé tới lớn

/* Diễn giải: Anh thấy vẫn còn ợm ờ về vòng lặp quá, Chung xem anh diễn giải thế này đã đúng chưa nhé! A thấy cứ kì kì :))

    - Lượt 1: Bắt đầu từ index 0: 1 < tất cả các số còn lại -> ko lọt vào if -> next round

    - Lượt 2: Bắt đầu từ index 1 là 855: 855 > 34 nên lọt vào if:

    Vòng for (j): Chạy từ index (0 + 1):

        855 > 34 lọt vào if -> 855 đổi chỗ cho 34
        34 > 7 lọt vào if -> 7 đổi chỗ cho 34
        7 > 6 lọt vào if -> 7 đổi chỗ cho 6 
        Hết 1 vòng -> In ra lượt thứ 2: [1, 6, 855, 4555, 34, 9, 7]

    - Lượt 3: Lúc này bắt đầu từ Index 2 là 855: [1, 6, 7, 4555, 855, 9]
    ...

*/

// Từ lớn tới bé

let biggest
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
        if (array[i] < array[j]) {
            biggest = array[i]
            array[i] = array[j]
            array[j] = biggest
        }
    }
}
console.log(array)

// Bài 3:

let myColor = ["Red", "Green", "White", "Black"]

let char = prompt("Enter any character")

// 3.1: Nối phần tử bằng dấu bất kỳ
console.log(myColor.join(char))

// 3.2: Nối phần tử không có khoảng trống
console.log(myColor.join(char.split(" ").join("")))

// Bài 4:

let arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
console.log(arr1.sort()) // Bước bắt buộc để có kết quả đúng

// Đếm số phần tử là số vừa chữ:

let countWord = 0
let countNumber = 0

for (let i = 0; i < arr1.length; i++) {
    if (Number(arr1[i])) { // Cách này chỉ áp dụng cho số vì ko thể biến chuỗi thành số được
        countNumber++
    } else {
        countWord++
    }
}
console.log(`Phần tử là số có: ${countNumber}`)
console.log(`Phần tử là chữ có: ${countWord}`)


// Tạo ra 1 mảng chứa những ký tự khác nhau

let newArr1 = []
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr1[i + 1]) {
        newArr1.push(arr1[i])
    }
} console.log(newArr1)

// Với cách này bắt buộc phải sort() và phải dùng for thường

// Bài 5:

let library = [
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];



// 5.1. In ra thông tin của từng object


for (let book of library) {
    // for (key in values) {
    //     console.log(`${key}: ${values[key]}`)
    // } console.log("---------------------")
    console.log(`ID: ${book.libraryID}`)
    console.log(`Tác giả: ${book.author}`)
    console.log(`Tựa đề: ${book.title}`)
    console.log("---------------------")
}

// 5.2. In ra thông tin của ob theo ID do người dùng nhập

// Sao anh dùng while(true) và thêm alert() để nếu khách gõ nhầm thì ko được nhỉ

let flag = true

while (flag) {

    let user = Number(prompt("Enter book's ID"))

    for (let i in library) {
        if (user === library[i].libraryID) {

            console.log(`ID: ${library[i].libraryID}`)
            console.log(`Tác giả: ${library[i].author}`)
            console.log(`Tựa đề: ${library[i].title}`)
            console.log("---------------------")

            flag = false
        }
    } // alert("Try correctly ID") -> Gõ đúng ID nó cũng hiện lên
}

// 5.3. Yêu cầu nhập vào tên của những cuốn sách (người dùng có thể nhập keyword) => in ra đầy đủ thông tin của cuốn sách đó



let userAsk = prompt("Enter name of book")

for (let book of library) {
    if (String(book.title).includes(userAsk) || userAsk.toLowerCase() || userAsk.toUpperCase) {
        console.log(`ID: ${book.libraryID}`)
        console.log(`Tác giả: ${book.author}`)
        console.log(`Tựa đề: ${book.title}`)
        console.log("---------------------")
    }
}



// Ôn bài


// let obj = {
//     name: "Tiến",
//     age: 18
// }

// for (key in obj) {
//     console.log(obj[key])
// }

// Destructuring: Phân rã

// let [first, ...rest] = style

// console.log(style)
// // let [...rest, last] = style

// console.log(style)
// let [a, b, c, d] = style

// console.log(style)


// B4

// let dictionary = {

//     debug: "The process of figuring out why your program has a certain error and how to fix it",

//     done: "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",

//     defect: "The formal word for ‘error’",

//     pm: "The short version  of Project Manager, the person in charge of the final result of a project",
//     "ui/ux": "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels"
// }

// while (true) {

//     alert("Hi there, this is dev dictionary")
//     let userAsk = prompt("Enter key word")

//     if (dictionary[userAsk] !== undefined) {
//         alert(`${userAsk}: ${dictionary[userAsk]}`)
//         break
//     } else {
//         alert("We could not find your word " + userAsk)
//         let devAsk = prompt("Leave a explaination")
//         alert("Done")
//         dictionary[devAsk] = devAsk
//         alert(`${devAsk}: ${dictionary[devAsk]}`)
//         break
//     }
// }

// console.log(dictionary)




