/* generator ha tavabe ei be khosus hastand. in tavabe chand meghdar ra dar chandin nobat
mitavanand bargardanand. manande tabeei mamulist ke dar nahayat yek iterator barmigardanad
deghat konid yek iterator barmigardanad na yek iterable
baraye tarife generator ghabl az name function bayad yek setare gozasht */
/* dar haghighat agar yek method bekhahad yek iterable bargardanad be joz raveshe mamul mitavan az yek
tabe e generator estefade kard*/

function* fetchNames(){
  console.log("fetching ...")
  yield 'Hamid'

  console.log("fetching ...")
  yield 'Masud'

  console.log("fetching ...")
  yield 'Mahmud'

  console.log("fetching ...")
  yield 'Karim'

  console.log("fetching ...")
  yield 'Alfred'
}

//khorujie in tabe dar nahayat yek iterator ast pas ba peymayesh az an estefade mikonim
let namesIt = fetchNames()
console.log(namesIt.next())
console.log(namesIt.next())
console.log(namesIt.next())
console.log("---------------")


//ye syntaxe dg
function* fetchNamesTwo(){
  let ar = ['Cristiano', 'LeoMessi', 'Aguero', 'Zlatan', 'Ramos']
  yield* ar
}

for(const name of fetchNamesTwo()){
  console.log(name)
}
console.log("---------------")


//piade kardane yek clase iterable ba estefade az syntaxe generator ha
//ham arze code haye file iterators
class Player {
  constructor(){
    this.fullname = "Zlatan"
    this.age = "38"
    this.goals = 400

    this.clubs = [
      'Juventus', 'Milan', 'Barcelona', 'PSG', "Manchester United"
    ]
  }

  *[Symbol.iterator](){
    yield* this.clubs
  }
}

let player = new Player()
for(const item of player){
  console.log(item)
}
console.log("---------------")


class AdvancedPlayer extends Player {
  constructor(){
    super()
  }

  *[Symbol.iterator](){
    yield this.fullname
    yield this.age
    yield this.goals
    yield this.clubs
  }
}

let ap = new AdvancedPlayer()
for(const v of ap){
  console.log(v)
}