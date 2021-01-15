import Player from './try26-my-specific-module.mjs' // -> importe default -> bedune akolad
import { playerObject, sayHello } from './try26-my-specific-module.mjs' // -> importe mamuli
import FunnyLog from 'funny-log'

sayHello()
console.log(playerObject)
console.log(new Player("Leo Messi", 36))

let funnyLogger = new FunnyLog()
funnyLogger.iDontCare("I done care!")