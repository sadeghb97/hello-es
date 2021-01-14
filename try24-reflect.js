/* Starting with ECMAScript 2015, JavaScript gains support for the Proxy and Reflect objects 
allowing you to intercept and define custom behavior for fundamental language 
operations (e.g. property lookup, assignment, enumeration, function invocation, etc). 
With the help of these two objects you are able to program at the meta level of JavaScript. */

/* meta programming dar js: ravesh haye mokhtalefi ke barname az joziate khodesh mitune etela peyda 
kone va hamchenin mitune khodesh ro dastkari kone va kare jadidi ro anjam bede ya kare khasi 
ro be surate digari anjam bede */

/* Reflect Api: yek objecte sarasarie jadid ke method haye karbordie ziadi ro baraye bazresie code ha 
dar ekhtiare ma migozarad. shamele tedadi az method haye dakhelie js hast ke aknum be surate yekja 
va motemarkez gharar dade shode ast.

ghabl az es 6 keyword haei manande typeof, instanceof, delete va ... vojud dashtand ke kar haye marbut 
be bazresie code ra anjam midadand. ya baraye bazresie ashia dar clase object method haye 
keys va defineproperty va ... vojud dasht. aknum be hame in dast az method ha dar clase Reflect 
be surat motemarkez dastresi khahim dasht*/


/*ghablan goftim ke be do ravesh mitavan key ra baraye object ha vared kard ke ham arze hamand
albate agar key ra reshte ei vared konim va masalan dar an fasele bashad faghat ba [] mitavanim be an
dastresi dashte bashim */
let player = {
  fname: "Vahid",
  lname: "Amiri"
}

player.age = 14
console.log(player)

player['age'] = 32
console.log(player)
console.log('--------------')


/* barkhi method haye clase reflect */
//defineProperty

/*ba in ravesh yek juraei property jadid makhfi hast va faghat mostaghiman mitunim 
behesh dastresi dashte bashim */

Reflect.defineProperty(player, 'id', {
  value: 7452
})
console.log(player.id)
player.id = 39 // -> ba in ravesh nemitavan an ra taghir dad
console.log(player.id)
console.log(player)
console.log('--------------')

/* baraye inke property jadid mesle property haye ghadimi makhfi nabashad bayad 
enumerable ra true konim. */
Reflect.defineProperty(player, 'club', {
  value: 'Perspolis',
  enumerable: true, // -> baraye inke property makhfi nashavad
  configurable: true, // -> baraye inke betavan property ra badan hazf kard
  writable: true // -> baraye inke meghdare an ra badan betavan taghir dad
})
console.log(player.club)
console.log(player) // -> agar enumerable ra true nemikardim bashgah chap nemishod
console.log('--------------')

console.log("Change Club: ")
player.club = "Sepahan" // -> agar writable ra true nemikardim in khat meghdar ra taghir nemidad
console.log(player)
console.log('--------------')


//deleteProperty
Reflect.deleteProperty(player, 'fname')
Reflect.deleteProperty(player, 'club') // -> agar configurable ra true nemikardim in khat propert ra hazf nemikard
console.log('id: ' + player.id)
console.log(player)
console.log('--------------')


/* set kardane yek property be surate dynamic. baraye araye ha ham mitavan az an estefade kard*/
/* add kardane property be in ravesh mesle halate mamuli ast va ghabeliate tanzimat nadarad */
console.log("Set Goals Dynamic")
console.log(Reflect.set(player, 'goals', 60)) // -> agar ba movafaghiat set shavad true barmigardanad
console.log(player)
console.log('--------------')


/* daryafte yek property be surate dynamic. baraye araye ha ham mitavan az an estefade kard*/
console.log("Get lname Dynamic")
console.log("lname: " + Reflect.get(player, 'lname'))
console.log('--------------')

/* chek kardane inke yek object yek property ra darad ya na */
console.log(Reflect.has(player, 'lname'))
console.log(Reflect.has(player, 'foot'))
console.log('--------------')


/* sakhte object ba estefade az Reflect be jaye estefade az new */
class Car {
  constructor(name, year){
    this.name = name
    this.year = year
  }
}

let car = Reflect.construct(Car, ["Peykan", 1999])
console.log(car)
console.log('--------------')


/* methode apply baraye tavabe -> set kardane this baraye yek tabe va ... */
let user = {
  username: "sadeghb97",
  age: 24
}

function sayHello(pname){
  console.log(`${pname}: Hello ${this.username}. You are ${this.age}`)
}

sayHello("Reza") // -> maghadir undefined khahand bud
Reflect.apply(sayHello, user, ["Reza"])
console.log('--------------')


/* taghire prototype object */
let ph = {
  phone: "09111111111"
}

Reflect.setPrototypeOf(user, ph)
console.log(user.phone)
console.log(user)
console.log('--------------')


// daryafte key haye yek object
console.log('User Keys: ')
console.log(Reflect.ownKeys(user))
console.log('--------------')


/* jologiri az taghire yek object */
console.log("Jologiri az taghire yek object")
let game = {
  title: "The Last Of Us Remastered",
  metacritic: 90
}

game.year = 2013
console.log(game)

Reflect.preventExtensions(game)
console.log("Is Extensible: " + Reflect.isExtensible(game))

game.metacritic = 94 // -> property haye ghabli ra mitavan taghir dad
game.creator = "Noughty Dog" // -> error nemidahad ama property jadid ezafe nemishavad
console.log(game)
console.log('--------------')
