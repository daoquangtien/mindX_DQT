
// let today = Number(prompt("Hôm nay là thứ mấy"))

// switch (today) {
//     case 3:
//         console.log("Hôm nay nghỉ")
//         break
//     case 2:
//         console.log("Hôm nay đi làm")
//         break
//     default:
//         console.log("Invalid")
// }

/*

switch () {
    case:
}

Nguyên lý hoạt động: Kiểm tra và tính toán và lấy ra giá trị được truyền vào theo thứ tự từ trên xuống
                     Nếu có break thì chỉ lấy ra giá trị case đó, nếu ko có break sẽ lấy ra giá trị của tất cả case còn lại
                     cho tới khi có break hoặc sau nó ko còn case nào.
                     Nếu không có case nào phù hợp sẽ dùng lệnh "default" ở cuối

Trong trường hợp trên, giá trị của biến là do người dùng nhập vào,
nó đi so sánh với từng case (trường hợp) và case nào phù hợp nhất sẽ thực thi câu lệnh bên trong

- Dùng if - else trong trường hợp cần so sánh tính đúng sai
- Dùng switch - case trong trường hợp biết trước giá trị của biến, nên dùng khi có từ 3 case trở lên


*/

//--------------------------

// continue
// Nếu thỏa mãn điều kiện thì sẽ bỏ qua các câu lệnh bên dưới
console.log("continue")
for (let i = 0; i <= 4; i++) {
    if (i === 2) {
        continue
    }
    console.log("*")
    console.log(i)
    console.log("*")
}
console.log("---------------------------------")

// 1. Array - mảng


// Cách khai báo
// Cách 1:

let arr = ['CR7', 'M10', 'Milan', 'Inter']
console.log(arr)

// Muốn biết có bao nhiêu phần tử của array
console.log("length: " + arr.length)

// In ra dạng table
console.table(arr)

// Cách khai báo 2:

// let array = new Array('MU', "Barca") 
// console.log(array)
// Array là OOP: Hướng đối tượng

// Muốn biết giá trị của 1 phần tử trong mảng
console.log(arr[1])
// [1] là index, tức vị trí của phần tử trong mảng được tính từ 0

// Để biết giá trị của phần tử đứng cuối
// Do tính từ 0 nên vị trí cuối sẽ bằng số phần tử - 1, ở đây ta lấy dữ liệu dạng number
let i = arr.length - 1
console.log(arr[i])

console.log("---------------------------------")

let array = ["CR7", "Hazard", "M10", "R10", "G8", "CP9", "Lw9", "inesta", "xavi", "degea"]

// VD1: Bỏ qua index % 4, sau đó in hoa tất cả tên cầu thủ còn lại

for (i = 0; i < array.length; i++) { // 0, 4, 8 đều chia hết cho 4
    if (i % 4 === 0) {
        continue
    } else {
        console.log(array[i].toUpperCase())
    }
}

console.log("------------------------------")

for (i = 0; i < array.length; i++)
    if (i % 4 !== 0) {
        console.log(array[i].toUpperCase())
    }


console.log("------------------------------")
/*
VD2
In ra màn hình 1 array chứa tên 10 cầu thủ
hỏi người dùng có muốn nhập tìm cầu thủ
nếu có thì hỏi tên cầu thủ
in ra dạng index.value
còn không thì say goodbye

Yêu cầu thêm: Trong trường hợp người dùng nhập sai, yêu cầu nhập lại cho tới khi đúng thì thôi
*/



// alert(array)
// let ask = prompt("Bạn có muốn in tên 1 cầu thủ không? Press Y or N")

// if (ask === "Y") {
//     let ask2 = prompt("Tên cầu thủ ấy là gì?")
//     for (i = 0; i < array.length; i++) {
//         if (ask2 === array[i]) {
//             console.log(array[i])
//         }
//     }
// } else if (ask = "N") {
//     console.log("Bye")
// }

// alert(array)
// let ask = prompt("Do you want to ask about one of these football players?")

