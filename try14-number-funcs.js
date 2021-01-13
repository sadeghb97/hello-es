//isNaN va isFinite
let v = 455 / 2
console.log(typeof v + " - " + isNaN(v) + " - " + v)

v = 455 + "0"
console.log(typeof v + " - " + isNaN(v) + " - " + v)

v = 455 + "asd"
console.log(typeof v + " - " + isNaN(v) + " - " + v)

v = "beep" + "asd"
console.log(typeof v + " - " + isNaN(v) + " - " + v)

v = 50 / 0
console.log(typeof v + " - " + isNaN(v) + " - " + isFinite(v) + " - " + v)

//isInteger, isBoolean va ...
v = 53 / 2
console.log(Number.isInteger(v))

v = 52 / 2
console.log(Number.isInteger(v))

//tabe alamat sign -> -1, 0, 1
v = -40
console.log("Sign: " + Math.sign(v))

//floor va trunc -> tafavote trunc ba floor dar adade manfist.
//trunc dar adade mosbat mesle floor va dar adade manfi mesle ceil amal mikonad
v = 30.67
console.log(Math.floor(v) + " | " + Math.ceil(v) + " | " + Math.trunc(v))

v = -30.67
console.log(Math.floor(v) + " | " + Math.ceil(v) + " | " + Math.trunc(v))

