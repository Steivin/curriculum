/* 4 fORMAS DE IMPRESION */
//alert("HOLA MUNDO");
console.log("HOLA DESDE LA CONSOLA");
//document.write("HOLA DESDE LA INTERFAZ");

// SWETTALERT
//Swal.fire("HOLA DESDE SWEETALERT");
//Swal.fire({
//    title: "The Internet?",
//    text: "That thing is still around?",
//   icon: "error"
//  }); 

// VARIABLES Y TIPOS DE DATOS
const pi = 3.14;  //decimal
const pul = 2.54;
var name = "Steivin Cardenas"; //string
let edad = 23;  //entero
var ver = true; //boolean
let fal = false; //boolean

//OPERADORES BÁSICOS
var suma = 5 + 2;
console.log(suma);
var var_uno = 10;
var var_dos = 5;
console.log(var_uno - var_dos);
console.log(var_uno * var_dos);
console.log(var_uno / var_dos);
console.log(var_uno % var_dos);

// OPERADORES DE COMPARACIÓN 
// = Asignaciòn
// == comparacion (valor)
// === estrictamente comparado (valor y el tipo de dato)
// > / >= / <= / <>


console.log("Mi edad es: " + edad);

function load_page() {
    Swal.fire({
        imageUrl: "https://ufpso.edu.co/administradoru15/ventana/banner%20Admitidos_Mesa%20de%20trabajo%201%20(3)%20(1).jpg",
        showConfirmButton: false,
        timer: 2000
    });

    document.getElementById("text").innerText = ("el array a calcular es: "+array_num);
}

function send_form() {
    let name = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    if (name.length == 0 || last_name.length == 0) {
        Swal.fire({
            title: "The Internet?",
            text: "That thing is still around?",
            icon: "error"
        });

        if (name.length == 0) {
            document.getElementById("name").style.border = "2p solid red"
        }
        else {
            document.getElementById("name").style.border = "2p solid green"
        }
        if (name.length == 0) {
            document.getElementById("last_name").style.border = "2p solid red"
        }
        else {
            document.getElementById("last_name").style.border = "2p solid green"
        }
    }
    else{
        document.getElementById("print").innerText = "Su nombre es: " + name +" "+ last_name;
    }
}   

//  ARRAYS
var array_semana = ["Lunes", "Martes", "Miesrcoles", "Jueves", "Viernes", "Sabado", "Domingo"];
var array_gral = [1,2,2.5,"abc", "Soy Steivin"];
var array_num = [1,2,3,4,5,6,7,8,9];

var array_multi= [
    {name:"Steivin", age:23,color:"Azul"},
    {name:"Wilder", age:32,color:"Rojo"},
    {name:"Rosa", age:25,color:"Rosa"},
    {name:"Camila", age:2,color:"Verde"},

];

var json_ejm = {
    name: "Steivin",
    lastname: "Cardenas",
    phone: "3114552823",
    email: "steivin2000@gmail.com"

}

console.log(array_semana);
console.log(array_gral);
console.log(array_num);
console.log(array_multi);
console.log(json_ejm);

function action() {
    // alert(array_num)
    //swal.fire(""+array_num);
    console.log(array_num);
    var result = 0;
    for(let i=0;i<array_num.length;i++){
        result = result+array_num[i]
    }
    document.getElementById("result").innerHTML = "<strong>El resultado es : </strong";
    document.getElementById("result").style.color = "green";
    // CON UN FOR
    var total = 0;
    for(var j=0;j<array_multi.length;j++){
        total = array_multi[j].age + total;
    }
    alert(total);

    //CON UN WHILE
    var total = 0;
    var w = 0;
    while(w<array_multi.length){
        total_dos = array_multi[w].age
    }
}