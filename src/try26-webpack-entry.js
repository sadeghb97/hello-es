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


/* dar kenare webpack hamchenin mitavanim az abzare babel estefade konim. ba in abzar 
code haye javascripti ke dar nahayat dar yek file bundle mishavad be gune ei ijad mishavad
ke ghabeliate ejra dar morurgar haye ghadimi ke masalan az es6 poshtibani nemikonand 
ra ham dashte bashed. be in surat ehtemalan hajme file bundle nahaei afzayeshe 
ghabele molaheze ei khahad dasht 
baraye estefade az an mitavan be linke zir raft
https://babeljs.io/setup

be tore kolli bayad chand package nasb konim va yek file babel.config.js dar kenare 
webpack-config.js be vojud biavarim va be file confige webpack tanzimati ra ezafe konim.
*/


/* nahve import kardane class ha, function ha, moteghayyer ha va ... az baghie file ha : */

import Player from './try26-my-specific-module.js' // -> importe default -> bedune akolad
import { playerObject, sayHello } from './try26-my-specific-module.js' // -> importe mamuli
import FunnyLog from 'funny-log'

sayHello()
console.log(playerObject)
console.log(new Player("Leo Messi", 36))

let funnyLogger = new FunnyLog()
funnyLogger.iDontCare("I done care!")

/* dar masire proje dar terminal mizanim
npm run build -> sepas file bundle.js dar pushe build sakhte khahad shod
in file dar try26-modular-index.html import shode ast.
ba baz kardane an file html in file js be dorosti ejra khahad shod */

/* in file ra ba node nemitavanim ejra konim. ba ejraye an error khahim gereft
baraye rafe error bayad type: "module" ra dar package.json ghabl az script ezafe konim
ba in kar hame file haye js be onvane module haye es6 compile khahand shod
in kar be tore ajibi sabab mishavad ke webpack be dorosti amal nakonad.
pas agar niaz be ejra tavasote nodedarim in property ra be package.json ezafe mikonim agar 
mikhahim in file ra dar morurgar ejra konim bayad type: "module" ra hazf konim */

/* yek copy az in file va module import shode dar in file ba pasvande mjs ijad shode ast
vaghti serahatan pasvand ra mjs migozarim node an ra be onvane module es6 compile khahad kard
pas an hara mitavanim ba node ham ejra konim */ 

/* taghriban tamame tafavot beine cjs va mjs az dide node dar nahve import va export kardane
 file ha ya module hast */