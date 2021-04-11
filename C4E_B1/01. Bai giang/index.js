//print in tab console: In dong lenh de kiem tra
console.log('Hello C4E');
//alert("Hello Everybody"); //goi ham thong bao

// 1. KHAI BAO BIEN VA GAN GIA TRI CHO BIEN
let myName = "DaoTien";
myName = "Tien";
let mynameother = "Quang";
// Co the ghi de gia tri cua bien, bien khong khai bao ma duoc su dung se bi loi
let daoQuangTien = "Dao Quang Tien";
console.log("dong 12 =>", daoQuangTien);
let x, y, q = 10, z = 8
console.log((x, y, q), z)
// Hang so
const dao_tien_hang_so = "1989";
const ngay_thang_sinh = "01 24"
console.log(dao_tien_hang_so);
console.log(ngay_thang_sinh)
//thay doi
let dQT = "Tien";
console.log(dQT, dao_tien_hang_so, ngay_thang_sinh);

// 2. KIEU BIEN SO TRONG JAVASCRIPT
// 2.1. Number: Number duoc hieu la gia tri khong trong dau ""
let tuoi = 32;
let namHienTai = 2021;

//kiem tra kieu cua 1 bien so cua hang so
console.log("dong 29 =>", typeof tuoi);
console.log("dong 30 =>", typeof namHienTai);

//thao tac voi kieu number
//+ - * / % (cong, tru, nhan, chia, chia lay du)

console.log("dong 34 =>", namHienTai - tuoi);
console.log("dong 35 =>", namHienTai * tuoi);
console.log("dong 36 =>", namHienTai + tuoi);
console.log("dong 37 =>", namHienTai / tuoi);
console.log("dong 38 =>", namHienTai % tuoi); //chia lay du

//chia lay nguyen
console.log("dong 41 =>", (namHienTai - (namHienTai % tuoi)) / tuoi); // (nam hien tai - so du) / tuoi = nguyen

let tuoiNamSau = tuoi + 1;
console.log('dong 44 =>', tuoiNamSau);

//Tinh tuoi cua nam sau va nam sau nua
//tuoi = tuoi + 1; //33

//Co the viet bang cach khac: tuoi = tuoi + 2 <=> +=2 -=2 *=2 /=2

tuoi += 2;
console.log("dong 53 =>", tuoi);

tuoi -= 2;
console.log("dong 56 =>", tuoi);

tuoi *= 2;
console.log("dong 59 =>", tuoi);

tuoi /= 2;
console.log('dong 62 =>', tuoi);

//++ --
//++ tuong doi voi += 1 hoac tuoi = tuoi + 1
tuoi++;
console.log("dong 67 =>", tuoi);

//-- tuong doi voi -= 1 hoac tuoi = tuoi - 1
tuoi--;
console.log("dong 71 =>", tuoi);

// 2.2. String: KIEU CHUOI
let myCenter = "TC";
let myClass = "C4EJS111";
console.log(typeof myClass);
console.log(myClass); console.log(myCenter)

//cong chuoi
//let fullNameOfClass = myCenter + gachngang + myClass;
//gán trong String
let fullNameOfClass = myCenter + "-" + myClass;
let totalPerson = 21; let classAdress = "22B Thanh Cong"
let info = fullNameOfClass + "-" + totalPerson;

console.log(typeof info);
console.log("ten day du cua lop hoc Mindx:", info + " " + classAdress);

//VD khac ve cong chuoi
let myWifeFistName = "Hang"
let myWifeLastName = "Bui"
let herOld = "27 tuoi"

let myWifeFullName = myWifeLastName + " " + myWifeFistName
console.log(myWifeFullName)

let herInfo = myWifeFullName + " " + herOld
console.log(herInfo)

//convert 27 to string
console.log(typeof (27 + ""))

//convert: 21 => "21"
//Cach convert number => string

console.log(typeof (21 + "")); console.log(typeof (22 + ""))
console.log()

//convert anything =>string
console.log("96 =>", totalPerson.toString());
console.log(classAdress.toString());

//cach khac
let tuQuy2 = 2222
tuQuy2 = String(tuQuy2);
console.log(tuQuy2);

//VD khac ve convert number to string
let jackPot = 180
jackPot = String(jackPot)
console.log(jackPot)

//convert string => number voi dieu kien string phai co dang number
//"21" => 21
let baDoiThong = "445566";
baDoiThong = Number(baDoiThong);
console.log(baDoiThong);

let laVie = "12345"
laVie = Number(laVie)
console.log(laVie)

//cac ham co san voi string
let templateString = "Cai Gi Do";
// ket qua mong muon: cai gi do
console.log(templateString.toLocaleLowerCase());
//ket qua mong muon: CAI GI DO
console.log(templateString.toUpperCase());

let chieuThuBay = "Something right"
console.log(chieuThuBay.toUpperCase())

//Bai tap ve nha: Tim cac ham co san voi String ma Javascript ho tro. console.log ra