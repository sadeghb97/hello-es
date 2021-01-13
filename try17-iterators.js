/* iterator ha object haei hastand ke ghabeliate peymayesh darand
dar har objecte ghabele peymayesh symbole iterator piade shode ast */

class Player {
  constructor(){
    this.fullname = "Zlatan"
    this.age = "38"
    this.goals = 400

    this.clubs = [
      'Juventus', 'Milan', 'Barcelona', 'PSG', "Manchester United"
    ]
  }

  [Symbol.iterator](){
    return this.clubs[Symbol.iterator]()
  }
}

let player = new Player()
for(const v of player){
  console.log(v)
}
console.log("-------------")

let pIterator = player[Symbol.iterator]()
console.log(pIterator.next())
console.log(pIterator.next())
console.log(pIterator.next())
console.log("-------------")


//Another Example
class AdvancedPlayer extends Player {
  constructor(){
    super()
  }

  [Symbol.iterator](){
    let size = 4
    let index = 0

    return {
      next: () => {
        let value = index == 0 ? this.fullname : 
            (index == 1 ? this.age : (index == 2 ? this.goals : this.clubs))

        let out = {
          done: index >= size,
          value 
        }

        index++
        return out
      }
    }
  }
}

let ap = new AdvancedPlayer()
for(const v of ap){
  console.log(v)
}