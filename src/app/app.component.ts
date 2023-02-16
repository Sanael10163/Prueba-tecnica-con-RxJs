import { Component } from '@angular/core';
import { Ofertas } from 'src/app/models/ofertas';
import { OfertasService } from './services/ofertas.service';
import { Store } from '@ngrx/store';
import { OFERTA } from './actions/ofertas.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pruebaRedux';

  ofertas: Ofertas[] = [];
  ofertaSec: Ofertas;

  constructor(
    public ofertasService: OfertasService,
    private store: Store<Ofertas>
  ) {
    this.ofertas = this.ofertasService.getOfertas();
  }

  onChangeObj(of: Ofertas) {
    this.store.dispatch(OFERTA({ ofertas: of }));
  }
}
