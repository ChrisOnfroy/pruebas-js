// TASK 1

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

const producto = parseInt(prompt("Ingrese la ID del producto: "))
const nombreProducto = prompt("Ingrese el nombre del producto: ")
const precioProducto = parseInt(prompt("Ingrese el precio del producto: "))

let myProducts = new Set(products);

console.log(myProducts)

const addProduct = (id_producto, nombre_producto, precio_producto) => {
  myProducts.add({
    id: id_producto,
    nombre: nombre_producto,
    precio: precio_producto,
  });
  return console.log("Product is Created");
}

addProduct(producto, nombreProducto, precioProducto);

const getProduct =  () => {
  const searchProduct = prompt("Ingresa el numero de identificacion del producto: ")
  for (const products of myProducts) {
    if(products.id === searchProduct){
      console.log(myProducts.has(products))
    }
  }
}

getProduct()

const deleteProduct = () => {
  for (const products of myProducts) {
    if(products.nombre === "Google Pixel 8"){
      myProducts.delete(products)
      return console.log("The product has been deleted")
    }
  }
}

deleteProduct()