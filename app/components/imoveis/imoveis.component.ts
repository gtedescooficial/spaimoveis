import { Component, OnInit, Input } from '@angular/core';
import { ImoveisService, Imovel } from '../../services/imoveis.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-imoveis',
  templateUrl: './imoveis.component.html'
})
export class ImoveisComponent implements OnInit {

  imoveis:Imovel[] = [];


  constructor( private _imoveisService:ImoveisService,
    private arout:ActivatedRoute, private route:Router ) {
    this.arout.params.subscribe( pr=>{
      console.log(pr);
    })
  }

  ngOnInit() {
    this.imoveis = this._imoveisService.getImoveis();

  }

  verImovel(id){

      this.route.navigate(['imovel',id])
  }

}
