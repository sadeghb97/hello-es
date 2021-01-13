/*ba methode static assign dar clase object mitavan do object ra ba ham edgham kard
natije ham tavasote method bargardande mishavad va ham darune vorudie aval emal mishavad
pas in method vorudie avval ra taghir midahad va haman ra barmigardanad
agar tedadi az method va property ha dar har do object yeksan bashad property haye objecte dovom
replace khahand shod*/

let o1 = {
  fname: "Sadegh",
  lname: "Bagherzadeh"
}

let o2 = {
  age: 24,
  city: "Bushehr"
}

Object.assign(o1, o2)
console.log(o1)
console.log(o2)

class FirstClass {
  constructor(){
    this.title = "Shahname"
    this.author = "Ferdosi"
  }
}

class SecondClass {
  constructor(){
    this.title = "Shahnaaaaame"
    this.pages = 1000
  }
}

let fo = new FirstClass()
let so = new SecondClass()
Object.assign(fo, so)
console.log(fo)
console.log(so)


/*set kardane prototype baraye yek object.
parototype mesle pedare object hast. agar yek field darune yek object nabashad 
be pedar morajee mishavad va in ravand ta akhar edame miyabad */
let club = {
  teamName: "Juventus",
  leauge: 'Serie A'
}

let player = {
  fullname: "Cristiano",
  age: 36
}

Object.setPrototypeOf(player, club)

console.log("PlayerName: " + player.fullname)
console.log("PlayerAge: " + player.age)
console.log("ClubName: " + player.teamName)
console.log("ClubLeague: " + player.leauge)


