// 1. Array - Mảng

let array = ["R10", "CR7", "Hazard", "M10", "Xavi", "Bruno", "Kaka", "Ibra", "De Gea", "Neymar"]

// In ra lần lượt tên cầu thủ theo dạng cột

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

console.log("---------------------------------------------")

// In ra lần lượt tên cầu thủ theo dạng cột
// Bỏ qua cầu thủ nào có index % 4 === 0
// In tên các cầu thủ còn lại dưới dạng viết hoa toàn bộ

for (let i = 0; i < array.length; i++) {
    if (i % 4 === 0) {
        continue
    } console.log(array[i].toUpperCase())
}

console.log("---------------------------------------------")

// Hoặc

for (let i = 0; i < array.length; i++) {
    if (i % 4 !== 0) {
        console.log(array[i].toUpperCase())
    }
}

console.log("-------------------------------------------")
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

// Chưa làm được yêu cầu thêm: Trong trường hợp người dùng nhập sai, yêu cầu nhập lại cho tới khi đúng thì thôi
// Mai thử lại
// let ask = prompt(`Bạn muốn tìm info cầu thủ nào không? - Press "Y" or "N"`)
// if (ask === "Y") {
//     let name = prompt("Tên cầu thủ ấy là gì?")
//     for (let i = 0; i < array.length; i++) {
//         if (name === array[i]) {
//             console.log(array[i])
//         }
//     }
// } else if (ask === "N") {
//     alert("Goodbye")
// }


// VD3: Tạo ra 1 mảng chứa 10 cầu thủ đều phải viết thường, 1 mảng rỗng
//      Ghép toàn bộ values ở mảng 1 sang mảng 2

console.log(array)
let array2 = []

for (let i = 0; i < array.length; i++) {
    array2[i] = array[i]
    console.log(array2[i].toLowerCase())
}

console.log("-------------------------------------------")

// Input thêm phần tử vào mảng

// Thêm phần tử vào cuối mảng:

let last = array.length
array[last] = "Haaland"

console.log(array)

// Thêm phần tử vào đầu mảng

array[0] = "Owen"
console.log(array)

console.log("-------------------------------------------")

// for in và for of

// for in trả về index
// for (index in array) {
//     console.log(array[index])
// }

// // for of trả về giá trị

// for (values of array) {
//     console.log(values)
// }

// VD4: Tạo 1 mảng với phần tử là 4 cầu thủ, show cho user
// Hỏi user xem muốn đổi tên ai ko
// Nếu có thì điền Y, ko thì N
// Tiếp tục hỏi tên cầu thủ nào muốn đổi tên
// Hỏi muốn đổi tên thành gì
// Sau đó in ra mảng với phần tử đã đổi

// let fbArray = ["Rooney", "Kaka", "Drogba", "MP3"]

// let ask = prompt(`Bạn muốn đổi tên ai ko? ${fbArray} - Press Y or N`)

// if (ask === "Y") {
//     ask = prompt("Điền tên cầu thủ muốn đổi")
//     let changeName = prompt("Bạn muốn đổi " + ask + " thành gì?")
//     for (let i = 0; i < fbArray.length; i++) {
//         if (ask === fbArray[i]) {
//             fbArray[i] = changeName
//             console.log(fbArray)
//         } 
//     }
// } else if (ask === "N") {
//     alert("Bye!")
// }

/*
 - Nếu console.log ở trong vòng if thì sẽ ra kết quả đúng
 - Nếu console.log ở ngoài vòng if thì ra kết quả là 4 mảng ( vì length < 4)
 - Trường hợp trên đổi tên phần tử Kaka ở index 1, thì ở index 2 và 3
    vẫn in ra kết quả đã đổi tên dù console.log ở ngoài vòng for
    -> Tức là sau khi đổi tên phần tử thì mảng đã chuyển hẳn thành
    mảng chứa phần tử mới.
 */

// CDUR

// Create: Tạo 1 mảng
// Read: Đọc mảng
// Update: Cập nhật mảng
// Delete: Xóa phần tử trong mảng

let arr = ["Atonie", 7, "Dejong", 21, "Messi", 10, "Bruno", 18]

arr.push("R4")
console.log(arr)
// Thêm phần tử vào cuối mảng

arr.pop()
console.log(arr)
console.log(arr.pop())
// Xóa phần tử cuối mảng và trả về phần tử đã xóa

arr.shift()
console.log(arr.shift())
// Xóa phần tử đầu mảng và trả về phần tử đã xóa

arr.unshift("Mã Tiến An")
console.log(arr)
// Thêm phần tử đầu mảng

arr.sort()
console.log(arr)
// Sắp xếp số từ bé tới lớn, xét lần lượt từ số đầu tiên
// Sắp xếp chữ từ a - z, xét lần lượt từ chữ cái đầu tiên

let arr2 = [-300, -394, -2, -1, 0, 84, 345, 4343, 456]
arr2.sort()
console.log(arr2)

arr.reverse()
arr2.reverse()
console.log(arr2)
console.log(arr)
// Sắp xếp từ lớn tới bé, xét lần lượt từ số đầu tiên
// Sắp xếp từ z - a, xét lần lượt từ chữ đầu tiên

let noiArray = arr.concat(arr2)
console.log(noiArray)
// Nối 2 arry với nhau


console.log(arr.includes("Mã Tiến An"))
// Kiểm tra xem phần tử có trong mảng hay ko

console.log(arr.join(" - "))
// toString là biến mảng thành chuỗi
// join cũng biến mảng thành chuỗi nhưng có thể nối các phần tử lại với nhau
// bằng việc thêm ký tự

// Copy 2 mảng với nhau: Khi 1 mảng thay đổi thì mảng còn lại cũng thay đổi theo

let copy = arr
console.log(copy)

copy.push("CR7")
console.log(arr)
console.log(copy)







