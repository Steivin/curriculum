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

// VARIABLES Y TIPO DE DATOS
const pi = 3.14; // decimal
var name = "Wilder Duarte"; // string
let edad = 32; // entero
let edad_string = "32"; // string
var bool = true; // false booleanos

//OPERADORES BÁSICOS + - / * %
var suma = 5 - 2;
console.log(suma);
console.log(edad_string + suma);
var one = 10;
var two = 20;
console.log(one + two);
console.log(one - two);
console.log(one * two);
console.log(one / two);
console.log(one % two);

//OPERADORES DE COMPARACIÓN
// < > >= <= <> 
//= Asignación
//== Comparación 5=="5"
//=== Comparación 5=="5"
//==== es una mentira del profesor
//OPERADORES LÓGICOS
// AND && OR ||

console.log("Mi nombre " + name + " tiene como edad: " + edad);

function load_page() {
    Swal.fire({
        imageUrl: "../img/foto.png",
        imageAlt: "A tall image",
        showConfirmButton: false,
        timer: 2000
    });
    document.getElementById("valores").value = array_ejm;
    document.getElementById("name_search").value = nombre_form;

    let hour_system = new Date();
    let dia = hour_system.getDay();
    console.log(hour_system.getDate());
    console.log(hour_system.getDay());
    console.log(hour_system.getFullYear());
    console.log(hour_system.getHours());
    console.log(hour_system.getMilliseconds());
    console.log(hour_system.getMinutes());
    console.log(hour_system.getMonth());
    console.log(hour_system.getSeconds());
    console.log(hour_system.getTime());

    let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    for(let i = 0; i < dias.length; i++){
        console.log(dias[dia]);
        
    }

    console.log("hoy es: " + dias[dia]);
    let dia_mes = hour_system.getMonth() + 1;
    console.log(hour_system.getDate()+"/"+dia_mes+"/"+hour_system.getFullYear());
    document.getElementById("hour_system").value = hour_system;
}

function send_form() {
    let name = document.getElementById("name").value;
    let last_name = document.getElementById("last_name").value;
    let pass_one = document.getElementById("pass_one").value;
    let pass_two = document.getElementById("pass_two").value;
    if (name.length == 0 || last_name.length == 0 || pass_one.length == 0 || pass_two.length == 0) {
        Swal.fire({
            title: "Campos Vacíos",
            text: "Alguno de los campos se encuentra vacío",
            icon: "error"
        });
        if (name.length == 0) {
            document.getElementById("name").style.border = "2px solid red"
        }
        if (last_name.length == 0) {
            document.getElementById("last_name").style.background = "red"
        }
    } else if (pass_one != pass_two){
        Swal.fire({
            title: "Sus contraseñas no son iguales",
            text: "Por favor valide sus credenciales",
            icon: "error"
        });
    }else {
        document.getElementById("print").innerHTML = "<strong>" + name + " " + last_name + "</strong>";
        console.log(isNaN(name));
    }
}

//ARRAYS
var dias_sem = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
var array_num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var array_mix = [1, 2.5, "abc"];
var array_mul = [
    { name: "Wilder", age: 32, color: "green" },
    { name: "Anyi", age: 33, color: "white" },
    { name: "Celeste", age: 3, color: "black" },
    { name: "Antonella", age: 2, color: "gray" }
]

var json_ejm = {
    name: "Wilder",
    lastname: "Duarte",
    phone: "3168667751",
    email: "waduarten@ufpso.edu.co"
}

console.log(dias_sem);
console.log(array_num);
console.log(array_mix);
console.log(array_mul);
console.log(json_ejm);

for (let i = 0; i < dias_sem.length; i++) {
    console.log(dias_sem[i]);
}

var j = 0;
while (j < array_num.length) {
    console.log(array_num[j]);
    j++
}

var acum = 0;
for (let h = 0; h < array_num.length; h++) {
    acum += array_num[h]
    // acum = acum + array_num[h]
}
console.log(acum);

var suma_age = 0;
for (let a = 0; a < array_mul.length; a++) {
    suma_age += array_mul[a].age;
}
console.log(suma_age);
document.getElementById("print_age").innerText = "El valor de la suma es: " + suma_age;
document.getElementById("print_age_eti").innerHTML = "<strong>El valor de la suma es: " + suma_age + "</strong>";

function limpiar() {
    document.getElementById("valores").value = "";
    document.getElementById("print_age").innerText = "";
    document.getElementById("print_age_eti").innerHTML = "";
}

var array_ejm = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function agregar() {
    array_ejm.push(10);
    document.getElementById("valores").value = array_ejm;
}
function eliminar() {
    array_ejm.pop();
    document.getElementById("valores").value = array_ejm;
}
function imp_rever() {
    document.getElementById("text_rever").innerText = array_ejm.reverse();
    document.getElementById("valores").disabled = false;
}


var nombre_form = "STEIVIN ANDREY CARDENAS GUEVARA";
function search(){
    let nombre_buscar = document.getElementById("name_search").value;
    //swal.fire(nombre_buscar.toLowerCase());
    //swal.fire({
    //    title: "Campos Vacíos",
    //        text: "Alguno de los campos se encuentra vacío",
    //        icon: "error"
    //});
    //let word = nombre_buscar.indexOf("e");
    let word = nombre_buscar.split("");
    swal.fire(word+"");
    console.log(word);


}