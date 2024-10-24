import { Animal } from './Animal';

export class Pajaro implements Animal {
    hacerSonido(): string {
        return "Pío Pío";
    }

    mover(): string {
        return "El pájaro vuela.";
    }
}
