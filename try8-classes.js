function Person(fname, lname, age){
  this.fname = fname
  this.lname = lname
  this.age = age
  this.sayHello = function(){
    console.log("Person: Hello!")
  }
}

let person = new Person('Sadegh', 'Bagherzadeh', 26)
console.log(person)
person.sayHello()
console.log(person.__proto__)
console.log(person.prototype) // -> undefined
console.log("-----------------")

//bad az es6 keyworde class ezafe shode ast. tafavote khasi ba raveshe constructor function nadarad.
//faghat az yek syntaxe jadid estefade mishavad

class Student {
  constructor(fname, lname, age){
    this.fname = fname
    this.lname = lname
    this.age = age
  }

  sayHello(){
    console.log("Student: Hello!")
  }

  play(){
    console.log("Student: Play => " + this.fname)
  }
}

let student = new Student("Hamid", "Masumi", 24)
console.log(student)
student.sayHello()
student.play()
console.log(student.__proto__)
console.log(student.prototype) // -> undefined
console.log("-----------------")

//ersbari kardan
class Collegian extends Student {
  constructor(fname, lname, age, grade){
    super(fname, lname, age)
    this.grade = grade
  }

  play(){
    super.play() // play class pedar ra ham ejra mikonim
    console.log("Collegian: Play => " + this.grade)
  }
}

let collegian = new Collegian("Reza", "Sadeghi", 30, 100)
console.log(collegian)
collegian.sayHello()
collegian.play()
console.log(collegian.__proto__)
console.log(collegian.prototype) // -> undefined
console.log("-----------------")


//ersbari az class haye dakhelie js
let farr = new Array('Hamid', 'Vahid', 'Saeid')
console.log(farr)

class AdvanceArray extends Array {
  advancePrint(){
    let buff = ""
    this.forEach(value => buff += (value + " ... "))
    console.log(buff)
  }
}
let advArray = new AdvanceArray('Hamid', 'Vahid', 'Saeid')
console.log(advArray)
advArray.advancePrint()