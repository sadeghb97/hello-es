/*symbol yek noe primitive jadid hast ke dar es6 ezafe shode ast
har tedad symboli ke besazim js in etminan ra midahad ke hichkodame anha ba ham yeksan nakhahand bud
zamane sakhte yek symbol be an description ham mitavan dad ke hich tasiri dar sakhte an nadarad.
hata do symbol ba descriptione yeksan ham ba ham motefavet khahand bud*/

let mySymbol = Symbol()
let anotherSymbol = Symbol()
console.log(mySymbol)
console.log(anotherSymbol)
console.log(mySymbol == anotherSymbol)

let s1 = Symbol("TheSymbol")
let s2 = Symbol("TheSymbol")
console.log(s1)
console.log(s2)
console.log(s1 == s2)


/* omde karborde an dar mavarede zir ast
1: baraye tarife savabet mesle enum ha
be jaye inke maghadire savabet ra 1, 2, 3 va ... bogozarim az symbol estefade mikonim
khubi an in ast ke jaei nemitavanim mostaghiman 1, 2, 3 va ... ra be jaye an estefade konim
ya pas dahim. pas code ha khana tar khahand shod va ehtemale bug kamtar mishavad*/

const FIRST_TYPE = Symbol()
const SECOND_TYPE = Symbol()

function foo(type){
  if(type == FIRST_TYPE){
    console.log("First Type Triggered!")
  }
  else if(type == SECOND_TYPE){
    console.log("Second Type Triggered!")
  }
  else console.log("Wrong Typeeee!")
}

foo(SECOND_TYPE)


/*2: dar ashia vaghti bekhahim yek key ezafe konim ke dar aksare mavaghe in key ha nadide gerefte shavand
masalan dar object.keys(), for in va ... nadide gerefte shavand*/
const ageSymbol = Symbol()
const helloSymbol = Symbol()

let person = {
  fname: "Sadegh",
  lname: "Bagherzadeh",
  [ageSymbol]: 76,
  [helloSymbol]: () => console.log("Hello Bro!")
}

console.log(person)
console.log(Object.keys(person))
console.log(Object.getOwnPropertyNames(person))
console.log(JSON.stringify(person))
console.log("Age: " + person[ageSymbol]) // -> OK
console.log("Age: " + person.ageSymbol) // -> Undefined
person[helloSymbol]()


/*3: tamame object ha be surate built in dar js yek seri vijhegi ra darand ke baraye piade kardane anha 
az symbol ha estefade shode ast. masalan vaghti do araye ra jam mizanim har kodam ebteda be noe
primitive tabdil khanad shod va sepas amale jam anjam mishavad. tamame in symbol ha ba estelahe
Well known symbols shenakhte mishavand va yekja dar clase Symbol be surate static dar dastres hastand
shoma ba dashtane symbole har kodam mitavanid an hara override konid*/

class AdvanceArray extends Array {
  [Symbol.toPrimitive](){
    return this[0]
  }
}

let ar = new AdvanceArray(1, 2, 3)
let sar = new AdvanceArray(11, 12, 13)
console.log(ar + sar)


//symbol haye eshteraki -> baraye zamani ke mikhahim chand symbole yeksan besazim
const citySymbol = Symbol.for('city')

let student = {
  fname: "Hamid Reza",
  lname: "Mahmudi",
}

function addCityToStudent(){
  const cs = Symbol.for('city')
  console.log(citySymbol == cs)
  student[cs] = "Abadan"
}

addCityToStudent(student)
console.log(student)
console.log("City: " + student[citySymbol])