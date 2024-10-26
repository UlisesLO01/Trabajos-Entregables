class Rectangulo {
    ancho: number;
    altura: number;
  
    constructor(ancho: number, altura: number) {
      try {
        if (ancho <= 0 || altura <= 0) {
          throw new Error("El ancho y la altura deben ser valores positivos y distintos de 0.");
        }
        this.ancho = ancho;
        this.altura = altura;
      } catch (error) {
        console.error("Error al crear el rectángulo:", error.message);
      }
    }
  
    calcularArea(): number {
      return this.ancho * this.altura;
    }
  
    calcularPerimetro(): number {
      return 2 * (this.ancho + this.altura);
    }
}
  
const rectangulo = new Rectangulo(5, 10);
const area = rectangulo.calcularArea();
const perimetro = rectangulo.calcularPerimetro();

console.log("Área del rectángulo:" + area);
console.log("Perímetro del rectángulo:" + perimetro);

const rectanguloInvalido = new Rectangulo(-5, 0);

  