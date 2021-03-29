import { Reducer } from 'redux'
import { AccessState, AccessTypes } from './types'

const INITIAL_STATE: AccessState = {
    data: {
        access: '',
        matriz: 0,
        empresa: 0,
    },
    error: false,
    loading: false
}

const reducer: Reducer<AccessState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AccessTypes.UPDATE_REQUEST:
            return { ...state, loading: true };
        case AccessTypes.UPDATE_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data };
        case AccessTypes.UPDATE_FIELD: {
            return { ...state, loading: false, error: false, data: {...state.data, [action.payload.field]: action.payload.value} };
        }
        case AccessTypes.UPDATE_FAILURE:
            return { ...state, loading: false, error: true };
        case AccessTypes.RESET_STATE:
            return { ...state, loading: false, error: true };
        default: 
            return state;
    }
}

export default reducer;