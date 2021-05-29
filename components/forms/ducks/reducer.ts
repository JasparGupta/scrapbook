import * as Type from '@components/forms/ducks/types';
import { State } from '@components/forms/ducks/state';
import { AnyAction } from '@lib/types';
import { Reducer } from 'react';

const reducer = <S extends State, A extends AnyAction = AnyAction>(reducer: Reducer<S, A>): Reducer<S, A> => {
    return (state, {type, payload}) => {
        switch (type) {
            case Type.CHANGE:
                return {...state, data: {...state.data, [payload.name]: payload.value}};
            case Type.ERROR:
                return {...state, error: payload, submitting: false};
            case Type.SUBMIT:
                return {...state, error: null, submitting: true};
        }
        
        return reducer(state, {type, payload} as A);
    };
};

export default reducer;
