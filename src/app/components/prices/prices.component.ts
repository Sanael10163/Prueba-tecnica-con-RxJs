import { Component, OnInit } from '@angular/core';
import { Ofertas } from 'src/app/models/ofertas';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent  {

  ofertas$: Observable<Ofertas>;

  constructor(private store: Store<{ofertas: Ofertas}>) {
    this.ofertas$ = store.pipe(select('ofertas'));
   }

}
