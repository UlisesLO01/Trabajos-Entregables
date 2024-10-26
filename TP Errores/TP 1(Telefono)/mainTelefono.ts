import { TelefonoConCamara } from './TelefonoConCamara';
import { TelefonoConRadio } from './TelefonoConRadio';

const miTelefonoConCamara = new TelefonoConCamara(80);

miTelefonoConCamara.prenderApagar();
console.log("Batería actual:" +miTelefonoConCamara.bateriaActual()+"%");
miTelefonoConCamara.cambiarBateria(5);
miTelefonoConCamara.hacerFoto();
miTelefonoConCamara.hacerLlamada("123456789");

const miTelefonoConRadio = new TelefonoConRadio(60, "101.2 FM");

miTelefonoConRadio.prenderApagar();
console.log("Batería actual:" +miTelefonoConRadio.bateriaActual()+"%");
miTelefonoConRadio.verFrecuenciaActual();
miTelefonoConRadio.mandarMensaje("¡Hola!", "987654321");
