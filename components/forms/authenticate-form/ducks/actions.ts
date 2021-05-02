import { Data } from '@components/forms/authenticate-form/ducks/state';
import * as Type from '@components/forms/authenticate-form/ducks/types';
import { error, submit } from '@components/forms/ducks/actions';
import { AnyAction } from '@lib/types';
import { Dispatch } from 'react';

export function authenticate(data: Data) {
    return async (dispatch: Dispatch<any>) => {
        dispatch(submit());

        try {
            // TODO: Authenticate.
            dispatch(authenticated());
        } catch (e) {
            dispatch(error('Failed to authenticate'));
            throw e;
        }
    };
}

function authenticated(): AnyAction {
    return {type: Type.AUTHENTICATED};
}
