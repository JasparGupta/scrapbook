import formReducer from '@components/forms/ducks/reducer';
import { State } from './state';
import * as Type from './types';

const reducer = formReducer<State>((state, {type}) => {
    switch (type) {
        case Type.AUTHENTICATED:
            return {...state, error: null, submitting: false};
    }

    return state;
});

export default reducer;
