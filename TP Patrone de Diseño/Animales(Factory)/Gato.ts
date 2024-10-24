import { Animal } from './Animal';

export class Gato implements Animal {
    hacerSonido(): string {
        return "Miau Miau";
    }

    mover(): string {
        return "El gato camina sigilosamente.";
    }
}
