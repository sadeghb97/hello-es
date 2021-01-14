/* map dar es6 ezafe shode ast. baraye negahdari data be surate key value estefade mishavad
key har chizi mitavanad bashad. hata yek function ya yek object -> agar object ra implicit vared konim
digar nemitavanim be meghdar dastresi dashte bashim */

let map = new Map()
let myObj = {}
let myFunc = function(){}

//methode set baraye afzudane data jadid
map.set('key1', 25)
map.set(47, 1000)
map.set(myObj, 256)
map.set(myFunc, 789)

console.log(map)
console.log("--------------")

/*baraye daryafte value az raveshe mamuli ke dar object ha rayej ast nemitavan estefade kard.
baraye in kar faghat az get estefade mikonim*/

console.log(map.get('key1'))
console.log(map.get(47))
console.log(map.get(myObj))
console.log(map.get({})) // -> undefined bar migardanad
console.log(map.get(myFunc))
console.log(map.get(function(){})) // -> undefined bar migardanad
console.log("--------------")

console.log(map.size)

map.delete({}) // -> agar mojud nabashad hich etefaghi nemiofted -> in code hich vaght chizi hazf nemikonad
console.log(map)

map.delete(myObj)
console.log(map)
console.log("--------------")

//methode has
console.log(map.has(function(){}))
console.log(map.has(myFunc))
console.log("--------------")

let ar = [10, 11, 12, 13, 14]


console.log("ar forEach: ")
ar.forEach((value, key) => console.log(`${key}: ${value}`))
ar.forEach((value) => console.log(`${value}`))
console.log("--------------")


console.log("map forEach: ")
map.forEach((value, key) => console.log(`${key}: ${value}`))
map.forEach((value) => console.log(`${value}`))
console.log("--------------")


console.log("item of ar: ")
for(const item of ar){
  console.log(item)
}
console.log("--------------")


console.log("item of map: ")
for(const item of map){
  console.log(item)
}
console.log("--------------")


console.log("[key, value] of map: ")
for(const [key, value] of map){
  console.log(`${key} ---> ${value}`)
}
console.log("--------------")


console.log("map.keys(): ")
for(const item of map.keys()){
  console.log(item)
}
console.log("--------------")


console.log("map.values(): ")
for(const item of map.values()){
  console.log(item)
}
console.log("--------------")


console.log("map.entries(): ")
for(const item of map.entries()){
  console.log(item)
}
console.log("--------------")


console.log("map.clear(): ")
map.clear()
console.log(map)
console.log("--------------")


//in juri ham mishe map sakht
let builder = [['hezar', 1000], ['hezar1', 1001], ['hezar2', 1002], ['hezar3', 1003], ['hezar4', 1004]]
map = new Map(builder)
console.log(map)
console.log("--------------")