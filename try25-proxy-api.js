/* proxy haele ma va object haye digar gharar migirad va mitavanad raftare pishfarze anha ra 
taghir dahad */

class Game {
  constructor(title, year){
    this.title = title
    this.year = year
  }
}

let game = new Game("Bloodborne", 2013)
let handler = {
  get(obj, property){
    return property in obj ? obj[property] : "Whooooops!"
  },
  set(obj, property, value){
    if(property == 'year'){
      if(typeof value == 'number'){
        obj[property] = value
      }
      else console.log("Game year must be a number!")
    }
  },
  has(obj, property){
    console.log("Checking exist of property!")
    return Reflect.has(obj, property)
  }
}

let gameProxy = new Proxy(game, handler)
console.log("Metacritic: " + gameProxy.metacritic)

gameProxy.year = "Sale 2015"
console.log(game)
gameProxy.year = 2015
console.log(game)

if('year' in gameProxy){
  console.log("Game release year: " + gameProxy.year)
}
console.log('------------')


/* proxy beine ma va function ha */
function sumFunction(a, b){
  return a + b
}

let sumHandler = {
  apply(target, tishArg, args){
    console.log(`Args: ${args}`)
    return target(...args) * 3
  }
}

let sumProxy = new Proxy(sumFunction, sumHandler)
console.log("Direct Result: " + sumFunction(7, 8))
console.log("Proxy Result: " + sumProxy(7, 8))
console.log('------------')


/* mitavan yek proxy ra laghv kard be in surat digar nemitavan az an estefade kard */
let sp = Proxy.revocable(sumFunction, sumHandler)
console.log("Direct Result: " + sumFunction(7, 8))
console.log("Proxy Result: " + sp.proxy(7, 8))
sp.revoke()

//khate bad error throw khahad kard 
//console.log("Proxy Result: " + sp.proxy(7, 8))
console.log('------------')

console.log("Another Direct Result: " + sumFunction(7, 8))
console.log('------------')
