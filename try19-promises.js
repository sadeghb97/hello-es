/* ghabl az es6 baraye ejraye async bayad az callback estefade mikardim. niaz be yek callback baraye
anjame kar va yek callback baraye zamane error va niaz be callback haye tudartu baese padide
jahaname callback ha mishod. dar es6 mitavan az promise ha estefade kard va az jahaname callback ha
farar kard*/

const axios = require('axios');

function downloadPage(url){
  console.log("Waiting for answer ...")
  return new Promise((resolve, reject) => {
    axios.get(url)
    .then(response => {
      if('results' in response.data)
        resolve(response.data.results)
      else reject("Bad Contents!") 
    })
    .catch(err => {
        reject(err)
    })
  })
}

function extractFirstGame(results){
  console.log("Extracting First Game ...")
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!results instanceof Array || results.length < 1) reject("Bad Contents!")
      resolve(results[0])
    }, 3000)
  })
}

function extractProperties(game){
  console.log("Extracting Properties ...")
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(!'name' in game || !'released' in game || !'metacritic' in game) reject("Bad Properties")
      resolve({
        title: game['name'],
        released: game['released'],
        metacritic: game['metacritic']
      })
    }, 3000)
  })
}


/*downloadpage yek promise barmigardand. har gah page daryaft shavad results be methode extractFirstGame 
dade mishavad. in tabe niz yek promise barmigardanad va har zaman kar anjam shavad tabe darune thene badi
an ra handel khahad kard ta be akherin then beresim. agar darin masir yeki reject shavad
catch anjam shode va prose be payan miresad. 
be in surat ba estefade az zanjire promise ha az callback haye tudartu khabari nist*/

/*dar es 7 va 8 async va await ezafe shode ast. ba komake an mitavanim darune yek methode async bazi promise
hara dar surate lozum be surate gheire async ejra konim */

function requestBestGame(){
  downloadPage(`https://api.rawg.io/api/games?dates=2020-01-01,2021-12-31&ordering=-rating`)
    .then(extractFirstGame)
    .then(extractProperties)
    .then((game) => console.log(game))
    .catch((error) => console.log(error))
}

requestBestGame()