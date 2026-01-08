class Libro {

    constructor(titular, autor, cantidadPaginas) {
        this.titular = titular;
        this.autor = autor;
        this.cantidadPaginas = cantidadPaginas;

    }

    existePagina(pagina) {
        if (pagina >= 0 && pagina <= this.cantidadPaginas) {
            return this;
        }
        return false;
    }
}

let libro = new Libro("Javascript", "Robert", 100);
for (const key in libro) {    
    document.writeln(libro[key] + "<br>");
}

document.writeln(libro.existePagina(2));
document.writeln("<br>");
document.writeln(libro.existePagina(700));
