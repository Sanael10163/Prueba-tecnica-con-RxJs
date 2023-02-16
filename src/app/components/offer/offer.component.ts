import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ofertas } from 'src/app/models/ofertas';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {

  ofertas$: Observable<Ofertas>;

  constructor(private store: Store<{ofertas: Ofertas}>) {
    this.ofertas$ = store.pipe(select('ofertas'));
   }

}
