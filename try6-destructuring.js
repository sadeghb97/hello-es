//array destructuring
let arr = ['Sadegh', 'Bagherzadeh', 200]
let [fname, lname] = arr

console.log(fname)
console.log(lname)

let a, b, c
[a, b, c] = [10, 20]
console.log(a)
console.log(b)
console.log(c) //undefined khahad bud

//nemidanim arraye samte rast chand khane darad pas mitavanim meghdare defalt ham set konim
let [x, y = 10, z = 20] = [1000, 1001]
console.log(x, y, z)

//ignor kardane bazi khane ha
let [first, , third] = arr
console.log(first, third)

//estefade az rest
let [f, ...rest] = arr
console.log(f, rest)

//object destructuring -> estefade az acolad -> tartib mohem nist nam ha negasht mishavand
//name moteghayyer ba syntaxe : mitavanad az name property darune object motefavet bashad
//hamchun destructuring dar araye ha mitavan meghdare pishfarz set kard
let person = {
  pFname: "Reza",
  pLname: "Mohammadi",
  pAge: 25,
  pCity: "Mashahd"
}

let {pCity, pAge, pFname : ffname, pLname : llname, rate : score = 20} = person
console.log(pCity, pAge, ffname, llname, score)