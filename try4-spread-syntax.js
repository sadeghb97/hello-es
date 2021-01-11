function sum(a, b, c, d){
  console.log(a + b + c + d)
}
let arr = [1, 2, 3, 4]

sum(arr[0], arr[1], arr[2], arr[3])

//chejuri karo sade tar konim -> ghabl az es6 -> parametre aval be jaye this mineshinad
sum.apply(null, arr)

//ba spread syntax -> har ja biyayad araye ra be maghadire tak tak tabdil mikonad
//az an baraye pas dadane be tavabe, darune object ha, darune araye ha va ... mitavan estefade kard
sum(...arr)

let derArr = [1000, 2000, ...arr, 5000, ...arr, 7777]
console.log(derArr)

let object = {
  'fname': 'Sadegh',
  'lname': 'Bagherzadeh',
  'age': 24
}
console.log(object)

let derObj = {
  ...object,
  'city': 'bushehr'
}
console.log(derObj)