const reservas = [
    { id: 10000, precio: 25, habitacion: 'individual', pagada: false },
    { id: 10001, precio: 15, habitacion: 'individual', pagada: false },
    { id: 10002, precio: 55, habitacion: 'doble', pagada: true },
    { id: 10003, precio: 55, habitacion: 'doble', pagada: true },
    { id: 10004, precio: 65, habitacion: 'doble', pagada: true }];

const habitacionSuit = reservas.some((booking) => booking.habitacion === 'suit');
console.log(habitacionSuit);