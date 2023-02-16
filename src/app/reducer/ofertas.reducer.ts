import * as ofertasPageActions from '../actions/ofertas.actions';
import { Action, createReducer, on } from '@ngrx/store';

export interface State {
    id: string;
    versions: any;
}

export const initialState: State = {
    id: '',
    versions: -1,
};

const _ofertasReducer = createReducer(
    initialState,
    on(ofertasPageActions.OFERTA, (state, { ofertas }) =>  ({id: ofertas.id, versions: ofertas.versions})));

export function reducer(state: State , action: Action){
        return _ofertasReducer(state, action);

}
