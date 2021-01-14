/* WeakMap va WeakSet noskhe haye mahdud shodeye map va set hastand
WeakMap: aval inke iterable nistand va be onvane key faghat mitavan az object ha estefade kard
hamchenin emkane daryafte key ha va daryafte size ham vojud nadarad. faghat 4 methdode 
set, get, has va delete dar an mojud ast

WeakSet: iterable nist. be onvane value faghat mitavan az object estefade kard
emkane daryafte size vojud nadarad. faghat se methode add, has va delete darad

dar avaz estefade az WeakMap va WeakSet behine tar ast
dar in do agar etesali be key vojud nadashte bashad garbage collector key va value ra hazf khahad kard 
masalan agar key ra implicit vared konim ye variable bashad va badan variable ra pak konim 
hafeze an khodkar azad khahad shod */

let wm = new WeakMap()
let myObj = {fname: "Sadegh"}
wm.set({}, 24) // -> garbage collector hazfesh mikonad
wm.set({title: "Beep"}, 50) // -> garbage collector hazfesh mikonad
wm.set(myObj, "BaLe")

console.log(wm)
console.log(wm.get(myObj))
console.log('--------------')


let ws = new WeakSet()
ws.add({}) // -> garbage collector hazfesh mikone
ws.add({car: "Peykan"}) // -> garbage collector hazfesh mikone
ws.add(myObj)

console.log(ws)
console.log(ws.has({})) // -> hamishe false ast
console.log(ws.has(myObj))
console.log('--------------')
