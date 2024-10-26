import { Vinilo } from './vinilo';
import { AdaptadorVinilo } from './AdaptadorVinilo';

const vinilo1 = new Vinilo();
const adaptadorVinilo1 = new AdaptadorVinilo(vinilo1);

adaptadorVinilo1.reproducir();
adaptadorVinilo1.detener();