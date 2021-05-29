import reducer from '@components/forms/authenticate-form/ducks/reducer';
import { initialState } from '@components/forms/authenticate-form/ducks/state';
import { change } from '@components/forms/ducks/actions';
import { faSignInAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ChangeEventHandler, FC, useCallback, useReducer } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface Props {
    csrfToken: string,
}

const AuthenticateForm: FC<Props> = ({ csrfToken }) => {
    const [{ data, ...state }, dispatch] = useReducer(reducer, { ...initialState });
    const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>(({ currentTarget: target }) => {
        dispatch(change(target));
    }, []);

    return (
        <Form method="post" action="/api/auth/callback/credentials">
            <input type="hidden" name="csrfToken" value={csrfToken} />

            <Form.Group controlId="email">
                <Form.Label>
                    Email
                </Form.Label>

                <Form.Control
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    autoFocus
                />
            </Form.Group>

            <Form.Group controlId="password">
                <Form.Label>
                    Password
                </Form.Label>

                <Form.Control
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                />
            </Form.Group>

            <Form.Group className="text-right">
                <Button type="submit" variant="outline-primary">
                    <FontAwesomeIcon
                        icon={state.submitting ? faSpinner : faSignInAlt}
                        spin={state.submitting}
                    /> Login
                </Button>
            </Form.Group>
        </Form>
    );
};

export default AuthenticateForm;
