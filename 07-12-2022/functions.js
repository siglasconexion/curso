function saludo(a,b){
    return a+b
 }
 //var result = saludo(2,2349)
 //console.log(result)
 
 
 var saludo2=function(a,b){
    return a*b
 }
 //saludo2(2,3)
 
 
 //EC6, ARROW
 
 var saludo3 = (a,b) => {
   return a/b
 }
 //saludo3(5,2)
 
 var saludo4 = (a,b) => a-b
 //saludo4(10,5)
 
 //saludo(1,4)
 //saludo2(1,4)
 //saludo3(1,4)
 //saludo4(1,4)
 
 
 var arrayNumeros=[10,50,70,90,0]
 var arrayJson = [{
     saludo:"Hola"
 },
 {
   saludo:"Xie xie"
 }]
 
 for( var obj of arrayJson){
   //console.log(obj.saludo)
 }
 
 for (i=0;i<=5;i++){
 //  console.log(i)
 }
 
 for (var numero of arrayNumeros){
   //console.log(numero)
 }
 
 var arrayNumeros=[10,50,70,90,0]
 for (var numero of arrayNumeros){
   //console.log(numero)
 }
 
 arrayNumeros.forEach(numero=>{
   //console.log(numero)
 })
 
 
 //arrayNumeros.map(numero=>numero)
 arrayNumeros.filter(numero=>numero>50)
 arrayNumeros.filter(numero=>numero>50).some(numero=>numero>=90)
 arrayNumeros.some((numero)=>numero>180)
 


 /// funciones del dia 14
 var data = [
    {
      "id_cliente": "1",
      "id_estatus_cliente": "1",
      "id_empresa_cliente": "2",
      "codigo_cliente": "LETRAS001111",
      "nombre_cliente": "PANADERIA Y PASTELERIA EL REMANSO, C.A.",
      "rif_cliente": "J-11129826-9",
      "telefono_cliente": "0424-232342",
      "direccion_cliente": "URB. EL REMANZO C.C. EL REMANZO FRENTE A EUROMAX",
      "propietario_cliente": "EL CHINO QUE ERA DEL PIN PIN",
      "responsable_cliente": "EL MISMO CHINO DEL PIN PIN ",
      "telefono_propietario": "4456",
      "telefono_responsable": "6544"
    },{
       "id_cliente": "2",
    }
  ]
  
  var forr = function(element){
     console.log(element.id_cliente)
  }
  
  var forr2 = (element) => {
     console.log(element.id_cliente)
  }
  //data.forEach(element => console.log(element.id_cliente))
  
  // var filtrar = function(element){
  //   return element.id_cliente == "1"
  // }
  // var filtrar = element => element.id_cliente == "1"
  
  var resultado = data.filter( element => element.id_cliente == "1" )
  console.log(resultado)



  -------------------------------------------
  ar data = {
    id: "1",
    saludo: "Hola",
  	nombre: "Fran"
  }

//spread
//console.log( { ...data })
//ESC6
// {
// var algo = 'esto'
// console.log(algo)

// }
// algo = "Hola"
// {
//   let a = "2"
//   console.log(a)
// }
// const b = "4"

// variables primitivas
// var a1 = 1
// var b1 = true
// var c1 = "Hola"
// variables no primitivas
var a2 = { saludo: "Hola" }
var b2 = [1,2,3,4]

// var r = 0
// a = r
// b1 = r
// c1 = r

var r2 = { ...a2 }
console.log("r2", r2)
r2.saludo= '--------'
console.log("r2", r2)
console.log("a2",a2)
--------------------------
var data = [{
    id: 1,
    saludo: "Hola",
  	nombre: "Fran"
  },{
    id: 2,
    saludo: "Hello",
  	nombre: "Jorge"
  }]

data.reduce( (acumulator, element) => {
  acumulator += element.id
  return acumulator
},0)