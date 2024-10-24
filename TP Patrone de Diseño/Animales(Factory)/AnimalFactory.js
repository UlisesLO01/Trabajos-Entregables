"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalFactory = void 0;
var Perro_1 = require("./Perro");
var Gato_1 = require("./Gato");
var Pajaro_1 = require("./Pajaro");
var AnimalFactory = /** @class */ (function () {
    function AnimalFactory() {
    }
    AnimalFactory.crearAnimal = function (tipo) {
        switch (tipo.toLowerCase()) {
            case 'perro':
                return new Perro_1.Perro();
            case 'gato':
                return new Gato_1.Gato();
            case 'pajaro':
                return new Pajaro_1.Pajaro();
            default:
                throw new Error("Tipo de animal no reconocido.");
        }
    };
    return AnimalFactory;
}());
exports.AnimalFactory = AnimalFactory;
