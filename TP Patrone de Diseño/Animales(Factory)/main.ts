import { AnimalFactory } from './AnimalFactory';

const perro = AnimalFactory.crearAnimal('perro');
console.log(perro.hacerSonido());  
console.log(perro.mover());        

const gato = AnimalFactory.crearAnimal('gato');
console.log(gato.hacerSonido());   
console.log(gato.mover());         

const pajaro = AnimalFactory.crearAnimal('pajaro');
console.log(pajaro.hacerSonido()); 
console.log(pajaro.mover());   