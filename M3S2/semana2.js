let product = [
  {
    id: 1,
    nombre: "Teclado Mecánico",
    precio: 120,
  },
  {
    id: 2,
    nombre: "Mouse Gamer",
    precio: 80,
  },
  {
    id: 3,
    nombre: "Monitor 24 pulgadas",
    precio: 950,
  },
];

product.push({
  id: 3,
  nombre: "Monitor 27 pulgadas",
  precio: 1250,
});

console.log(product);

let MySet = new Set([1,3,5,7,8,2,3,5]);

MySet.add(9)

const num = prompt("Ingrese un numero: ")

console.log(num)

MySet.has(num)

const deleteNum = prompt("Ingrese numero a eliminar: ")

MySet.delete(deleteNum) 

console.log(MySet);