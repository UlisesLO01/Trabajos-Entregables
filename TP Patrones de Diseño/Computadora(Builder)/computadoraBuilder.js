"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputadoraBuilder = void 0;
var computadora_1 = require("./computadora");
var ComputadoraBuilder = /** @class */ (function () {
    function ComputadoraBuilder() {
    }
    ComputadoraBuilder.prototype.setProcesador = function (procesador) {
        this.procesador = procesador;
        return this;
    };
    ComputadoraBuilder.prototype.setRam = function (ram) {
        this.ram = ram;
        return this;
    };
    ComputadoraBuilder.prototype.setAlmacenamiento = function (almacenamiento) {
        this.almacenamiento = almacenamiento;
        return this;
    };
    ComputadoraBuilder.prototype.setTarjetaGrafica = function (tarjetaGrafica) {
        this.tarjetaGrafica = tarjetaGrafica;
        return this;
    };
    ComputadoraBuilder.prototype.setSistemaOperativo = function (sistemaOperativo) {
        this.sistemaOperativo = sistemaOperativo;
        return this;
    };
    ComputadoraBuilder.prototype.build = function () {
        return new computadora_1.Computadora(this.procesador, this.ram, this.almacenamiento, this.tarjetaGrafica, this.sistemaOperativo);
    };
    return ComputadoraBuilder;
}());
exports.ComputadoraBuilder = ComputadoraBuilder;
