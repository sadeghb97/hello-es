/* felan dar class haye js nemitavanim sathe dastresi tarif konim
pas setter ha va getter ha chian? setter ha va getter ha method haei hastan ke birun az class ha
baraye estefade az anha be shekle property ba anha raftar mikonim */

class AdvanceArray extends Array {
  get middle(){
    if(this.length < 1) return 'undefined'

    return this[Math.floor(this.length / 2)]
  }

  set start(value){
    this.unshift(value)
  }
}

let advArray = new AdvanceArray("Karim", "Majid", "Behruz")
console.log(advArray)
console.log(advArray.middle)
advArray.start = "Farzad"
console.log(advArray)