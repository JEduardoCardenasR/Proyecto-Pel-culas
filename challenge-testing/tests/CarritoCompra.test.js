const { CarritoCompra, calcularTotal, totalDescuento } = require("../index");

let carrito;

beforeEach(() => {
    carrito = new CarritoCompra();
  });
  

describe("La función CarritoCompra", ()=>{
    it("Debe tener su propiedad 'lista' vacía al iniciar", ()=>{
        expect(carrito.lista).toEqual([]);
    });
});

describe("La función CarritoCompra", ()=>{
    it("Debe recibir productos y meterlos en el array", () => {        
        
        // Mockeamos el producto para añadir
        const productoMock1 = { name: "Producto A", price: 100, quantity: 2 };
        
        // Llamamos a agregarProducto
        carrito.agregarProducto(productoMock1.name, productoMock1.price, productoMock1.quantity);
        
        // Verificamos que el producto ha sido añadido al array
        expect(carrito.lista.length).toBe(1);
    });
});

describe("La función CarritoCompra", ()=>{
    it("Debe tener un producto de prueba agregado", () => {        
        
        // Mockeamos el producto para añadir
        const productoMock2 = { name: "Producto B", price: 85, quantity: 3 };
        
        // Llamamos a agregarProducto
        carrito.agregarProducto(productoMock2.name, productoMock2.price, productoMock2.quantity);
        
        expect(carrito.lista[0]).toEqual(productoMock2); // Verificamos que sea el producto correcto
    });
});

describe("La función CarritoCompra", ()=>{
    it("Debe calcular el total de la compra sumando el precio de los productos", ()=>{
        
        carrito.agregarProducto("Producto C", 60, 1);

        expect(calcularTotal(carrito)).toEqual(60);
    });
});

describe("La función CarritoCompra", ()=>{
    it("Debe retornar correctamente el resultado con descuento", ()=>{
        expect(totalDescuento(200)).toBe(180);
        expect(totalDescuento(0)).toBe(0);
        expect(totalDescuento(-100)).toBe(-90);
        expect(totalDescuento(85.5)).toBe(76.95);
    })
});

// it("Debe ser una clase", ()=>{
//     expect(CarritoCompra).toBeDefined();
//     expect()
// })