// if (ask === "Y") {
//     let name = prompt("What's his name?")
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === name) {
//             console.log(array[i])
//         }
//     }
// } else if (ask === "N") {
//     console.log("Goodbye")
// }

// Nếu người dùng nhập sai, yêu cầu người dùng nhập đến khi nào đúng thì thôi

let array2 = [1, "Hai", 3, "Bốn", null, undefined]
let last = array2.length
array2[last] = "The end"
let last2 = array2.length
array2[last2] = "Ohno"
console.table(array2)

// for in => trả ra index
// for of => trả ra giá trị

for (index in array2) {
    console.log(array2[index])
}

for (values of array2) {
    console.log(array2[6])
}

// tạo ra 1 mảng chứa 10 cầu thủ đều phải viết thường

// let array3 = ["CR7", "Hazard", "M10", "R10", "G8", "CP9", "Lw9", "inesta", "xavi", "degea"]
// let array4 = []
// for (let i = 0; i <= array3.length; i++) {
//     array4[i] = array3[i]
//     console.log(array4[i].toUpperCase())
// }

// Về làm lại

let newArray = ["Cr7", "M10", "Neymar"]
// alert("What name of player do you want to change? " + newArray)
// let askName = prompt("What's that name?")
// let changeName = prompt("Change name by?")
// for (i = 0; i <= newArray.length; i++) {
//     if (askName === newArray[i]) {
//        askName[] = changeName
//         console.log(newArray)
//     }
// }

// CRUD

/*
Create - tạo ra 1 mảng
Read - đọc mảng
Update - thay đổi mảng
delete - xóa phần tử trong mảng
*/

newArray.push("Xavi")
// thêm phần tử vào array
console.log(newArray)

newArray.pop()
// xóa phần tử cuối mảng
console.log(newArray)

newArray.shift()
// xóa phần tử đầu tiên vào mảng
console.log(newArray)

newArray.unshift("Neymar jr")
console.log(newArray)
// thêm phần tử đầu tiên của mảng

let numbers = [1, 4, 5, 7, -1, 0]

numbers.sort()
// sắp xếp
newArray.sort()
// sắp xếp
console.log(newArray)
console.log(numbers)
numbers.reverse()
// đảo ngược
console.log(numbers)


let add = numbers.concat(newArray)
console.log(add)
// nối mảng với nhau

console.log(newArray.includes("M10"))
// kiểm tra phần tử xem có trong mảng hay ko

// toString là đưa mảng về 1 chuỗi còn join là nối các phần tử đó lại

console.log(numbers.join(" + "))

// Copy 1 mảng thứ 1 sang 1 mảng thứ 2

let cauthu = newArray
console.log(cauthu)
console.log(newArray)

cauthu[0] = "Rooney"
console.log(cauthu)
console.log(newArray)

// tìm hiểu tham chiếu và tham trị
// cách copy 1 mảng mà khi thay đổi phần tử 1 mảng thì
//  ko ảnh hướng đến mảng còn lại

// Hỏi tuổi người dùng, yêu cầu nhập số, nếu nhập sai thì hỏi đến khi điền đúng thì thôi

// let n = 0
// do {
//     let yourAge = Number(prompt("How old are you?"))
//     if (yourAge <= 14) {
//         alert("Try again")
//     } else if (yourAge > 14) {
//         n = yourAge
//         console.log(yourAge)
//     }
//     n++
// } while (n <= 14)

// let yourAge
// do {
//     yourAge = Number(prompt("How old are you?"))
// } while (yourAge < 15)
// console.log(yourAge)

// let yourAge = Number(prompt("How old are you?"))
// for (; yourAge <= 14;) {
//     if (yourAge <= 14) {
//         yourAge = Number(prompt("Lại nào"))
//         // } else if (yourAge > 14) {
//         // n = yourAge // nếu n === yourAge thì yourAge trở thành bước nhảy
//         // n = yourAge thì lúc này n bằng giá trị của yourAge
//         // console.log(yourAge)
//     } console.log(yourAge)
// }

// while (yourAge < 15) {
//     yourAge = prompt("Nhập lại nào")
// }
// console.log(yourAge)