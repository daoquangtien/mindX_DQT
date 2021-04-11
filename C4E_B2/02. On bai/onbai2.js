console.log("Ôn bài 2")

// Buổi 2: 
// I. Các kiểu dữ liệu: Boolean, undefined, null
// II. Toán tử so sánh: == === != !== >= <= < >
// III. Toán tử logic: && || !
// IV. Scope: Phạm vi
// V. Câu điều kiện if, if - else, if - else if - else 
// IV. Loop: Vòng lặp: for, while, do/while

// -----------------------------------------------------------------

// I. Các dạng dữ liệu khác: Boolean, undefined, null

// 1. Boolean
// Là lưu giá trị "true" hay "false", nói 1 cách logic thì là kiểu "on" hay "off"

let isToday = true
let isYesterday = false

console.log(isToday); console.log(typeof isToday)
console.log(isYesterday)

// 2. Undefined: Không xác định
// Khai báo 1 biến mà ko gắn giá trị thì là undefined

let lavie
console.log(lavie)
console.log(typeof lavie)

// lavie ở đây là undefined: Không xác định. Gán giá trị = "chai nước lọc" thì lavie giờ là chai nước lọc

// 3. Null
// Được hiểu là giá trị rỗng hoặc giá trị không tồn tại, có thể dùng để gán cho 1 biến như là một đại diện ko có giá trị
// Có thể coi là một kiểu đối tượng.
// Một biến/một thuộc tính của đối tượng chỉ có thể có giá trị bằng null khi nó được gán = null
// Tuy nhiên kiểu dữ liệu lại là oject, có thể coi đây là 1 lỗi của javascript

let dasani = null
console.log(dasani)
console.log(typeof dasani)

// So sánh null và undefined
// Undefined có thể là 1 biến chưa gán giá trị
// Null có thể là 1 biến không có giá trị
// VD về chai nước Lavie: let lavie -> undefined: Chưa xác định được lavie là gì
//                        let lavie -> null: Chai lavie này hết nước, chỉ còn vỏ, ko có giá trị gì cho tới khi rót nước

// II. Toán tử so sánh: == === != !== >= <= < >
// Toán tử so sánh luôn trả về kết quả dạng Boolean

// == So sánh 2 giá trị không phân biệt kiểu dữ liệu, trả về true nếu toán hạng bằng nhau

let x = 1
let y = "1"
let a = "Mưa"
let b = "Mưa"
console.log(x == 1)
console.log(x == y)
console.log(a == b)

// === Trả về true nếu các toán hạng bằng nhau và cùng kiểu dữ liệu, false nếu khác kiểu dữ liệu

let z = 1
console.log(x === y) // false
console.log(a === b) // true
console.log(x === z) // true

// != Cách so sánh tương tự == nhưng trả về kết quả ngược lại

console.log(x != y) // false: x, y không phân biệt kiểu dữ liệu và cùng có giá trị = 1
console.log(x != z) // false: x = z
let c = 3
console.log(x != c) // true: x < c

// !== Trả về: true nếu các toán hạng không bằng nhau hoặc khác kiểu dữ liệu 
//             false nếu cùng kiểu dữ liệu hoặc toán hạng bằng nhau

console.log(x !== y) // true: bằng nhau nhưng khác kiểu dữ liệu
console.log(x !== z) // false: x = z, cùng kiểu dữ liệu
console.log(a !== b) // false: a = b, cùng kiểu dữ liệu
console.log(x !== c) // true: cùng kiểu dữ liệu nhưng x < c

// >= <= < >: Chỉ dùng với số

console.log(x >= y) // true: x = y = 1
console.log(x <= c) // true: x < c
console.log(x > c) // false: x < c
console.log(x < c) // true: x < c

// III. Toán tử logic: && || !
// Toán tử logic luôn trả về kết quả dạng Boolean
// VD với 2 biến

let e = 9
let f = 10

// && - AND - VÀ
// Trả về true khi cả 2 vế đều true (đều đúng)

console.log(e > 1 && f > 3) // true
console.log(e < 0 && f > 2) // false

// || - OR - HOẶC
// Trả về true khi 1 trong 2 vế true

console.log(e > 10 || f < 11) // true: f < 11
console.log(e > 13 || f < 8) // fasle

// ! - NOT - ĐẢO NGƯỢC
// !( && ): Trả về true khi cả 2 vế hoặc 1 trong 2 vế false, false khi cả 2 vế true

