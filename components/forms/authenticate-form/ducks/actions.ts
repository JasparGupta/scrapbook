import { Data } from '@components/forms/authenticate-form/ducks/state';
import * as Type from '@components/forms/authenticate-form/ducks/types';
import { error, submit } from '@components/forms/ducks/actions';
import { AnyAction } from '@lib/types';
import { Dispatch } from 'react';

export function authenticate(data: Data) {
    return async (dispatch: Dispatch<any>) => {
        dispatch(submit());

        try {
            const response = await fetch(`/api/auth/signin/credentials`, {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            console.log('RESPONSE', response);

            if (!response.ok) {
                throw response;
            }

            // console.log('RESPONSE', await response.json());

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
