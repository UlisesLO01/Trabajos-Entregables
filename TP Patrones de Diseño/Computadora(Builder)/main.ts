import { ComputadoraBuilder } from "./computadoraBuilder";

const miComputadora = new ComputadoraBuilder()

miComputadora.setProcesador("AMD Ryzen 7")
miComputadora.setAlmacenamiento("1TB SSD")
miComputadora.setRam("16GB")
miComputadora.setTarjetaGrafica("NVIDIA GeForce RTX 3060")
miComputadora.setSistemaOperativo("Ubuntu")
miComputadora.build();

console.log(miComputadora);
