import { Injectable } from '@angular/core';
import * as ofertasJson from '../../assets/ofertas.json';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  ofertas: any [] = [];

  constructor() { }

  getOfertas(){

    this.ofertas = (ofertasJson as any).default;
    return this.ofertas;
  }
}
