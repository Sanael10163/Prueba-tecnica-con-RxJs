import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { OfferComponent } from './components/offer/offer.component';
import { PricesComponent } from './components/prices/prices.component';
import { FormsModule } from '@angular/forms';


import { StoreModule } from '@ngrx/store';
import * as fromOfertas from './reducer/ofertas.reducer';

@NgModule({
  declarations: [
    AppComponent,
    CharacteristicsComponent,
    OfferComponent,
    PricesComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      ofertas: fromOfertas.reducer
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
