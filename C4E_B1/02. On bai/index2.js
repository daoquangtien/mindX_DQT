// Lệnh console.log: Dùng để in tất cả các câu lệnh ra để kiểm tra kết quả
// console.log(""): Dùng để in ra chuỗi
// console.log(): Dùng để in ra biến, hằng số, số, ...
// Có thể kết hợp để in ra kết quả mong muốn

// I. KHAI BAO VA GAN GIA TRI CHO BIEN

// Quy tắc đặt tên: 
// 1. Chỉ bao gồm chữ không dấu, số, dấu _
// 2. Không bắt đầu bằng số
// 3. không trùng với keyword của Javascript: let, var, break, ...

// Một số lưu ý với Biến
// 1. Có thể khai báo biến mà chưa cần gán giá trị ngay

let x
x = 10 // Lúc này mới khai báo

// 2. Tại 1 thời điểm, 1 biến chỉ lưu trữ được 1 giá trị

// 3. Có thể gán giá trị của biến bằng 1 biến khác

x = 123
let y = x + 1

// 4. Biến chưa khai báo mà sử dụng thì sẽ bị báo lỗi

// 5. Có thể khai báo nhiều biến 1 lúc, trong đó các biến giống nhau có thể gán cùng giá trị theo 2 cách, VD:

let k = t = z = 1, u = 3 // In lần lượt giá trị của từng biến, kể cả các biến có giá trị giống nhau
console.log(k, t, z, u)
let a, b, c = 3, d = 4
console.log((a, b, c), d) // Chỉ In các biến có giá trị khác nhau, các biến có chung giá trị sẽ chỉ in giá trị đó

// 6. Có thể ghi đè giá trị của biến

x = "Man United"
console.log(x)

// II. HẰNG SỐ

// Tương tự như biến, hằng số dùng để lưu giá trị. Nhưng khác với biến, giá trị của hằng số không thể được gán lại
// Nói cách khác, mỗi hằng số chỉ lưu được 1 giá trị duy nhất tại mọi thời điểm

// Một số lưu ý về Hằng số

// 1. Không thể khai báo hằng số mà không gán giá trị

// 2. Không thể gán lại giá trị cho hằng số

// 3. Có thể khai báo 1 lúc nhiều hằng số
// Không khai báo kiểu gộp chung 1 dòng với các hằng số có cùng giá trị như khai báo biến: const hai, two =2

const hai = 2, one = 1, mot = 1
console.log(hai, one, mot)

// 4. Có thể khai báo hằng số bằng giá trị của một phép tính khác

let bon = 4
const nam = bon + 1
console.log(nam)

let me = "Đẹp Trai"
const allInfo = me + " Cool Ngầu"
console.log(allInfo)

const namSinh = 1989
const yourName = "Đào Tiến"
const nguyenQuan = "Thái Bình"
console.log(yourName, namSinh, nguyenQuan)

// III. CÁC KIỂU DỮ LIỆU

// 1. NUMBER

// Number là dạng số bao gồm số nguyên dương, nguyên âm, số thập phân và số 0
// Số nằm trong "" là string, không có tác dụng tính toán

// Một số thao tác với Number

// a, + - * / % ( Cộng, Trừ, Nhân, Chia, Chia lấy dư)

let present = 2021
let myAge = 32

console.log(present - myAge)
console.log(present + myAge)
console.log(present * myAge)
console.log(present / myAge)
console.log(present % myAge) // Chia lấy dư
console.log((present - (present % myAge)) / myAge) // Chia lấy nguyên: (Tử số - số dư) / mẫu số = Số Nguyên

// b, += -= *= /= <=> += 1 <=> myAge = myAge + 1

let timeHienTai = 10

timeHienTai += 1
console.log(timeHienTai)

timeHienTai++
console.log(timeHienTai)

// Tính tuổi các năm sau, thực hiện thêm các phép toán còn lại

myAge += 1 // 1 năm sau
console.log(myAge)

myAge += 2 // <=> 2 năm sau
console.log(myAge)

myAge -= 2
console.log(myAge)

myAge *= 2
console.log(myAge)

myAge /= 2
console.log(myAge)

// c, ++ -- <=> myAge++ = myAge + 1, myAge += 1, myAge-- = myAge - 1, myAge -= 1

myAge++
console.log(myAge)

myAge--
console.log(myAge)

// 2. STRING - DỮ LIỆU DẠNG CHUỖI

// String là tập hợp các ký tự trong dấu "" '' ` `. Number trong string ko có tác dụng tính toán
// String trong `` có thể chèn biến hoặc biểu thức bằng cách gói vào trong ${}

console.log(`1h = ${60 * 60}s`)

// Cộng chuỗi: 

let morning = "Buổi sáng, "
let afternoon = "Buổi chiều, "
let evening = "Buổi tối"

let oneDay = morning + afternoon + evening
console.log("Một ngày có 3 buổi:", oneDay)
console.log(typeof oneDay) //string

// Number + string = string

let chin = 9
let muoi = "10"

let total = chin + muoi
console.log(total)
console.log(typeof total) //string

// Number - string = number

total = chin - muoi
console.log(total)
console.log(typeof total) //number

// Convert number sang string

console.log(typeof (chin + "")) // Cách 1
console.log(typeof chin.toString()) // Cách 2

chin = String(chin) // Cách 3
console.log(typeof chin)

// Tìm các hàm có sẵn với string

let abcd = "Whatever You Want"

// 1. toLocaleLowerCase
// bien.toLocaleLowerCase() -> Viết thường cả chuỗi theo ngôn ngữ địa phương
console.log(abcd.toLocaleLowerCase())

// 2. toLocalUpperCase
// bien.toLocaleUpperCase() -> Viết in hoa cả chuỗi theo ngôn ngữ địa phương
console.log(abcd.toLocaleUpperCase())