console.log(!(e > 1 && f > 3)) // false: Cả 2 vế đều true
console.log(!(e < 4 && f > 4)) // true: 1 trong 2 vế false
console.log(!(e < 2 && f > 11)) // true: Cả 2 vế đều false

// !( || ): Trả về true khi cả 2 vế đều false, false khi 1 hoặc cả 2 vế đều true

console.log(!(e > 3 || f > 2)) // false: Cả 2 vế đều true
console.log(!(e < 8 || f > 15)) // true: Cả 2 vế đều false
console.log(!(e > 5 || f > 11)) // false: 1 trong 2 vế true

// Có thể sử dụng nhiều phép toán tử logic cùng một lúc
// Chỉ nên sử dụng với 3 phép toán tử logic đổ lại

console.log((e > 2 || f >= 10) && f < 11) // true
console.log((e === 9 || e !== 11) && e > 14) // false
console.log(!(e <= 10 || f === 1) && e > 8) // false
console.log((e > 4 && e < 10), (f > 3 || f < 0)) // true

// IV. Scope: Phạm vi
// Là phạm vi hoạt động của biến, bao quanh bởi dấu {}

{
    let number1 = 1
    console.log(number1)
}
// console.log(number1) : Uncaught ReferenceError: number1 is not defined

/* 
V. Câu điều kiện if, if - else, if - else if - else: Câu lệnh rẽ nhánh

() luôn là giá trị Boolean

if () {} -> Nếu điều kiện trong () là true thì phép toán trong {} sẽ thực hiện

if () {} else {} -> Nếu điều kiện trong () là true thì phép toán trong {} sẽ thực hiện.
Nếu false, phép toán trong {} sẽ được thực hiện

if () {

} else if (Dk1) {

} else if (Dk2) {

} else {

}

Nếu điều kiện trong () là true thì phép toán trong {} sẽ thực hiện.
Nếu false, phép toán trong else if {Dk1} sẽ được thực hiện
Nếu false tiếp, phép toán trong else if {Dk2} sẽ được thực hiện
Nếu false tiếp, phép toán trong else {} sẽ được thực hiện
*/

// VD: Thực hiện câu lệnh yêu cầu người dùng nhập 1 phép toán + - và trả kết quả

// let q3 = prompt("Enter your calculation")
// let q1 = Number(prompt("Enter number 1"))
// let q2 = Number(prompt("Enter number 2"))

// if (q3 === "+") {
//     alert("Result is: " + (q1 + q2))
//     console.log(q1 + q2)
// }

// VD khác:

// let q1 = Number(prompt("Number 1"))
// let q2 = Number(prompt("Number 2"))
// let q3 = prompt("Enter the calculation")
// if (q3 === "+") { // phải là === vì = là toán tử gán, nếu q3 = "+" thì máy tính sẽ hiểu là biến q3 có giá trị "+"
//     console.log("Kết quả là: ", q1 + q2)
// } else if (q3 === "-") { 
//     console.log("Kết quả là: ", q1 - q2)
// } else if (q3 === "*") {
//     console.log("Kết quả là: ", q1 * q2)
// } else if (q3 === "/") {
//     console.log("Kết quả là: ", q1 / q3)
// } else {
//     console.log("Calculation is incorrected, please try again!")
// }

// VD2: Yêu cầu người dùng nhập tên tài khoản >= 6, sau đó chào họ

// let tk = prompt("Enter your account:")

// if ((tk !== null && tk !== undefined) && tk.length >= 6 && tk.length <= 15) {
//     alert("Hi " + tk)
// } else if ((tk !== null && tk !== undefined) && tk.length < 6) {
//     alert("Waring! Your account must be over 6 characters, please retype your name")
// } else {
//     alert("Your name is too long, please start over again")
// }

// VD3: Hỏi điểm của học sinh và đánh giá học tập

// let q4 = prompt("Bạn đạt điểm mấy bài thi vừa rồi?")

// if (q4 >= 8 && q4 <= 10) {
//     alert("Học tốt đấy!")
// } else if (q4 <=7 && q4 >=5) {
//     alert("Cần cố gắng")
// } else {
//     alert("Ngu thế?")
// }

// VD4: 
let no1 = true

if (4) {
    console.log("Số 1") // Nếu không phải số 0, hoặc string "0" và các ký tự đặc biệt thì đề trả kết quả là true
} else {
    console.log("Không biết")
}

// VD5:

