//tarife tabe ba nam faghat be in surat ast
function sumFunction(a, b){
  return a+b
}

//agar bekhahim tabe ra darune moteghayyer berizim az arrow function ham mitavan estefade kard
let vsum = (a, b) => {
  return a + b
}

//agar function yek khatist mitavan bracket va return ra ham hazf kard
let vsum2 = (a, b) => a + b

//modele ye khati -> agar bekhahim object bargardanim -> dore an perantez migozarim
let getobj = () => ({name: "Sadegh", age: 24})

//agar tabe yek vorudi darad mitavan perantez ra ham hazf kard
let vpow = a => a * a

console.log(sumFunction(5, 15))
console.log(vsum(5, 15))
console.log(vsum2(5, 15))
console.log(getobj())
console.log(vpow(4))

let arr = [1, 2, 3, 4]
let m = arr.map(v => v+5)
console.log(m)



//tafavot ha
//----------------------
/*agar bekhahim az constructor function estefade konim va darune tabe az yek anonymus function estefade
konim. darune tabe nashenas dar halate mamul this mortabet be khode tabe nashenas ast
agar ba arrow function tarif konim this marbut be constructor function khahad bud*/
//Nokte: constructor function ra nemitavan ba arrow function tarif kard

function Person(){
  this.age = 15

  setInterval(() => {
    this.age++
    console.log("Age: " + this.age)
  }, 3000);


  //code balaro age intori benevisim age ha NaN chap mishe
  /*setInterval(function(){
    this.age++
    console.log("Age: " + this.age)
  }, 3000);*/
}
let p = new Person()


/*har tabe ke ba keyworde function tarif shavad darune an be moteghayyer haei be name 
arguments va prototype va ... dastresi darim dar hali ke dar arrow function ha tarif nashode and.*/

function myFunction(a, b){
  console.log("Arguments: " + arguments[0] + " - " + arguments[1])
}
myFunction(20, 40)
let vfunc = myFunction
console.log("Prototype: " + vfunc.prototype)


/*darune object tafavote functione mamuli ba arrow function barakse darune constructor function ast*/
let niceObject = {
  age: 24,
  func1: function(){
    return this.age + 1
  },
  func2: () => {
    return this.age + 2
  }
}

console.log("NF1: " + niceObject.func1())
console.log("NF2: " + niceObject.func2())