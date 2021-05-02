import { authenticate } from '@components/forms/authenticate-form/ducks/actions';
import reducer from '@components/forms/authenticate-form/ducks/reducer';
import { initialState } from '@components/forms/authenticate-form/ducks/state';
import { change } from '@components/forms/ducks/actions';
import { faSignInAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import { ChangeEventHandler, FC, FormEventHandler, useReducer } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

interface Props {
    //
}

const AuthenticateForm: FC<Props> = () => {
    const router = useRouter();
    const [{data, ...state}, dispatch] = useReducer(reducer, {...initialState});
    const handleChange: ChangeEventHandler<HTMLInputElement> = ({currentTarget: target}) => {
        dispatch(change(target));
    };
    const handleSubmit: FormEventHandler = async (event) => {
        event.preventDefault();
        await authenticate(data)(dispatch);
        router.push(router.query.redirect as string);
    };

    return (
        <Form onSubmit={handleSubmit}>
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
