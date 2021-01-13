/* yek piade sazie digar az promise ha be in surat ast */

function getData(type){
  if(type == 1) return Promise.resolve("Fetched :)")
  else return Promise.reject("Rejected :(")
}

getData(1).then((value) => console.log("OK: " + value))
    .catch((err) => console.log("Error: " + err))


//************************** */
//race va all dar promise ha
let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Easy Done!")
  }, 2000)
})

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hard Done!")
  }, 3500)
})

//mesle yek promise anjam shode ast
let readyData = "Yuuuuup"

/*all: agar hata yeki kharab shavad faghat code rejectede haman be catch dade mishavad va tamam.
agar hame dorost ejra shavand tamame natije ha dar ghalebe yek araye be then dade mishavad */
/*race: agar be jaye all az race estefade shavad, har codam ke zudtar ejra shavad dataye an be then dade mishavad
 va tamam. agar hame reject shavand avalin promise ke reject shode ast dataye an be catch miravad*/
Promise.race([promise1, promise2, readyData]).then((v) => console.log(v))
    .catch((err) => console.log(err))