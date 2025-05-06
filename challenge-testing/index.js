class Producto {
    constructor(name, price, quantity) {
        this.name = name; 
        this.price = price;
        this.quantity = quantity;
    }
}

class CarritoCompra {
    constructor () {
        this.lista = [];
    }

    agregarProducto(name, price, quantity) {
        let producto = new Producto(name, price, quantity);
        this.lista.push(producto);
    }
}

const calcularTotal = (carrito)=>{
    const productos = carrito.lista;

    let total = 0;
    for (const item of productos) total += item.quantity * item.price;
    return total;
};

const totalDescuento = total => total*0.9; 

module.exports = { CarritoCompra, calcularTotal, totalDescuento };

