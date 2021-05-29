import { initialState as formInitialState, State as FormState } from '../../ducks/state';

export interface Data extends Record<string, string> {
    email: string,
    password: string,
}

export interface State extends FormState {
    data: Data,
}

export const initialState: State = {
    ...formInitialState,
    data: {
        email: '',
        password: '',
    },
};
