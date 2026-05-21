// TASK 1
// se crea un objeto llamado products

let products = [
    {
        id: 1,
        nombre: "iPhone 15",
        precio: 5200
    },
    {
        id: 2,
        nombre: "Samsung Galaxy S24",
        precio: 4300
    },
    {
        id: 3,
        nombre: "Xiaomi Redmi Note 13",
        precio: 1200
    },
    {
        id: 4,
        nombre: "Motorola Edge 50",
        precio: 2100
    },
    {
        id: 5,
        nombre: "Huawei P60",
        precio: 3900
    },
    {
        id: 6,
        nombre: "Realme GT",
        precio: 1800
    },
    {
        id: 7,
        nombre: "Google Pixel 8",
        precio: 4100
    },
    {
        id: 8,
        nombre: "OnePlus 12",
        precio: 3500
    }
]

// TASK 2
// se digita porteclado el id, el nombre y el precio del producto, luego se validan y despues se agrega el producto

let myProducts = new Set(products);

try {
  const producto = Number(prompt("Ingrese la ID del producto: "))
  const nombreProducto = prompt("Ingrese el nombre del producto: ")
  const precioProducto = Number(prompt("Ingrese el precio del producto: "))

  validationString(nombreProducto)
  validationNum(producto)
  validationNum(precioProducto)
  validationNegativeNumber(producto)
  validationNegativeNumber(precioProducto)

  console.log(myProducts)

  const addProduct = (id_producto, nombre_producto, precio_producto) => {
    myProducts.add({
      id: id_producto,
      nombre: nombre_producto,
      precio: precio_producto,
    });
    console.log("Product is Created")
  }

  addProduct(producto, nombreProducto, precioProducto);

} catch (error) {
  console.error(error.message)
}

let cars = new Set(['audi', 'chevrolet', 'mazda', 'nissan', 'corolla', 'ford', 'mcllaren', 'bmw', 'mercedez benz', 'byd'])

const getCars= () =>{
  searchCar = prompt("Ingrese el nombre de un carro: ")
  console.log(cars.has(searchCar))
}

getCars()

const deleteProduct = () => {
  for (const products of myProducts) {
    if(products.nombre === "Google Pixel 8"){
      myProducts.delete(products)
      return console.log("The product has been deleted")
    }
  }
}

deleteProduct()

// TASK 3
// manejo del map, el set, el get, has and deleted

let productos = new Map()

productos.set('id', 10)
productos.set('nombre', 'Teclado')
productos.set('precio', 1200)

productos.set('id', 12)
productos.set('nombre', 'Mouse')
productos.set('precio', 400)

productos.set('id', 142)
productos.set('nombre', 'Cpu Compumax')
productos.set('precio', 3000)


productos.set('id', 142)
productos.set('nombre', 'Fuente de poder 650CX corsair')
productos.set('precio', 180)

console.log(productos)

console.log(productos.get('nombre'))

console.log(productos.has('precio'))

console.log(productos.delete('id', 10))

// TASK 4
// manejo de los for of, for in, foreach
for (product of products){
  console.log(`${product}`)
}

for(const key in productos){
  console.log(`${key}: ${productos[key]}`)
}

products.forEach(product =>{
  console.log(`The ${product.nombre}, is in offer to ${product.precio}`)
})

//TASK 5
// implementando validaciones

function validationNum(num){
  if (!Number.isInteger(num)) {
    throw new Error("Ingrese un número entero válido")
  }
}

function validationString(string) {
  if (typeof string !== 'string' || string.trim() === '') {
    throw new Error('Escriba un string válido')
  }
}

function validationNegativeNumber(number) {
  if (typeof number !== 'number' || Number.isNaN(number) || number < 0) {
    throw new Error('Por favor digite un número positivo')
  }
}