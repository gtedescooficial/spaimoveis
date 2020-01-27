
import { Injectable } from '@angular/core';

@Injectable()
export class ImoveisService {

  private imoveis:Imovel[] = [
    {
      id:0,
      title: "Casa a 100 mts. da praia",
      subtitle: "Casa de 5 comodos com piscina a 100 mts. da praia.",
      img: "assets/img/1.jpg",
      price: "2.000",
      type: "locação",
      bairro:"Aguada"
    },
    {
      id:1,
      title: "Casa a 200 mts. da praia",
      subtitle: "Casa de 5 comodos com piscina a 100 mts. da praia.",
      img: "assets/img/2.jpg",
      price: "2.000",
      type: "locação",
      bairro:"Aguada"
    },
    {
      id:2,
      title: "Casa a 300 mts. da praia",
      subtitle: "Casa de 5 comodos com piscina a 100 mts. da praia.",
      img: "assets/img/3.jpg",
      price: "2.000",
      type: "locação",
      bairro:"Aguada"
    },


  ];

  constructor() {
    // console.log("Servicio listo para usar!!!");
  }


  getImoveis():Imovel[]{
    return this.imoveis;
  }

  getImovel( idx: string ){
    return this.imoveis[idx];
  }

  buscarImoveis( termino:string ):Imovel[]{

    let imoveisArr:Imovel[] = [];
    termino = termino.toLowerCase();

    for( let i = 0; i < this.imoveis.length; i ++ ){

      let imovel = this.imoveis[i];

      let title = imovel.title.toLowerCase();

      if( title.indexOf( termino ) >= 0  ){
        imovel.idx = i;
        imoveisArr.push( imovel )
      }

    }

    return imoveisArr;

  }


}


export interface Imovel{
  id:number,
  title: string;
  subtitle: string;
  bairro: string;
  img: string;
  type: string;
  price: string;
  idx?: number;
};
