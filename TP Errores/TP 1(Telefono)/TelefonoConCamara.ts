import { Telefono } from './Telefono';

export class TelefonoConCamara extends Telefono {
    constructor(bateria: number) {
        super(bateria);
    }

    hacerFoto(): void {
        try {
            if (!this.estaPrendido) {
                throw new Error("El teléfono está apagado. No se puede tomar una foto.");
            }
            if (this.bateria < 10) {
                throw new Error("Batería insuficiente para tomar una foto.");
            }
            console.log("Foto tomada");
        } catch (error) {
            console.error("Error al hacer foto:"+(error as Error).message);
        }
    }
}

