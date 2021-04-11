// Init (after 2)
// Initialize an array named movies containing the titles of some of your favorite movies
// => Tạo 1 mảng tên phim bất kì

let list = ["Inception", "Jack Reacher", "Sing", "One Piece", "One-Pound Man", "Saw III", "Conjuring"]

// Create (after 4)
// Add new item named newMovie into the end of the movies array you initialized, newMovie entered by users
// => Thêm 1 tên phim vào cuối mảng với tên đó là do ng dùng nhập

let addEnd = prompt("Enter the name of film that you want to add at the end of list")
list.push(addEnd)
console.log(list)

// Read (after 5)
// Read the item at position i in the movies array, i entered by users
// => Đọc in ra vị trí i bằng 2 cách, i người dùng nhập
// => for in và for thường
    
let position = prompt("What position do you want to read?")

// For in

for (i in list) {
    if (position - 1 === Number(i)) {
        console.log(list[i])
    }
}

// // For thường

for (let i = 0; i < list.length; i++) {
    if (position - 1 === Number(i)) {
        console.log(list[i])
    }
}


// Update (after 6)
// Update the first item of the movies array into movieTitle, movieTitle entered by users
// Update a item at position i of the movies into movieTitle, i and movieTitle entered by users
// => Update phần tử đầu tiên bằng giá trị ng dùng nhập
// => update phần tử ở vị trí thứ i thành movieTitle  với i và movieTitle do ng dùng nhập

// Update the first item of the movies array into movieTitle, movieTitle entered by users

let addFirst = prompt("What film do you to want to update at 1st")
list[0] = addFirst
console.log(list)

// Update a item at position i of the movies into movieTitle, i and movieTitle entered by users

let changeFilm = prompt("What films do you want to add?")
let position2 = prompt("What position do you want to change")

for (i in list) {
    if (position2 - 1 === Number(i)) {
        list[i] = changeFilm
        console.log(list)
    }
}

// Delete (after 7)
// Delete 1 item at position i from movies array movies, i entered by users
// Delete n item at position i from movies array, i and n entered by users
// => Dùng splice để xóa
// => Xóa n phần tử từ vị trí i với n và i cho phép ng dùng nhập

let del1 = Number(prompt("What position of film do you want to delete"))

list.splice(del1 - 1, 1)
console.log(list)

let delI = Number(prompt("What position do you want to delete film from?"))
let delN = Number(prompt("From " + delI + " to?"))

list.splice(delI - 1, delN - 1)
console.log(list)

// Read All (after 10)
// Read or log all of items in movies array into console
// => In ra tất cả phần tử
// Read or log only first half items in movies array into console
// In ra nửa đầu

for (i of list) {
    console.log(i)
}

for (let i = 0; i < list.length; i++) {
    if (i < list.length / 2) {
        console.log(list[i])
    }
}

// Read or log all of items in movies array into console with the item position, for example:
// ['Batman', 'Up', 'Attack on titans', 'My boss my hero']
// when printed out, results as follows:
// 1. Batman
// 2. Up
// 3. Attack on titans
// 4. My boss my hero
// In ra có dạng `index. value`

for (i in list) {
    console.log(`${Number(i) + 1}. ${list[i]}`)
}

// Update All: (after 11)
// Change all items of movies array into lowercase
// => Viết thường hết

for(i in list) {
    console.log(list[i].toLowerCase())
}

// BT thêm:

// Người dùng nhập n số nguyên ngẫu nhiên từ bàn phím. 

let numbers = prompt("Enter a squence of numbers")
numbers = [...numbers]
console.log(numbers)

// Sắp xếp dãy vừa nhập theo chiều tăng dần

console.log(numbers.sort())

// Lọc dãy trên thành 2 dãy: dãy chẵn và dãy lẻ

console.log("Even number row")
for (i of numbers) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

console.log("Odd number row")
for (i of numbers) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}

console.log("Loai bo so trung nhau")

// Loại bỏ các số trùng nhau ở 2 dãy.

let otherNumbers = []

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== numbers[i + 1]) {
        otherNumbers = numbers[i]
        console.log(otherNumbers)
    } 
}

// // Làm lại bài trên với phân tích kỹ hơn: Người dùng nhập n số nguyên ngẫu nhiên từ bàn phím. 

// let numbers = prompt("Enter a squence of numbers")
// numbers = [...numbers]
// console.log(numbers)

// // Sắp xếp dãy vừa nhập theo chiều tăng dần

// console.log(numbers.sort())

// // Lọc dãy trên thành 2 dãy: dãy chẵn và dãy lẻ

// console.log("Even number row")
// for (i of numbers) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// } 

// console.log("Odd number row")
// for (i of numbers) {
//     if (i % 2 !== 0) {
//         console.log(i)
//     }
// }

// console.log("Loai bo so trung nhau")

// // Loại bỏ các số trùng nhau ở 2 dãy.

// let otherNumbers = []

// for (let i = 0; i < numbers.length; i++) { 
//     if (numbers[i] !== numbers[i + 1]) {
//         // otherNumbers = numbers[i] -> In ra từng phần tử ko trùng nhau
//         otherNumbers.push(Number(numbers[i])) // Tạo 1 mảng gồm các phần tử ko trùng nhau
//         // console.log(otherNumbers)
//     }
// } console.log(otherNumbers)

// // Cách làm này bắt buộc phải sort() để có được 1 mảng có các phần tử ko trùng nhau.
