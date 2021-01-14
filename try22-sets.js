/* set dar es6 ezafe shode ast. baraye negahdari yek majmue az dade haye unique be kar miravad
dade tekrari dar set zakhire nakhahad shod aksare method haei ke map darad ra set ham darad vali set
get nadarad chun key nadarad */

let set = new Set()
set.add(1)
set.add(2)
set.add(1)
set.add("Beep")
set.add({})

console.log(set)
console.log(set.size)
console.log('-------------')

set.delete({}) // -> in code hich vaght chizi ra hazf nemikonad -> hich etefaghi nemioftad
set.delete(1)
console.log(set)
console.log('-------------')

//baraye chek kardane inke yek dade dar set hast
console.log(set.has('Beep'))
console.log(set.has(2))
console.log(set.has(1))
console.log('-------------')

/* tamame ravesh haye peymayesh darune map hara dar set ha ham mitavanim estfefade mikonim.
chun set ha key nadarand hame ja key hara haman value ha gharar midahad */
for(const key of set.keys()){
  console.log(key)
}
console.log('-------------')

for(const key of set.entries()){
  console.log(key)
}
console.log('-------------')