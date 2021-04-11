// Object là 1 biến bao gồm các key và value

let x = "fastFood" // Trường hợp thêm key là 1 biến đã khai báo vào object
let y = "slowfood"
let healthyFood = {
    meat: ["Thịt gà", "Thịt bò", "Thịt lợn"],
    vegetable: {
        rau: "Rau muống",
        rauCai: "Rau cải",
    },
    fruit: "Cam",
    [x]: "KFC"
}

// Thêm key và value

healthyFood.cake = "Bánh rán"

healthyFood["slowfood"] = "Bún chả"

// Trường hợp key là tring hoặc key trùng với tên biến
healthyFood["water"] = "Lavie"

// Đọc giá trị của key

console.log(healthyFood.fruit)

console.log(healthyFood["meat"])

console.log(healthyFood.meat) // lấy giá trị của mảng trong object

console.log(healthyFood.vegetable.rau) // object trong object gọi là phương thức, đây là lấy key của phương thức

console.log(healthyFood)

// Các thao tác CURD với Object

// Create:

let manUnited = {
    stadium: "Old Trafford",
    coach: "Solsa",
    lcb: "McGuire",
    fd: "Mã Tiến An",
    centerMiddlefield: ["Matic", "Bruno, Mata", "Fred"],
    strickers: {
        lf: "R4",
        st: "Cavani",
        rf: "Green Wood"
    }
}
console.log(manUnited)

// Tạo thêm thuộc tính mới

manUnited.leftback = "Luke Shaw"
console.log(manUnited)

// Copy 2 ob để khi thay đổi 1 ob thì ob còn lại vẫn giữ nguyên giá trị

let mu = { ...manUnited }
console.log(mu)

// Update:

// Update giá trị cho 1 key
manUnited.stricker = "Marcus Rashford"
manUnited["lcb"] = "Eric Baily"
console.log(manUnited)

// Read

// Đọc giá trị của 1 key

console.log(mu.leftback)

console.log(mu["leftback"])

// Cách kiểm tra xem có 1 key trong ob hay ko

console.log(mu["rb"]) // undefined

// Delete

// Delete 1 key

delete manUnited.lcb
console.log(manUnited)

// Delete phần tử của mảng thuộc ob

delete mu.centerMiddlefield.splice(1, 1)
console.log(mu)


// Delete key của ob con thuộc ob chính

delete mu.strickers.rf
console.log(mu)

// Các hàm có sẵn với ob

let realMadrid = {
    stadium: "Santiago Bernabeu",
    striker: "Karim Benzema",
    captain: "Sergio Ramos"
}



// entries: Biến mỗi cặp key và value thành 1 mảng, cách nhau bằng dấu phẩy ,

console.log(Object.entries(realMadrid))

// keys: Biến toàn bộ key của ob thành 1 mảng với mỗi key là 1 phần tử

let keys = Object.keys(realMadrid)
console.log(Object.keys(realMadrid))

// Gộp các mảng vừa tạo bởi entries thành 1 mảng

for (entry of Object.entries(realMadrid)) { // Với mỗi mảng vừa được tạo bởi entries từ ob realMadrid
    keys.push(entry[1]) // Mảng keys sẽ thêm phần tử có index 1 vào cuối mảng, vì các mảng tạo từ entries mặc định có 2 phần tử
} console.log(keys) // Mảng mới bao gồm tất cả phần tử đã được tạo sẵn từ key của ob và các phần tử mới là giá trị của key đó trong ob.
// Nói cách khác, mảng keys mới bao gồm các phần tử của mảng được tạo bởi entrie

let keyMU = Object.keys(mu)
for (entry of Object.entries(mu)) {
    keyMU.push(entry[1])
} console.log(keyMU)


// values: lấy ra giá trị của mỗi key trong ob dưới dạng array

let values = Object.values(realMadrid)
console.log(values)
