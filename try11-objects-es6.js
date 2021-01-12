let person = {
  fname: "Sadegh",
  'lname': "Bagherzadeh",
  'person age': 16
}

console.log(person.fname)
console.log(person['fname'])
console.log(person.lname)
console.log(person['lname'])

console.log(person['person age']) // error nemide vali jaleb nist :(
//console.log(person.person age) --> error


//vijegihaye jadide object ha
//1: sade sazi vaghti name property va moteghayyere joloye an yeksan hast
//2: ghabeliate key haye dynamic

let fname = "Sadegh"
let lname = "Bagherzadeh"
let age = 24
let cityKey = 'city'

let student = {
  fname,
  lname,
  age,
  [cityKey]: "Bushehr"
}

console.log(student)