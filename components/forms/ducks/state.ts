export interface FormError {
    message: string,
}

export interface State {
    data: Record<string, any>,
    error?: FormError,
    submitting: boolean,
}

export const initialState: State = {
    data: {},
    submitting: false,
}