// 3. charAt
// bien.charAt(index) -> Trả về ký tự trong string tương ứng với vị trí bạn nhập vào. Vị trí được tính từ 0, index là vị trí cần lấy
console.log(abcd.charAt(0)); console.log(abcd.charAt(1)) // W h

// 4. charCodeAt
// bien.charCodeAt(index) -> Trả về mã Unicode của ký tự trong string tương ứng với vị trí bạn nhập vào. Vị trí được tính từ 0, index là vị trí cần lấy
console.log(abcd.charCodeAt(3)) // 116

// 5. concat()
// bien.concat(string1, string2,... stringN) -> được sử dụng để nối 2 hoặc nhiều string lại với nhau. 
// Phương thức này không làm thay đổi string ban đầu, nhưng sẽ trả về một string mới.
// Đây là 1 cách cộng chuỗi khác, tương tự cách gán chuỗi

let tenToi = "Tien", tenDem = "Quang ", ho = "Dao "
console.log(ho.concat(tenDem, tenToi))

// 6. endWith()
// bien.endsWith("searchString", length) -> Kiểm tra string ở vị trí cuối có nằm trong string gốc hay không. Có = true, không = false.
// searchString: String con cần tìm kiếm, có phân biệt chữ hoa, chữ thường.
// length: Không bắt buộc, là giới hạn độ dài của string, nếu không truyền thì mặc định sẽ là độ dài của biến, tính cả dấu cách

let loiChao = "Hi there, how's going?"
let checkIt = loiChao.endsWith("going?")
console.log(checkIt) //true

let checkIt2 = loiChao.endsWith("there", 8)
console.log(checkIt2) //true

// 7. String.fromChaCode() 
// String.fromCharCode(n1, n2, ...nX) -> Được sử dụng để chuyển đối mã Unicode thành ký tự tương ứng
// Đây là một phương thức tĩnh, luôn luôn có cú pháp là String.fromCharCode()

let text = String.fromCharCode(70)
console.log(text) // F

// Hoặc có thể truyền nhiều mã Unicode để nối thành string
let text1 = String.fromCharCode(100, 80, 75, 76)
console.log(text1) //dPKL

// 8. includes()
// string.includes("searchValue", start) -> Được sử dụng để kiểm tra xem string con có nằm trong string mẹ hay không. 
// Phương thức trả về true nếu tìm thấy, ngược lại trả về false
// searchValue: String con cần tìm kiếm, phân biệt chữ hoa chữ thường.
// start: Không bắt buộc, mặc định là 0, là ví trí bắt đầu để tìm kiếm, tính cả dấu cách

let smth = "Check it out, men, boy, girl!"
let smth1 = smth.includes("men")
console.log(smth1) //true

let smth2 = smth.includes("out", 12)
console.log(smth2) //false -> từ vị trí 12 không có string nào là "out"

// 9. indexOf()
// string.indexOf(searchvalue, start) -> Được sử dụng khi bạn muốn lấy vị trí xuất hiện đầu tiên của string con trong string mẹ.
// searchValue: String con cần tìm kiếm, phân biệt chữ hoa chữ thường.
// start: Không bắt buộc, mặc định là 0, là ví trí bắt đầu để tìm kiếm, tính cả dấu cách
// Lưu ý: nếu tìm thấy thì vị trí được tính từ 0, nếu không tìm thấy thì trả về -1

let exam9 = "No football match today, today has no football match"
let exam91 = exam9.indexOf("today")
console.log(exam91) // 18

let exam92 = exam9.indexOf("ManU")
console.log(exam92) // -1

let exam93 = exam9.indexOf("ball", 5)
console.log(exam93) // 7 -> tìm từ vị trí số 5 có xuất hiện "ball" -> vị trí đượcc tính bắt đầu từ 0

// 10. lastIndexOf()
// string.lastIndexOf(searchvalue, length) -> Tương tự như indexOf(), nhưng trả về vị trí xuất hiện cuối cùng của string con trong string mẹ.
// searchValue: String con cần tìm kiếm, phân biệt chữ hoa chữ thường.
// length: Không bắt buộc, là giới hạn của string, mặc định sẽ là độ dài của string.

let exam10 = "No pain no gain, no gain no pain"
let exam101 = exam10.lastIndexOf("gain")
console.log(exam101) // 20

let exam102 = exam10.lastIndexOf("no", 20)
console.log(exam102) // 17

let exam103 = exam10.lastIndexOf("train")
console.log(exam103) // -1

// 11. length
// length dùng để tính độ dài của string
// var length = str.length

let exam11 = "Hi everybody!"
let length = exam11.length
console.log(length) // 13

// 12. localeCompare()
// Được sử dụng khi bạn muốn so sánh 2 string theo ngôn ngữ địa phương.
// Tùy thuộc vào mỗi vùng (quốc gia) mà kết quả của việc so sánh 2 string sẽ khác nhau. 
// Địa phương sẽ được lấy từ thông tin của trình duyệt.

// localeCompare() sẽ trả về:

// Trả về -1 nếu str1 được sắp xếp trước str2
// Trả về 0 nếu str1 bằng str2
// Trả về 1 nếu str1 được sắp xếp sau str2

// Cú pháp: string.localeCompare(compareString). Trong đó compareString là string mà bạn muốn so sánh với string hiện tại.

let exam121 = "AB"
let exam122 = "YZ"
let exam123 = "AB"

let cp1 = exam121.localeCompare(exam122)
console.log(cp1) // -1

let cp2 = exam122.localeCompare(exam121)
console.log(cp2) // 1

let cp3 = exam121.localeCompare(exam123)
console.log(cp3) // 0
