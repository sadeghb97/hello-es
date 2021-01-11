//default param ghable es6
function sum(a, b){
  var x = a || 10
  var y = b || 20
  /*var x = typeof a == "undefined" ? 10 : a
  var y = typeof b == "undefined" ? 10 : b*/

  return x + y
}
console.log(sum())

//default params va rest ra ham dar functione mamuli va ham darune arrow function mitavan estefade kard
//bad az es6
function sum2(a=10, b=20){
  return a+b
}
console.log(sum2())

//rest -> yek araye vagheei hast va mitavan ruye an map va ... ra seda zad. param haye nam dar darune an nist
/*arguments faghat baraye function mamuli hast va yek araye vagheei nist garche be forme araye mitavan be
khane haye an dastresi dasht. hamchenin parametr haye namdar ham darune an khahad bud*/ 
let vfunc = function(a, b, ...r){
  console.log("***************")
  console.log("TestArray: " + [0, 1, 2])
  console.log("Arguments: " + arguments)
  console.log("a: " + a)
  console.log("b: " + b)
  console.log("rest: " + r)

  let m = r.map(v => v + 10)
  console.log("Mapped Rest: " + m)
  console.log("***************")
}
vfunc(1, 2, 100, 200, 300)
vfunc(4, 5)