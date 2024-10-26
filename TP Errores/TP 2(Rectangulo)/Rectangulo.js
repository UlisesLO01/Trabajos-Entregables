var Rectangulo = /** @class */ (function () {
    function Rectangulo(ancho, altura) {
        try {
            if (ancho <= 0 || altura <= 0) {
                throw new Error("El ancho y la altura deben ser valores positivos y distintos de 0.");
            }
            this.ancho = ancho;
            this.altura = altura;
        }
        catch (error) {
            console.error("Error al crear el rectángulo:", error.message);
        }
    }
    Rectangulo.prototype.calcularArea = function () {
        return this.ancho * this.altura;
    };
    Rectangulo.prototype.calcularPerimetro = function () {
        return 2 * (this.ancho + this.altura);
    };
    return Rectangulo;
}());
var rectangulo = new Rectangulo(5, 10);
var area = rectangulo.calcularArea();
var perimetro = rectangulo.calcularPerimetro();
console.log("Área del rectángulo:" + area);
console.log("Perímetro del rectángulo:" + perimetro);
var rectanguloInvalido = new Rectangulo(-5, 0);
