import { ReproductorMusica } from "./ReproductorMusica";
import { Vinilo } from "./vinilo";

export class AdaptadorVinilo implements ReproductorMusica {
    private vinilo: Vinilo;

    constructor(pvinilo: Vinilo) {
        this.vinilo = pvinilo;
    }

    public reproducir(): void {
        this.vinilo.colocarAguja();
        console.log("Reproduciendo canción");
    }

    public detener(): void {
        this.vinilo.levantarAguja();
        console.log("Deteniendo canción");
    }
}
