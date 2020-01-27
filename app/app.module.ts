import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FeatureRoutingModule } from './app.routes';

// SERVICES
import { ImoveisService } from '../app/services/imoveis.service';

// COMPONENTES
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ImoveisComponent } from './components/imoveis/imoveis.component';
import { ImovelsearchComponent } from './components/imovelsearch/imovelsearch.component';
import { ImovelComponent } from './components/imovel/imovel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ContatoComponent,
    ImoveisComponent,
    ImovelsearchComponent,
    ImovelComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeatureRoutingModule
  ],
  providers: [ImoveisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
