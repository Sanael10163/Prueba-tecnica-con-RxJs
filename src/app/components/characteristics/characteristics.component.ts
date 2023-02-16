import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Ofertas } from 'src/app/models/ofertas';


@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css']
})
export class CharacteristicsComponent   {

  ofertas$: Observable<Ofertas>;

  constructor(private store: Store<{ofertas: Ofertas}>) {
    this.ofertas$ = store.pipe(select('ofertas'));
   }


}
