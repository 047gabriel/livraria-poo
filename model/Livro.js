export class Livro {
    titulo;
    autor;
    construtor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    getTitulo() {
        return this.titulo;
    }
    getAutor() {
        return this.autor;
    }
}