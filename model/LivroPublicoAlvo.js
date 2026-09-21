import { Livro } from './Livro.js';

export class LivroPublicoAlvo extends Livro {
    #publicoAlvo;
    constructor(titulo, autor, publicoAlvo) {
        super(titulo, autor);
        this.#publicoAlvo = publicoAlvo;
    }
    get getPublicoAlvo() {
        return this.#publicoAlvo;
        }
    }