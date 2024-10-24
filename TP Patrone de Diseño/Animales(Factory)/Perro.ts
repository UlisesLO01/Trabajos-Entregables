import { Animal } from './Animal';

export class Perro implements Animal {
    hacerSonido(): string {
        return "Guau Guau";
    }

    mover(): string {
        return "El perro corre.";
    }
}
