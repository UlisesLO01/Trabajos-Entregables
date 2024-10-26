import { Telefono } from './Telefono';

export class TelefonoConRadio extends Telefono {
    private frecuencia: string;

    constructor(bateria: number, frecuencia: string) {
        super(bateria);
        this.frecuencia = frecuencia;
    }

    frecuenciaActual(): string {
        return this.frecuencia;
    }

    verFrecuenciaActual(): void {
        try {
            if (!this.estaPrendido) {
                throw new Error("El teléfono está apagado. No se puede ver la frecuencia de radio.");
            }
            if (this.bateria < 10) {
                throw new Error("Batería insuficiente para ver la frecuencia de radio.");
            }
            console.log("Frecuencia de radio: "+this.frecuencia);
        } catch (error) {
            console.error("Error al hacer foto:"+(error as Error).message);
        }
    }
}
