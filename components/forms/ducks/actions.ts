import * as Type from '@components/forms/ducks/types';
import { AnyAction } from '@lib/types';

export function change({name, value}: HTMLInputElement): AnyAction {
    return {type: Type.CHANGE, payload: {name, value}};
}

export function error(message: string): AnyAction {
    return {type: Type.ERROR, payload: message};
}

export function submit(): AnyAction {
    return {type: Type.SUBMIT};
}
