/* dar node js mitavanim be rahati modular code benevisim vali dar file haye html baraye importe file
haye js nemitavanim az code modular estefade konim. file haye import shode dar morurgar bayad yek tike
bashand va dar an ha nemitavan az import estefade kard.

baraye rafe in moshkel mitavan az webpack estefade kard. dar tanzimate webpack ma migueim file
marbut ne noghte shoru kojast va an file ra modular minevisim va sepas webpack baraye ma an ra dar ghalebe
yek file nahaei tabdil mikonad. sepas ma an file ra mitavanim dar safhe webeman import konim

webpack in kar ra mitavanad dar mode haye production va development anjam dahad. dar production code ha
dar file nahaei be shedat compress shode and va hich fasele khali ei beine an nist baraye inke 
kam hajm tar bashad. ama dar mode development code khanaei bishtari darad
hamchenin ba optione --watch ba har taghiri file nahaei beruz mishavad */


/* nahve import kardane class ha, function ha, moteghayyer ha va ... az baghie file ha : */

import Player from './try26-my-specific-module.js' // -> importe default -> bedune akolad
import { playerObject, sayHello } from './try26-my-specific-module.js' // -> importe mamuli

sayHello()
console.log(playerObject)
console.log(new Player("Leo Messi", 36))

/* dar masire proje dar terminal mizanim
npm run build -> sepas file bundle.js dar pushe build sakhte khahad shod
in file dar try26-modular-index.html import shode ast.
ba baz kardane an file html in file js be dorosti ejra khahad shod */

/* in file ra ba node nemitavanim ejra konim. ba ejraye an error khahim gereft
baraye rafe error bayad type: "module" ra dar package.json ghabl az script ezafe konim
ba in kar hame file haye js be onvane module haye es6 compile khahand shod
in kar sabab mishavad ke webpack be dorosti amal nakonad. pas agar niaz be ejra tavasote node
darim in property ra be package.json ezafe mikonim agar mikhahim in file ra dar morurgar ejra konim
bayad type: "module" ra hazf konim */

/* yek copy az in file va module import shode dar in file ba pasvande mjs ijad shode ast
vaghti serahatan pasvand ra mjs migozarim node an ra be onvane module es6 compile khahad kard */ 

