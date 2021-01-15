class Player {
  constructor(fullname, age){
    this.fullname = fullname
    this.age = age
  }
}

let playerObject = new Player("Ronaldo", 37)

function sayHello(){
  console.log("Hello from specific module :)")
}

//player ra birun be surate default import mikonim
export default Player;

//inaro be surate mamuli mishe az birun import konim
export {
  playerObject, sayHello
};