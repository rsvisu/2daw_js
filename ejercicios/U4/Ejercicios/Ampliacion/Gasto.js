function CrearGasto(descripcion, valor, fecha, ...etiquetas) {
    // Atributos
    this.descripcion = descripcion;
    this.valor = valor < 0 ? 0 : Number(valor);
    this.fecha = fecha;
    this.etiquetas = etiquetas;
    
    // Funciones
    this.mostrarGasto = function() {
        return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.`;
    }
    this.actualizarDescripcion = function(des) {
        this.descripcion = des;
    }
    this.actualizarValor = function(valor) {
        this.valor = valor >= 0 ? valor : this.valor;
    }
}

export { CrearGasto };