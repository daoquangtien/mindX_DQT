// // Bài 1: for and Object

// // Run the following code, observe and then answer the questions

// const product = {
//     name: "Xiaomi rice cooker",
//     price: 1700,
//     brand: "Xiaomi",
//     color: "White"
// };

// for (let x in product) {
//     console.log(x);
// }

// /* Questions:

//     1.1. What does x receives from product, property or value?

//         Vòng lặp for in trả về key của object, x nhận về key

//     1.2. Use the for loop to print/log out the following output
// */

// for (let output in product) {
//     console.log(`${output}: ${product[output]}`)
// }


// /* Bài 2: Learn about destructuring object in the following tutorials:

// Object destructuring in ES6: Phân rã: Lấy trực tiếp phần tử hoặc key và value từ array hoặc object
// ES6 destructuring: the complete guide
// Then use one line of code to destructure to obtain subject, dueDate and assignTo from this object:
// */
// // 1. Đối với array: 

// let array = [1, 2, 3, 4, 5, "Sáu"]
// let [a, b, c] = array
// console.log(a, b, c)

// // Bỏ phần đầu, trả về 1 array mới là phần còn lại của array:

// let [x, y, ...rest] = array
// console.log(rest)

// // Chỉ lấy những phần tử cần lấy

// let [d, , e, f] = array
// console.log(d, e, f)

// // 2. Đối với object

// let obj = {
//     name: "Tiến",
//     age: 16,
//     adress: "Hà Nội",
//     hobby: "Foot ball",
//     hobby2: "Food"
// }

// let { age, adress } = obj
// console.log(age, adress)

// let { name, ...restObj } = obj
// console.log(restObj)

// // Bỏ đi 1 key và value, tạo 1 object mới ko có key và value trong danh sách
// let { hobby, ...newObject } = obj
// console.log(newObject)

// // Then use one line of code to destructure to obtain subject, dueDate and assignTo from this object:

// const task = {
//     subject: "Implement login feature",
//     createdBy: "Hoang Ngoc Duc",
//     assignTo: "Nguyen Phuong Nam",
//     dueDate: "2019-10 - 08T18: 00: 24+0000",
//     expectedHours: 0.5,
// };

// console.log(task)

// let { subject, dueDate, assignTo } = task
// console.log(subject, dueDate, assignTo)

// /* Bài 3: Here is the actual data from a job search site, copy all of the data, assign it to a variable or a constant named jobSearch in your code. Log or print it out to see its structure then answer the following questions:

// 3.1 - What is the data type of the outermost layer (Number, String, Object, Array or else)?

// Kiểu dữ liệu lớp ngoài cùng là object


// 3.2 - The hits property is where the job results are stored, is it a Number, String, Array, Object or something else?

// Thuộc tính hits là 1 Object contructuring: Cấu trúc đối tượng

// 3.3 - In each hit of hits, how to find the job’s title, locations, salary, benefits, skills and requirements

//     Loằng ngoằng quá ko hiểu T__T


// */

// // Bài 4

// // 4.1. Initialize an object to represent a dictionary, with properties as keyword and values as explanation, the initial values are from this table

let dictionary = {

    debug: "The process of figuring out why your program has a certain error and how to fix it",

    done: "When your task is complete, the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",

    defect: "The formal word for ‘error’",

    pm: "The short version  of Project Manager, the person in charge of the final result of a project",
    "ui/ux": "UI means User Interface, UX mean User Experience, are the process to define how your products looks and feels"
}

// // 4.2. Write a script to simulate the lookup of the dictionary initialized in the previous example

while (true) {

    alert("Hi there, this is dev dictionary")
    let userAsk = prompt("Enter key word")

    if (userAsk === "debug") {
        alert(`${userAsk}: ${dictionary.debug}`)
    } else if (userAsk === "dev") {
        alert("We couldn't find your word: dev")
        let devAsk = prompt("Leave your explaination")
        alert("Done")
        alert(`dev: ${dictionary.dev = devAsk}`)
        break
    } else {
        alert("Please enter correct word")
    }
}

// console.log("-------------------------")

// // Bài 5. Initialize a variable named products, containing an array of products, each product has a name, price, brand, category, and color

let products = [

    xiaomi = {
        brand: "Xiaomi",
        name: "Xiaomi portable charger 20000mah",
        price: 428,
        color: "White",
        category: "Charger"
    },

    vsmart = {
        brand: "Vsmart",
        name: "VSmart Active 1",
        price: 5487,
        color: "Black",
        category: "Phone"
    },

    apple =
    {
        brand: "Apple",
        name: "iPhone X",
        price: 21490,
        color: "Grey",
        category: "Phone"
    },

    samsung =
    {
        brand: "Samsung",
        name: "Samsung Galaxy A9",
        price: 8490,
        color: "Blue",
        category: "Phone"
    }
]

// // 5.1. Print/log name and price of all the products out: 

// for (let i in products) {
//     for (key in products[i]) {
//         if (key === "name" || key === "price")
//             console.log(`${key.toUpperCase().charAt(0)}${key.slice(1)}: ${products[i][key]}`)
//     } console.log("-------------------------")
// }



// //     Nhầm
// //     let products = {

// //     xiaomi: ["Name: Xiaomi portable charger 20000mah", "Price: 428", "Color: White", "Catelogy: Charger"],

