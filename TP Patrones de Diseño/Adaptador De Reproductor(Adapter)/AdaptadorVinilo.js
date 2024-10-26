"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdaptadorVinilo = void 0;
var AdaptadorVinilo = /** @class */ (function () {
    function AdaptadorVinilo(pvinilo) {
        this.vinilo = pvinilo;
    }
    AdaptadorVinilo.prototype.reproducir = function () {
        this.vinilo.colocarAguja();
        console.log("Reproduciendo canción");
    };
    AdaptadorVinilo.prototype.detener = function () {
        this.vinilo.levantarAguja();
        console.log("Deteniendo canción");
    };
    return AdaptadorVinilo;
}());
exports.AdaptadorVinilo = AdaptadorVinilo;
