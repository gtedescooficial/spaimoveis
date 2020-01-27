import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImoveisService, Imovel } from '../../services/imoveis.service';



@Component({
  selector: 'app-imovelsearch',
  templateUrl: './imovelsearch.component.html'
})
export class ImovelsearchComponent implements OnInit {
imoveis: Imovel[] = [];

  constructor( private ar:ActivatedRoute, private is:ImoveisService, private router:Router) {

  this.ar.params.subscribe(params=>{
    this.imoveis = is.buscarImoveis(params.termino)

  })

  }

  ngOnInit() {

  }

  verImovel(i){
  console.log('ID FILTRADO A MOSTRAR '+i);
  this.router.navigate(['imovel',i])
  }

}
