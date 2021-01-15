import Player from './try26-my-specific-module.mjs' // -> importe default -> bedune akolad
import { playerObject, sayHello } from './try26-my-specific-module.mjs' // -> importe mamuli

sayHello()
console.log(playerObject)
console.log(new Player("Leo Messi", 36))