//inicializar las variables nombre y edad.
//el usuario ingresa su nombre

let nombre = prompt("Ingrese su Nombre: ");

// validamos que el nombre no puedan ser solo numeros
if (isNaN(nombre)) {
  console.log("Es un texto");
} else {
  console.error("No se pueden ingresar numeros");
}

//el usuario ingresa su edad
let edad = parseInt(prompt("Ingrese su Edad: "));


// validamos que la edad no sea texto
if (Number.isInteger(edad)) {
  console.log("Es un numero");
} else {
  console.error("No es un numero");
}

// validamos que el usuario no sea menor de 18 años
if(edad < 18){
    alert("Hola "+ nombre +", eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!")
}else{
    console.log("Hola "+nombre+", eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!")
}