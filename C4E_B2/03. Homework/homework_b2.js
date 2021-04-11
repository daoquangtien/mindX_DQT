/*
Bài tập về nhà buổi 2:

B1. let vs var vs const
Learn about let, var and const by
Reading these tutorials:
var, let and const, what is the difference?
var vs let vs const in JavaScript
	
Then answer the following questions:

    1. What are var and const in JavaScript?

    * var: Đọc nhưng chưa hiểu kỹ vì nhiều kiến thức còn mới

    - var là từ khóa dùng để khai biến
    - var có thể gán lại giá trị và khai báo lại biến

    * const - Hằng số

    - const là hằng số, dùng để gắn giá trị cho biến giống như let và var, tuy nhiên hằng số không thể gán lại giá trị.
    - Tại mọi thời điểm, hằng số chỉ có 1 giá trị duy nhất
    - Không thể khai hằng số mà không gán giá trị
    - Có thể khai báo nhiều hằng số 1 lúc: const x = 1; y = 2

    2. What are the differences between let and var?

    - let chỉ hoạt động trong phạm vi nhất định, không khai báo lại được biến
    - var tạo ra một biến có phạm vi truy cập xuyên suốt function chứa nó, khai báo lại được biến

    3. What are the differences between let and const?

    - Biến được khai báo bởi let có thể gán lại giá trị, có thể khai báo mà không gán giá trị ngay
    - Biến được khai báo bởi const là hằng số, không thể gán lại giá trị và bắt buộc phải gán giá trị ngay thời điểm khai báo

    4. What to use in what cases?

    - let dùng để khai báo biến hoạt động trong 1 phạm vi nhất định {}
    - const dùng để khai báo 1 biến cố định, ko thay đổi giá trị
    - Cần Chung chỉ rõ thêm về var :D, đọc tài liệu thấy nó cứ lung tung quá


B2: Boolean

    Learn about Boolean by
        - Reading these tutorials:
        - A Boolean (logical type) and Logical operators
        - JavaScript Boolean explained

    Then answer the following questions:
        1. What is Boolean?
        2. What results in Boolean?

        1. Boolean là kiểu dữ liệu 'true' hoặc "false"
        2. Kiểu dữ liệu Boolean luôn luôn trả về kết quả "true" hoặc "false"
*/

// B3:

//  a. Write a program to print out: 7 numbers, starting from 0 (no user input)

console.log("3a ---------------------")

for (let n = 0; n <= 7; n++) {
    console.log("3a: " + n)
}

let i = 0
while (i <= 7) {
    console.log("3a: " + i)
    i++
}

let i2 = 0
do {
    console.log("3a: " + i2)
    i2++
} while (i2 <= 7)

//  b. n numbers, starting from 0, n entered by user
console.log("3b ---------------------")

let t1 = Number(prompt("Enter ending number"))

for (let t2 = 0; t2 <= t1; t2++) {
    console.log("3b: " + t2)
}

let t3 = 0
while (t3 <= t1) {
    console.log("3b: " + t3)
    t3++
}

let t4 = 0
do {
    console.log("3b: " + t4)
    t4++
} while (t4 <= t1)

//  c. A sequence of numbers, starting from 3, ending before n, n entered by user

console.log("3c ---------------------")

let t10 = Number(prompt("Enter ending number"))
for (t5 = 3; t5 < t10; t5++) {
    console.log("3c: " + t5)
}

//d. A sequence of numbers, starting from c, ending before n, c and n entered by user

console.log("3d ---------------------")

let c = Number(prompt("Enter starting number"))
let nn = Number(prompt("Enter ending number"))

while (c < nn) {
    console.log("3d: " + c)
    c++
}

//  f. A sequence of numbers, starting from c, ending before n, stepping by s. c, n and  s entered by user

console.log("3f---------------------")

let cf = Number(prompt("Enter starting number"))
let nf = Number(prompt("Enter ending number"))
let sf = Number(prompt("Enter stepping number"))

do {
    console.log(cf)
    cf = sf + cf
} while (cf < nf)

// B4. Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user

let quest = Number(prompt("Enter the number that you want to calculate the factorial"))
let j = 1
let result = 1
for (; j <= quest; j++) {
    result *= j
}
console.log("4. Result: " + result)

/*
quest là dữ liệu đầu vào và là điều kiện kết thúc
j là điều kiện bắt đầu
result để thực hiện phép tính giai thừa: result! = result * lần lượt bước nhảy

Bài này thật sự ko khó mà lại phải Google mới xong T__T
*/

