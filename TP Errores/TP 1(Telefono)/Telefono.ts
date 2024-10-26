
export class Telefono {
    protected prendido: boolean;
    protected bateria: number;

    constructor(bateria: number) {
        this.prendido = false;
        this.bateria = bateria;
    }

    estaPrendido(): boolean {
        return this.prendido;
    }

    bateriaActual(): number {
        return this.bateria;
    }

    cambiarBateria(nuevaBateria: number): void {
        try {
            if (nuevaBateria < 0 || nuevaBateria > 100) {
                throw new Error("El nivel de batería debe estar entre 0 y 100.");
            }
            this.bateria = nuevaBateria;
            console.log("Batería cambiada a: "+ this.bateria + "%");
        } catch (error) {
            console.error("Error al cambiar la batería:" +(error as Error).message);
        }
    
    }

    mandarMensaje(mensaje: string, numero: string): void {
        try {
            if (!this.estaPrendido) {
                throw new Error("El teléfono está apagado. No se puede enviar mensajes.");
            }
            if (this.bateria < 3) {
                throw new Error("Batería insuficiente para enviar un mensaje.");
            }
            console.log("Enviando mensaje: " + mensaje +" al número "+numero+" ...");
        } catch (error) {
            console.error("Error al enviar el mensaje:"+(error as Error).message);
        }
    }

    hacerLlamada(numero: string): void {
        try {
            if (!this.estaPrendido) {     
                throw new Error("El teléfono está apagado. No se puede hacer una llamada.");
            }
            if (this.bateria < 5) {
                throw new Error("Batería insuficiente para realizar una llamada.");
            }
            console.log("Llamando al número "+numero+" ...");
        } catch (error) {
            console.error("Error al hacer llamada:"+(error as Error).message);
        }
    }

    prenderApagar(): void {
        this.prendido = !this.prendido;
        if (this.prendido) {
            console.log("El teléfono se ha encendido.");
        } else {
            console.log("El teléfono se ha apagado.");
        }
    }
}
