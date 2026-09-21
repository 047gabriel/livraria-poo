import { Livro } from './Livro.js';

export class LivroGenero extends Livro {
    #genero;
    constructor(titulo, autor, genero) {
        super(titulo, autor);
        this.genero = genero;
    }
    get getGenero() {
        return this.#genero;
    }
}