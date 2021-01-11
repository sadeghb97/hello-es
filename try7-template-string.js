//chegune reshteye chandkhati tarif konim va darune an az moteghayyer ha estefade konim?
//estefade az backtick ha bejaye single va duble qoute

let person = {
  fname: "Hamid",
  lname: "Mohammadi",
  age: 25
}

let message = `fname-> ${person.fname}
lname-> ${person.lname}
age-> ${person.age}
test-> \${Beep}`

console.log(message)
