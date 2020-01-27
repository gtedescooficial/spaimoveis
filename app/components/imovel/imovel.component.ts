import { Component, OnInit } from '@angular/core';
import { ImoveisService, Imovel  } from '../../services/imoveis.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-imovel',
  templateUrl: './imovel.component.html',
  styles: []
})
export class ImovelComponent implements OnInit {

  imovel: any = {}

  constructor(private _is: ImoveisService, private ar:ActivatedRoute ) {



  }

  ngOnInit() {
    this.ar.params.subscribe( params =>{
console.log(params.id)
      this.imovel = this._is.getImovel( params['id'] );
      //console.log(this.imovel);
  });
  }

}
