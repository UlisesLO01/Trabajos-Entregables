"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelefonoConRadio = void 0;
var Telefono_1 = require("./Telefono");
var TelefonoConRadio = /** @class */ (function (_super) {
    __extends(TelefonoConRadio, _super);
    function TelefonoConRadio(bateria, frecuencia) {
        var _this = _super.call(this, bateria) || this;
        _this.frecuencia = frecuencia;
        return _this;
    }
    TelefonoConRadio.prototype.frecuenciaActual = function () {
        return this.frecuencia;
    };
    TelefonoConRadio.prototype.verFrecuenciaActual = function () {
        try {
            if (!this.estaPrendido) {
                throw new Error("El teléfono está apagado. No se puede ver la frecuencia de radio.");
            }
            if (this.bateria < 10) {
                throw new Error("Batería insuficiente para ver la frecuencia de radio.");
            }
            console.log("Frecuencia de radio: " + this.frecuencia);
        }
        catch (error) {
            console.error("Error al hacer foto:" + error.message);
        }
    };
    return TelefonoConRadio;
}(Telefono_1.Telefono));
exports.TelefonoConRadio = TelefonoConRadio;
