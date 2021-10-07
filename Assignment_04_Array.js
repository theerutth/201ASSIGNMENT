//slice() , reverse()
//slice() เป็นการหั่นส่วนของ array ตาม index ที่เราต้องการ และ return ออกมาเป็น array ใหม่

//ex1
const person = ["tus", "gus", "phai", "dose" , "fern"]; // ตัวแปร array
const str = 'Theerut' 
console.log(person.slice(0,4));  // เริ่มตำแหน่งที่ 0 ตัดที่ตำแหน่งที่ 4
console.log(str.slice(2,5)); // เริ่มตำแหน่งที่ 2 ตัดที่ตำแหน่งที่ 5

//ex2
const cars = ["Toyota","Honda","Isuzu","Mitsubishi"];  // ตัวแปร array
console.log(cars.slice(-2)); // ดึงตำแหน่งเริ่มจาก 2 ตัวหลัง 

//ex3
const city = ["BangKok" , "HongKong" , "Tokyo" , "Mumbai"]
console.log(city.slice(1,3));




