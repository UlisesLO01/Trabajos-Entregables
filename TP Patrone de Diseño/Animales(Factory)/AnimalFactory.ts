import { Animal } from './Animal';
import { Perro } from './Perro';
import { Gato } from './Gato';
import { Pajaro } from './Pajaro';

export class AnimalFactory {
    static crearAnimal(tipo: string): Animal {
        switch (tipo.toLowerCase()) {
            case 'perro':
                return new Perro();
            case 'gato':
                return new Gato();
            case 'pajaro':
                return new Pajaro();
            default:
                throw new Error("Tipo de animal no reconocido.");
        }
    }
}