const reservas = [
    { id: 10000, precio: 25, habitacion: 'individual', pagada: false },
    { id: 10001, precio: 15, habitacion: 'individual', pagada: false },
    { id: 10002, precio: 55, habitacion: 'doble', pagada: true },
    { id: 10003, precio: 55, habitacion: 'doble', pagada: true },
    { id: 10004, precio: 65, habitacion: 'doble', pagada: true }];

const descuento = 10;
const descuentoReserva = reservas.map((booking) => ({
    price: booking.precio * (1 - (descuento / 100))
}));
console.log(descuentoReserva);