// //     vsmart: ["Name: VSmart Active 1", "Price: 5487", "Color: Black", "Catelogy: Phone"],

// //     apple: ["Name: iPhone X", "Price: 21490", "Color: Grey", "Catelogy: Phone"],

// //     samsung: ["Name: Samsung Galaxy A9", "Price: 8490", "Color: Blue", "Catelogy: Phone"],
// // }


// // 5.2. Write a script printing/logging out the products with their number, then print/logging out the details of a product with its position entered by users

// // Bài này làm tách ra vì chưa biết cách gộp!

// // In sản phẩm cho khách hàng xem dưới dạng liệt kê

// for (let i in products) {
//     for (let key in products[i]) {
//         if (key === "name") {
//             console.log(`#${Number(i) + 1}. ${products[i][key]}`)
//         } else if (key === "price") {
//             console.log(`    Price: ${products[i][key]}`)
//         }
//     }
// }


// // Hỏi xem khách chọn sản phẩm ở vị trí thứ mấy

// let position = Number(prompt("Enter position of products you want to check"))
// console.log(products[position - 1])


// // 5.3. Write a script printing/logging out the products based on category input by users

// let askProduct = prompt("Enter your category?")

// for (let value of products) {
//     for (let key in value) {

//         if (askProduct === value[key]) {
//             console.log(`Name: ${value.name}`)
//             console.log(`Price: ${value.price}`)
//             flag2 = false

//         } else if (askProduct === value[key]) {
//             console.log(`Name: ${value.name}`)
//             console.log(`Price: ${value.price}`)
//         }
//     } console.log("-------------------------")
// }

// // 5.4. Add providers to each product

// xiaomi.providers = "Phukienzero, Dientuccc"
// vsmart.providers = "Tgdd, Ddghn, VhStore"
// apple.providers = "Tgdd"
// samsung.providers = "Tgdd"

// console.log(products)

// for (let i in products) {
//     for (let key in products[i]) {
//         if (key === "name") {
//             console.log(`#${Number(i) + 1}. ${products[i][key]}`)
//         } else if (key === "price" || key === "providers") {
//             console.log(`${key.toUpperCase().charAt(0)}${key.slice(1)}:: ${products[i][key]}`)
//         }
//     } console.log("-------------------------")
// }

// /*
// 5.5. (Optional) Search the products based on the wanted provider entered by users, if you need more directions, find the hints at the end of this homework
//     Chưa hiểu rõ về cách dùng flag và quy tắc đặt hàm liên quan tới các dấu ngoặc
//     Câu này lồng nhiều vòng lặp với nhau chưa hợp lý lắm

//     Diễn giải: 
//     Xét từng đối tượng trong mảng
//     Nếu user nhập Tgdd và values của đối tượng có chứa chữ Tgdd
//     Tiếp tục xét từng key trong từng đối tượng
//     In ra những đối tượng chứa "Tgdd"

//     Chung hướng dẫn a cách xử lý bài này nhé :))
// */

// let store = prompt("Enter provider")

// for (let value of products) {
//     for (key in value) {
//         if (store === "Tgdd" && String(value[key]).includes("Tgdd")) {
//             for (key in value) {
//                 console.log(`${key.toUpperCase().charAt(0)}${key.slice(1)}: ${value[key]}`)
//             } console.log("-------------------------")
//         }
//     }
// }

// // 6. Write a script to store and process the learning tasks to become a front-end developer

// let devFrontEnd = [

//     html = {
//         subject: "HTML",
//         complete: "false"
//     },

//     css = {
//         subject: "CSS",
//         complete: "false"
//     },

//     basic = {
//         subject: "Basic of Javascript",
//         complete: "false"
//     },

//     nodeJS = {
//         subject: "Node Package Manager (npn)",
//         complete: "false"
//     },

//     git = {
//         subject: "Git   ",
//         complete: "false"
//     },
// ]


// // 6.1 - 6.5

// let flag = true

// while (flag) {

//     let subject = prompt("Enter your new command (New, Delete, Update, Complete)")

//     if (subject === "new") {
//         let newTask = prompt("Enter new task:")

//         devFrontEnd.push({
//             subject: newTask,
//             complete: "false"
//         })

//     } else if (subject === "update") {
//         let updatePosition = Number(prompt("Enter position:"))
//         let updateTitle = prompt("Enter new title")
//         devFrontEnd[updatePosition - 1].subject = updateTitle

//     } else if (subject === "complete") {
//         let completePosition = prompt("Enter position:")
//         devFrontEnd[completePosition - 1].complete = "true"

//     } else if (subject === "delete") {
//         let del = prompt("Enter position to delete")
//         devFrontEnd.splice(del - 1, 1)
//         console.log(devFrontEnd)
//     }
//     for (let i = 0; i < devFrontEnd.length; i++) {
//         console.log(`#${i + 1}. ${devFrontEnd[i].subject}`)
//         console.log(`    Complete: ${devFrontEnd[i].complete}`)
//     } console.log("-------------------------")

//     let askLoop = prompt("Do you want to continue? Press Y or N")
//     if (askLoop === "n") {
//         flag = false
//     }
// }

// 6.6 - Chưa biết cách làm T_T
// Các bài Nice-to-do ko kịp làm

