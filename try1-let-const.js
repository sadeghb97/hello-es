/*behtar ast kollan az var baraye tarife moteghayyer estefade nashavad ta az bug haye ehtemali
jologiri shavad*/
//bejaye an az let va const estefade mikonim
/*var mesle moteghayyer haye php ast va hata darune yek block ham ke tarif shavad birune block
be an dastresi khahim dasht. vali let va const faghat darune block tarif shode ast*/
//agar moteghayyer gharar nist taghir konad az let estefade mikonim

function func() {
  for(var x=0; 3>x; x++){
    console.log(x)
  }

  //agar az let estefade mikardim khate bad x undefined mishod
  console.log("F: " + x)
  console.log("-----------")
}

function func2(){
  var y = 15
  if(true){
    var y = 25
    console.log(y)
  }

  console.log(y)
  console.log("-----------")
}

function func3(){
  let y = 15
  if(true){
    let y = 25
    console.log(y)
  }

  console.log(y)
  console.log("-----------")
}

func()
func2()
func3()