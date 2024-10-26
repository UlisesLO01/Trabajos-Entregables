import { Computadora } from "./computadora";

export class ComputadoraBuilder {
  private procesador: string;
  private ram: string;
  private almacenamiento: string;
  private tarjetaGrafica: string;
  private sistemaOperativo: string;

  setProcesador(procesador: string): ComputadoraBuilder {
    this.procesador = procesador;
    return this;
  }

  setRam(ram: string): ComputadoraBuilder {
    this.ram = ram;
    return this;
  }

  setAlmacenamiento(almacenamiento: string): ComputadoraBuilder {
    this.almacenamiento = almacenamiento;
    return this;
  }

  setTarjetaGrafica(tarjetaGrafica: string): ComputadoraBuilder {
    this.tarjetaGrafica = tarjetaGrafica;
    return this;
  }

  setSistemaOperativo(sistemaOperativo: string): ComputadoraBuilder {
    this.sistemaOperativo = sistemaOperativo;
    return this;
  }

  build(): Computadora {
    return new Computadora(
      this.procesador,
      this.ram,
      this.almacenamiento,
      this.tarjetaGrafica,
      this.sistemaOperativo
    );
  }
}
