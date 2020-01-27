import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ImoveisService, Imovel } from '../../services/imoveis.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  imoveis:Imovel[] = [];

  constructor( private _imoveisService:ImoveisService,
               private router:Router
                ) {
    // console.log("constructor");
  }

  ngOnInit() {
    /* this.imoveis = this._imoveisService.getImoveis();
     console.log( this.imoveis ); */
  }


}
