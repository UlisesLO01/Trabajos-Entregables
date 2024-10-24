var Logger = /** @class */ (function () {
    function Logger() {
        this.mensajeContador = 0;
    }
    Logger.getInstance = function () {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    };
    Logger.prototype.mostrarMensaje = function (mensaje) {
        this.mensajeContador++;
        console.log("[".concat(this.mensajeContador, "] ").concat(mensaje));
    };
    return Logger;
}());
var logger1 = Logger.getInstance();
var logger2 = Logger.getInstance();
logger1.mostrarMensaje("Primer mensaje");
logger2.mostrarMensaje("Segundo mensaje");
