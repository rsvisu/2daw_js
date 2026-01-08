const reservas = [
    { id: 10000, precio: 25, habitacion: 'individual', pagada: false },
    { id: 10001, precio: 15, habitacion: 'individual', pagada: false },
    { id: 10002, precio: 55, habitacion: 'doble', pagada: true },
    { id: 10003, precio: 55, habitacion: 'doble', pagada: true },
    { id: 10004, precio: 65, habitacion: 'doble', pagada: true }];

const nopagadas = reservas.filter((booking) => !booking.pagada);
console.log(nopagadas);

const reservaCara = reservas.filter(booking => booking.precio > 50);
console.log(reservaCara);