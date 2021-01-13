/*agar faghat yek vorudi pas dahim va an ham int bashad, constructor yek araye be tule an 
va ba item haye khali misazad na yek araye ba yek vorudie int*/

console.log(Array('Hesam'))
console.log(Array(4, 6))

let ar = Array(4)
console.log(ar)

// baraye rafe in moshkel mitavan az methode statice of dar clase array estefade kard
console.log(Array.of(20, 30))

ar = Array.of(5)
console.log(ar)

//sakhte yek araye jadid az ruye yek araye digar
let mainArray = Array.of(1, 2, 3, 4, 5, 6)
let derivedArray = Array.from(mainArray)
console.log(derivedArray)

derivedArray = Array.from(mainArray, value => value*2)
console.log(derivedArray)

/* method haye find va filter
find avalin item ra peyda mikoand va barmigardanad, filter yek subset barmigardanad
dar surate peyda nakardan find undefined va filter yek arraye khali barmigardanad*/

let fullArray = [
  {
    fname: "Hamid",
    age: 24
  },
  {
    fname: "Reza",
    age: 25
  },
  {
    fname: "Masud",
    age: 24
  },
  {
    fname: "Hamed",
    age: 26
  },
  {
    fname: "Vahid",
    age: 22
  }
]

let foundItem = fullArray.find(value => value.age == 24)
console.log(foundItem)

let subset = fullArray.filter(value => value.age == 24)
console.log(subset)


/*methode entries yek iterator az araye haye do khane ei barmigardanad ke be tartib index va value hastand.*/
let faEntries = fullArray.entries()

for(const entry of faEntries){
  console.log(entry)
}

//digar method ha: fill va copyWithin
//fill hame ya tedadi az khane haye arraye ra ba yek meghdar por mikonad -> araye asli taghir khahad kard
let anotherArray = [1, 2, 3, 4, 5, 6, 7, 8 , 9]
console.log(anotherArray.fill(6))

anotherArray = [1, 2, 3, 4, 5, 6, 7, 8 , 9]
console.log(anotherArray.fill(6, 4, 6))

//copyWithin -> khane index 4, 5, 6 ra dar khane 3 be bad migozarad
//be baghie khane ha kari nadarad
anotherArray = [1, 2, 3, 4, 5, 6, 7, 8 , 9]
console.log(anotherArray.copyWithin(3, 4, 7))