// B5. Write a program asking users their age, and then decide if they are old enough to view a 14+ content

let ageUser = Number(prompt("How old are you?"))

if (ageUser >= 14) {
    alert("Welcome, buddy!")
} else if (ageUser < 14 && ageUser > 0) {
    alert("You don't have permission to enter this site")
} else {
    alert("Invalid, try again")
}

// B6. Write a program asking user to enter a number, x, then check if x is in the lower half or higher half of 0 - 9 range

let x6 = Number(prompt("Enter any number from 0 -> 9"))

if (x6 >= 0 && x6 < 4) {
    alert("You are in the lower of 0 - 9 range")
} else if (x6 === 5 || x6 === 4) {
    alert("You are in the middle of 0 - 9 range")
} else if (x6 >= 6 && x6 <= 9) {
    alert("You are in the higher of 0 - 9 range")
} else {
    alert("Invalid, please try again!")
}

// B7. Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n

let xa = Number(prompt("Enter first number"))
let xb = Number(prompt("Enter second number"))

if (xa < xb) {
    alert(xa + " is in lower half of " + xb)
} else if (xa > xb) {
    alert(xa + " is in higher half of " + xb)
} else if (xa === xb) {
    alert(xa + " = " + xb)
} else {
    alert("Invalid, please try again")
}

// B8. Write a script to check if a number is even (divisible by 2) or odd number

let x8 = Number(prompt("Enter the number you want to check"))

if (x8 % 2 === 0) {
    alert(x8 + " is even number")
} else if (x8 % 2 > 0) {
    alert(x8 + " is odd number")
} else {
    alert("Invalid, please try again")
}

// B9. Write a program to print out

//    a. 6 L’s and H’s, half L’s, half H’s (L means low, H means high)
//       Tư duy hướng giải: Phải cho "H" in 3 lần liên tiếp, sau đó mới in 3 lần "L".
//       a9 <= 3 khi chạy vòng lặp sẽ thỏa mãn điều kiện của vòng lặp

console.log("9a---------------------")

for (a9 = 1; a9 <= 6; a9++) {
    if (a9 <= 3) {
        console.log("H")
    } else {
        console.log("L")
    }
}

//    b. n L’s and H’s in total, n entered by user
//       Tư duy hướng giải: Phải cho "H" in 1 nửa trước, sau đó in "L"
//       bắt buộc u > (b9 / 2) vì khi chạy sẽ thỏa mãn điều kiện vòng lặp và thỏa mãn điều kiện đề bài  

console.log("9b---------------------")

let b9 = Number(prompt("Enter total number H and L"))

for (u = 1; u <= b9; u++) {
    if (u > (b9 / 2)) {
        console.log("H")
    } else {
        console.log("L")
    }
}

//   c. 8 1’s and 0’s in total, consecutively

console.log("9c---------------------")

console.log("9c. Cách 1")

for (c8 = 0; c8 <= 3; c8++) {
    console.log("0")
    console.log("1")
}

console.log("9c. Cách 2")

let c9 = 0
do {
    console.log("0")
    if (c9 <= 3) {
        console.log("1")
    }
    c9++
} while (c9 <= 3)

let n = 0
do {
    console.log("0")
    if (n <= 3) {
        console.log("1")
    }
    n++
} while (n <= 3)

//   d. n 1’s and 0’s in total, consecutively, n entered by user

console.log("9d---------------------")

let d9 = prompt("Enter total 0 and 1 number")
for (dx = 1; dx <= d9; dx++) {
    if (dx % 2 > 0) {
        console.log("0")
    } else if (dx % 2 === 0) {
        console.log("1")
    }
}

// Luôn in ra 0 trước vì start = 1 -> điều kiện if luôn đến trước

/*
B10. Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as follows

    BMI (Body Mass Index):
    BMI = mass (kg) / (height(m) x height(m))
    Note: you must do the conversion from cm to m before calculation

    And then based on the calculated BMI, tell them that they are:
    Severely underweight if BMI < 16
    Underweight if BMI is between 16 and 18.5
    Normal if BMI is between 18.5 and 25
    Overweight if BMI is between 25 and 30
    Obese if BMI is more than 30
*/

let cm = Number(prompt("What's your height in cm?"))
let kg = Number(prompt("What's your weight?"))
let m = cm * 0.01
let bmi = kg / (m * m)

