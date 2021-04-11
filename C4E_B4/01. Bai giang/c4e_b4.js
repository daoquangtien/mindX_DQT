// Tham chiếu và tham trị

let aWeek = ["Monday", "Tuesday", "Wednesday", "Thursday"]


// let nextWeek = aWeek

// fWeek = [...aWeek]
// fWeek.push("Friday")
// console.log(fWeek)
// console.log(aWeek)
// Object

let myInfo = {
    name: "Quang Tiến",
    age: 15,
    address: "Hà Nội",
    homeland: ["Bình Nguyên", "Kiến Xương", "Thái Bình"],
    workplace: "Seven work"
}

console.log(myInfo)

// CRUD

// Read: Đọc dữ liệu trong object
console.log(myInfo.homeland)
console.log(!!myInfo.homeland)

// let ask = prompt("Nhập vào thông tin muốn in")
// console.log(myInfo[ask])

// Kiểm tra 1 trường xem có hay ko
// if (!myInfo[ask]) {
//     console.log("Not match")
// } else {
//     console.log("Có")
// }

// Create

myInfo.laptop = "Asus"
console.log(myInfo)

let cr7 = {
    name: "Cristiano Ronaldo",
    dayOfBirth: "05 - 02 - 1985",
    Homeland: "Poturgal",
}

// let ask = prompt("Có muốn nhập thêm thông tin ông này ko? Điền Y hoặc N")
// if (ask === "Y") {
//     askKey = prompt("Bạn muốn nhập thêm thông tin gì?")
//     askValue = prompt("Thông tin đó là?")
//     cr7[askKey] = askValue
//     console.log(cr7)
// } else {
//     console.log("Bye!")
// }
console.log(cr7)

// Update

console.log(cr7.name = "CR7")

let newInfo = myInfo
newInfo.name = "Tiến đẹp zai"
console.log(newInfo)
console.log(myInfo)

newInfo.name = "xấu zai"

// Copy 2 ob với nhau
newInfo = { ...myInfo }

console.log(newInfo)
console.log(myInfo)

// Delete

delete myInfo.laptop
console.log(myInfo)

// Thao tác một số hàm dùng sẵn với object

// copy 1 ob
let cris = { ...cr7 }

// Biến mỗi cặp key và value thành 1 mảng, ngăn cách với nhau bởi dấu phẩy
console.log(Object.entries(cr7))

// Lấy ra toàn bộ key của ob truyền vào và trả ra dưới dạng 1 mảng

let keys = Object.keys(cr7)

for (entry of Object.entries(cr7)) {
    keys.push(entry[0])
} console.log(keys)

let values = Object.values(myInfo)
console.log(values)

// destructuring