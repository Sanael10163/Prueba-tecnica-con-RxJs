import { createAction, props } from '@ngrx/store';
import { Ofertas } from '../models/ofertas';

export const OFERTA = createAction('oferta', props<{ofertas: Ofertas}>());








