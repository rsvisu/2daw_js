class Presupuesto {
    // Propiedades
    static presupuestoGlobal = 0;

    // Funciones
    static actualizarPresupuesto(pres) {
        pres = Number(pres);
        if (!Number.isNaN(pres) && pres >= 0) {
            Presupuesto.presupuestoGlobal = pres;
            return pres;
        } else {
            return -1;
        }
        
    }

    static mostrarPresupuesto() {
        return `Tu presupuesto actual es de ${this.presupuestoGlobal}€`;
    }
}

export { Presupuesto };