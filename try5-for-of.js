let arr = [1, 2, 3, 4, 5]

let sum = 0
arr.forEach(v => {
  sum += v
})
console.log(sum)

//in syntax dar es6 ezafe shode ast va ba an hame iterable hara mitavan peymayesh kard
let sum2 = 0
for(const c of arr){
  sum2+= c
}
console.log(sum2)

let myName = "Sadegh"
for(const c of myName){
  console.log(c)
}
