"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vinilo_1 = require("./vinilo");
var AdaptadorVinilo_1 = require("./AdaptadorVinilo");
var vinilo1 = new vinilo_1.Vinilo();
var adaptadorVinilo1 = new AdaptadorVinilo_1.AdaptadorVinilo(vinilo1);
adaptadorVinilo1.reproducir();
adaptadorVinilo1.detener();