// let thoiTiet = prompt("How the weather to day?")

// if (thoiTiet == "Mưa") {
//     console.log("Ở nhà ngắm mưa")
// } else if (thoiTiet == "Nắng") {
//     console.log("Đi chơi")
// } else {
//     console.log("Chưa biết")
// }

// VD6:
let userName = "Tien_Dao_Quang_Đào Quang Tiến"
if (userName !== null && userName !== undefined && userName.length > 8 && userName.length <= 25) { // có nhập tài khoàn và tk có độ dài > 8
    console.log("Tài khoản hợp lệ, mời làm bước tiếp theo")
} else if (userName !== null && userName !== undefined && userName.length < 8) {
    // có nhập tài khoản nhưng tài khoản có độ dài < 8
    console.log("Tài khoản quá ngắn")
} else if (userName !== null && userName !== undefined && userName.length >= 25) {
    console.log("Tài khoản quá dài")
} else {
    // không nhập
    console.log("mời nhập lại")
}

// VD7:

let diem = 5

if (diem >= 8 && diem <= 10) {
    console.log("Giỏi")
} else if (diem >= 6.5 && diem <= 7.9) {
    console.log("Khá")
} else if (diem <= 6.4 && diem >= 0) {
    console.log("Trung bình")
}

// VD8: if - else lồng nhau: Không tối ưu

if (diem >= 8.5 && diem <= 10) {
    console.log("Giỏi")
} else {
    if (diem >= 5 && diem <= 8.4) {
        console.log("Khá")
    } else {
        if (diem <= 5 && diem >= 0) {
            console.log("Kém")
        }
    }
}

// VD9: if - else rút gọn

diem == 5 ? console.log("Điểm trung bình") : console.log("Điểm khác 5")

/*
IV. Loop: Vòng lặp: for, while
Vòng lặp là một chuỗi sự kiện, hành động được lặp đi lặp lại theo một nguyên tắc nhất định. 
Ví dụ như vòng lặp của con người: sinh - lão - bệnh - tử.

Cấu trúc for: 

for (Biến bắt đầu; Điều kiện thực thi; Bước nhảy) {
           Thực hiện vòng lặp
}

Trong đó:

Biến bắt đầu: là giá trị khởi tạo ban đầu của vòng lặp.
Điều kiện thực thi: là điều kiện mà vòng lặp được phép chạy, (chú ý: Nếu bạn muốn lặp vô tận thì có thể bỏ trống).
Bước nhảy: là khoảng đệm nhảy của mỗi vòng lặp.
*/

for (let no2 = 3; no2 <= 30; no2 += 3) {
    console.log("Số chia hết cho 3: " + no2)
}

// VD: Yêu cầu người dùng nhập số n, in ra từ 1 đến n

// let n = Number(prompt("Enter any ending number"))
// for (i = 1; i <= n; i++) {
//     console.log(i)
// }

/* vòng lặp while

Điều kiện bắt đầu
while(điều kiện kết thúc) {
    logic code
    bước nhảy
}
*/

// let x1 = 4
// while (x1 < 37) {
//     console.log(x1)
//     x1 += 8
// }

// while(true) = lặp vô hạn vì biểu thức luôn đúng 

// let x2 = 3
// while (x2 < 10) {
//     console.log(x2)
//     x2 += 2
// }

// break và continue
// break dùng để ngắt vòng lặp
// continue bỏ câu lệnh sau nó và tiếp tục vòng lặp

console.log("----------------- ")

// for (let k = 1; k <= 20; k++) {
//     console.log(k)
//     if (k >= 8) {
//         break
//     }
// }

// let n = Number(prompt("Enter ending number"))
// for (i = 1; i <= n; i++) {
//     console.log(i)
// }

// let n = Number(prompt("Enter ending number"))
// let i = 1
// while (i <= n) {
//     console.log(i)
//     i++ 
// }

// let n = Number(prompt("Enter a number"))
// for (; n > 0; n++) {
//     if (n % 2 === 0) {
//         console.log(n + 2)
//         if (n + 2) {
//             break
//         }
//     } else if (n % 2 > 0) {
//         console.log(n + 1)
//         if (n + 1) {
//             break
//         }
//     }
// }

// let n = Number(prompt("Enter a number"))
// while (n > 0) {
//     if (n % 2 === 0) {
//         console.log(n + 2)
//         if (n + 2) {
//             break
//         }
//     } else if (n % 2 > 0) {
//         console.log(n + 1)
//         if (n + 1) {
//             break
//         }
//     }
//     n++
// }

