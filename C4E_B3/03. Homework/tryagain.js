// Bài 5

// let ask = prompt("Nhập 1 chuỗi các số ngăn cách bởi dấu phẩy")
// ask = ask.split(",")
// console.log(ask)
// let summ = 0
// for (let i of ask) {
//     summ = summ + Number(i)

// } console.log(summ)

// Bài 6: Write a script asking users to enter a sequence of numbers, the numbers are separated by commas, find the smallest number and log it out to users

// let ask = prompt("Nhập 1 chuỗi các số ngăn cách bởi dấu phẩy")
//     ask = ask.split(",")
//     console.log(ask.sort()[0])

// let ask = prompt("Nhập 1 chuỗi các số ngăn với nhau bởi dấu phẩy")
//     ask = ask.split(",")
//     let ask1 = Math.min(...ask)
//     console.log(ask1)

// Bài 7: Create an array containing at least 5 numbers, 
// then ask users enter a number, 
// perform a search to look for the number in the array, 
// if the number is found, tell user that with the index of it in the array, 
// if not, also tell them so

let numbers = [1, 2, 3, 4, 5]
let ask = Number(prompt("Enter a number"))
console.log(numbers[4])
console.log(numbers.indexOf(3))

if (numbers.includes(ask)) {
    console.log(`${ask} was found at index ${numbers.indexOf(ask)}`)
} else {
    console.log("Not found")
}

// Bài 8:

// 8.1 - Tạo 1 mảng là kích thước đàn cừu

let sheepSize = [3, 4, 90, 300, 33, 11]

// 8.2 - Chọn con to nhất để cạo lông

let max = Math.max(...sheepSize)
console.log(max)

// 8.3 - Sau khi tỉa lông thì sẽ trả về kích thước ban đầu

console.log("Sau khi cạo lông con to nhất thì đàn cừu giờ là:")

let indexMax = sheepSize.indexOf(max)
sheepSize[indexMax] = 8

console.log(sheepSize)

// 8.4 - Sau mỗi tháng đàn cừu tăng thêm 50 kích thước
console.log("Sau mỗi tháng đàn cừu tăng thêm 50 kích thước")
for (let i = 0; i < sheepSize.length; i++) {
    sheepSize[i] += 50
} console.log(sheepSize)

// 8.5 - Lặp lại 4 bước trên trong 4 tháng
console.log("Các tháng tiếp theo")
let m = 1
while (m < 5) {
    console.log(`MONTH ${m}`)

    for (let i = 0; i < sheepSize.length; i++) {
        sheepSize[i] += 50
    }
    console.log("Đàn cừu của tôi hiện giờ là")
    console.log(sheepSize)

    console.log("Chọn con to nhất để cạo lông")
    let biggest = Math.max(...sheepSize)
    console.log(biggest)

    for (let j in sheepSize) {
        if (sheepSize[j] === Math.max(...sheepSize)) {
            console.log("Sau khi cạo lông con to nhất, kích thước của đàn cừu hiện giờ là:")
            sheepSize[j] = 8
            break
        }
    } console.log(sheepSize)
    m++
}

// 8.6 - Tính tổng kích thước đàn cừu và nhân với 2$

let sum = 0
for (let n of sheepSize) {
    sum = sum + n
} console.log(`I would get ${sum} * 2$ = ${sum * 2}$`)

// Bài 10

// let qName = prompt("Nhập tên cách nhau bằng dấu phẩy")
// let mangName = qName.split(",")
// let arrName = []

// for (let i in mangName) {
//     arrName[i] = `<${mangName[i]}>`
// } console.log(arrName)

// Bài 11:


// let ask = prompt("Nhập sôs cách nhau bằng dấu phẩy")
// let ask1 = ask.split(","); console.log(ask1)
// let changeNumbers = []

// for (i in ask1) {
//     if (ask1[i] % 2 !== 0) {
//         changeNumbers.push(ask1[i])
//     }
// } console.log(changeNumbers)



