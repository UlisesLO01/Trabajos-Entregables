"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(bateria) {
        this.prendido = false;
        this.bateria = bateria;
    }
    Telefono.prototype.estaPrendido = function () {
        return this.prendido;
    };
    Telefono.prototype.bateriaActual = function () {
        return this.bateria;
    };
    Telefono.prototype.cambiarBateria = function (nuevaBateria) {
        try {
            if (nuevaBateria < 0 || nuevaBateria > 100) {
                throw new Error("El nivel de batería debe estar entre 0 y 100.");
            }
            this.bateria = nuevaBateria;
            console.log("Batería cambiada a: " + this.bateria + "%");
        }
        catch (error) {
            console.error("Error al cambiar la batería:" + error.message);
        }
    };
    Telefono.prototype.mandarMensaje = function (mensaje, numero) {
        try {
            if (!this.estaPrendido) {
                throw new Error("El teléfono está apagado. No se puede enviar mensajes.");
            }
            if (this.bateria < 3) {
                throw new Error("Batería insuficiente para enviar un mensaje.");
            }
            console.log("Enviando mensaje: " + mensaje + " al número " + numero + " ...");
        }
        catch (error) {
            console.error("Error al enviar el mensaje:" + error.message);
        }
    };
    Telefono.prototype.hacerLlamada = function (numero) {
        try {
            if (!this.estaPrendido) {
                throw new Error("El teléfono está apagado. No se puede hacer una llamada.");
            }
            if (this.bateria < 5) {
                throw new Error("Batería insuficiente para realizar una llamada.");
            }
            console.log("Llamando al número " + numero + " ...");
        }
        catch (error) {
            console.error("Error al hacer llamada:" + error.message);
        }
    };
    Telefono.prototype.prenderApagar = function () {
        this.prendido = !this.prendido;
        if (this.prendido) {
            console.log("El teléfono se ha encendido.");
        }
        else {
            console.log("El teléfono se ha apagado.");
        }
    };
    return Telefono;
}());
exports.Telefono = Telefono;