// let n = Number(prompt("Enter"))
// while (n < 20) {
//     if (n % 2 === 0) {
//         console.log(n + 2)
//     }
//     n++
// }

// Vòng lặp do/while

// let n = Number(prompt("Enter number"))
// let isN = true
// do {
//     if (n % 2 === 0) { 
//         console.log(n + 2)
//         if (n + 2) {
//             break
//         }
//     } else {
//         console.log(n + 1)
//     }
//     n++
// } while (n < 10)

// Vòng lặp do/while là vòng lặp thực hiện 1 lệnh trước sau đó mới xét đến điều kiện

// let i = 0
// let isSuccess = false

// do {
//     console.log("Lần " + i)
//     if (true) {
//         isSuccess = true
//     }
//     i++
// } while (!isSuccess && i < 10)

let n = Number(prompt("Enter"))

// do {
//     if (n % 2 === 0) {
//         console.log(n + 2)
//     } else if (n % 2 > 0) {
//         console.log(n + 1)
//     }
//     n++
// } while (false)
// // Trong trường hợp này điều kiện luôn sai nên nó chỉ thực hiện câu lệnh ban đầu, giờ đây vòng lặp chỉ đơn giản
// // là 1 câu điều kiện if - else if

// do {
//     if (n % 2 === 0) {
//         console.log(n + 2)
//         if (n + 2) {
//             break
//         }
//     } else if (n % 2 > 0) {
//         console.log(n + 1)
//         if (n + 1) {
//             break
//         }
//     }
//     n++ // Bắt đầu từ bước này là không cần thiết vì vòng lặp đã kết thúc
// } while (n >= 0)

// let n1 = 1
// do {
//     console.log(n1)
//     n1++
// } while (n1 <= n)

/* n là điều kiện kết thúc, n1 là vòng lặp, bước nhảy là 1
Đầu tiên lệnh sẽ in ra n1 là 1
Tiếp theo cộng thêm 1
Sau đó xét điều kiện: Vì chạy từ 1 đến n nên n1 phải <= n
Done
*/ 

// let j = Number(n)
    
// for (; j <= n; j++) {
//     if (j % 2 === 0) {
//         console.log(j + 2)
//     } else if (j % 2 > 0) {
//         console.log(j + 1)
//     }
// }   

/*Tư duy hướng giải: Để người dùng nhập 1 số, nếu chẵn thì cộng thêm 2, nếu lẻ cộng thêm 1.
Sau khi thực hiện bước nhảy thì không thỏa mãn điều kiện nên vòng lặp dừng lại.

Biến n là dữ liệu đầu vào của người dùng
Biến j dùng để chạy vòng lặp
Điều kiện là j >= n 
Bước nhảy n++
Nếu điều kiện if đúng thì in ra j + 2, xét vòng lặp hoạt động:
    Người dùng nhập số n
    Vì j = Number(n) nên vòng lặp lúc này kiểm tra điều kiện
        Nếu đúng điều kiện if, tức là số chẵn sẽ in ra j + 2
        Thực hiện bước nhảy là j++, lúc này j + 2 + 1 > n, không thỏa mãn điều kiện nên vòng lặp dừng
Tương tự với điều kiện else if
    */
   
// let j = Number(n)
    
// for (; j >= n; n++) {
//     if (j % 2 === 0) {
//         console.log(j + 2)
//     } else if (j % 2 > 0) {
//         console.log(j + 1)
//     }
// }


/*
Tư duy hướng giải: Để người dùng nhập 1 số, nếu chẵn thì cộng thêm 2, nếu lẻ cộng thêm 1.
Sau khi thực hiện bước nhảy thì không thỏa mãn điều kiện nên vòng lặp dừng lại.

Biến n là dữ liệu đầu vào của người dùng
Biến j dùng để chạy vòng lặp
Điều kiện là j >= n 
Bước nhảy n++
Nếu điều kiện if đúng thì in ra j + 2, xét vòng lặp hoạt động:
    Người dùng nhập số n
    Vì j = Number(n) nên vòng lặp lúc này kiểm tra điều kiện
        Nếu đúng điều kiện if, tức là số chẵn sẽ in ra j + 2
        Thực hiện bước nhảy là n++, lúc này n++ < j + 2, không thỏa mãn điều kiện nên vòng lặp dừng
Tương tự với điều kiện else if
*/