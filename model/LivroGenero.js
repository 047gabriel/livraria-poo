import { Livro } from './Livro.js';

export class LivroGenero extends Livro {
    genero;
    constructor(titulo, autor, genero) {
        super(titulo, autor);
        this.genero = genero;
    }
    getGenero() {
        return this.genero;
    }
}