//slice() , reverse()
//slice() เป็นการหั่นส่วนของ array ตาม index ที่เราต้องการ และ return ออกมาเป็น array ใหม่

//ex1
const name = ["tus", "gus", "phai", "dose"]; // ตัวแปร array
const str = 'Theerut' 
console.log(name.slice(0,3)); 
console.log(str.slice(2,5)); 

//ex2
const cars=["Toyota","Honda","Isuzu","Mitsubishi"];  // ตัวแปร array
console.log(cars.slice(-2)); // ดึงตำแหน่งเริ่มจาก 2 ตัวหลัง 

//ex3


//reverse() กลับลำดับค่าของตัวแปร array
const name = ["tus", "gus", "phai", "dose"]; // ตัวแปร array
console.log(name.reverse()); 