if (bmi < 16) {
    alert(`"Your BMI is: " = ${bmi}`)
    alert("You are severely underweight")
} else if (bmi >= 16 && bmi <= 18.5) {
    alert(`"Your BMI is: " = ${bmi}`)
    alert("You are underweight")
} else if (bmi > 18.5 && bmi <= 25) {
    alert(`"Your BMI is: " = ${bmi}`)
    alert("You are normal")
} else if (bmi > 25 && bmi <= 30) {
    alert(`"Your BMI is: " = ${bmi}`)
    alert("You are overweight")
} else if (bmi > 30) {
    alert(`"Your BMI is: " = ${bmi}`)
    alert("You are obese")
} else {
    alert("Invalid! Please try again")
}

/* Có thể đưa câu lệnh alert(`"Your BMI is: " = ${bmi}`) lên trên đầu nhưng khi người dùng gõ lung tung
sẽ không thông báo được dòng lệnh cuối
*/

// -------------------------------------------------------------------------

// Bài tập trên lớp

//-------------------------------------------------------------------------
console.log("Yêu cầu người dùng nhập số n, in ra từ 1 đến n") // Sử dụng với cả for, while, do while

// for:

// let n = Number(prompt("Enter ending number"))
// for (i = 1; i <= n; i++) {
//     console.log(i)
// }

// while

let n1 = Number(prompt("Enter ending number"))
let i1 = 1
while (i1 <= n1) {
    console.log(i1)
    i1++
}

// do while

let n8 = Number(prompt("Enter ending number"))
let n7 = 1
do {
    console.log(n7)
    n7++
} while (n7 <= n8)

//-------------------------------------------------------------------------
console.log("Yêu cầu người dùng nhập 1 số n, chỉ in ra số đầu tiên chia hết cho 2 sau nó")

// for cách 1

let n3 = Number(prompt("Enter a number"))
for (; n3 > 0; n3++) {
    if (n3 % 2 === 0) {
        console.log(n3 + 2)
        if (n3 + 2) {
            break
        }
    } else if (n3 % 2 > 0) {
        console.log(n3 + 1)
        if (n3 + 1) {
            break
        }
    }
}

// for không dùng break

let n10 = Number(prompt("Enter a number"))
let j1 = Number(n10)

for (; j1 <= n10; j1++) {
    if (j1 % 2 === 0) {
        console.log(j1 + 2)
    } else if (j1 % 2 > 0) {
        console.log(j1 + 1)
    }
}

// while sử dụng break

let n4 = Number(prompt("Enter a number"))
for (; n4 > 0; n4++) {
    if (n4 % 2 === 0) {
        console.log(n4 + 2)
        if (n4 + 2) {
            break
        }
    } else if (n4 % 2 > 0) {
        console.log(n4 + 1)
        if (n4 + 1) {
            break
        }
    }
}

// while không dùng break

let n11 = Number(prompt("Enter a number"))
let j2 = Number(n11)

while (j2 <= n11) {
    if (j2 % 2 === 0) {
        console.log(j2 + 2)
    } else if (j2 % 2 > 0) {
        console.log(j2 + 1)
    }
    j2++
}

// Vòng lặp do/while
// Vòng lặp do/while là vòng lặp thực hiện 1 lệnh trước sau đó mới xét đến điều kiện

let n5 = Number(prompt("Enter a number"))

do {
    if (n5 % 2 === 0) {
        console.log(n5 + 2)
    } else if (n5 % 2 > 0) {
        console.log(5 + 1)
    }
    n5++
} while (false)

/* Trong trường hợp này điều kiện luôn sai nên nó chỉ thực hiện câu lệnh ban đầu, giờ đây vòng lặp chỉ đơn giản
là 1 câu điều kiện if - else if
*/

let n6 = Number(prompt("Enter a number"))
do {
    if (n6 % 2 === 0) {
        console.log(n6 + 2)
        if (n6 + 2) {
            break
        }
    } else if (n6 % 2 > 0) {
        console.log(n6 + 1)
        if (n6 + 1) {
            break
        }
    }
    n6++ // Bắt đầu từ bước này là không cần thiết vì vòng lặp đã kết thúc
} while (n6 >= 0)

/*
Sự khác nhau giữa while, do/while

    while: kiểm tra điều kiện trước rồi mới thực hiện vòng lặp
    do/while: luôn thực hiện câu lệnh đầu tiên rồi mới kiểm tra điều kiện
*/