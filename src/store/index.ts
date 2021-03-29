import { createStore, Store } from 'redux';
import { AccessState } from './ducks/access/types';
import { StepsState } from './ducks/steps/types';

import rootReducer from './ducks/rootReducer';

function saveToLocalStorage(state: any) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state',serializedState);
    } catch (e) {
        console.log(e);
    }
}

function loadFromLocaStorage() {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.log(e);
        return undefined;
    }
}

const persistedState = loadFromLocaStorage();

export interface ApplicationState {
    access: AccessState,
    steps: StepsState,
}

const store: Store<ApplicationState> = createStore(rootReducer, persistedState);

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store;