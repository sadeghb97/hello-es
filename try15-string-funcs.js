/* tavabe includes, startsWith, endsWith baraye moshakhas kardane inke yek reshte 
shamele yek zir reshte hast ya na. */

let s = "JavaScript Tutorials!"
console.log(s.includes('Script'))
console.log(s.includes('Script', 2))
console.log(s.includes('Script', 6))
console.log("---------------")

console.log(s.startsWith('Java'))
console.log(s.startsWith('Tutorials', 11))
console.log(s.startsWith('Tutorials', 12))
console.log("---------------")

//pos dar endsWith barakse do taye digar noghte payan ast
console.log(s.endsWith('!'))
console.log(s.endsWith('!', 10))
console.log(s.endsWith('!', 21))
