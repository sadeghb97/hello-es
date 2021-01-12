/*keyworde this dar methode static marbut be kolliate class va dar methode mamuli marbut be ajzaye
object ast. be chape this dar method haye static va gheyre static deghat konid */

class Person {
  constructor(fname, lname, age){
    this.fname = fname
    this.lname = lname
    this.age = age
  }

  static hello(){
    console.log(this)
    console.log("People say hello!")
    console.log("------------")
  }

  static play(){
    this.hello()
    console.log("People play!")
    console.log("-------------")
  }

  hi(){
    console.log(this)
    console.log(this.fname + " say hi!")
    console.log("-------------")
  }
}

Person.hello()
Person.play()

let person = new Person("Sadegh", "Bagherzadeh", 24)
person.hi()