import AuthenticateForm from '@components/forms/authenticate-form';
import Page from '@components/page';
import { useTitle } from '@lib/hooks';
import { FC } from 'react';
import Card from 'react-bootstrap/Card';

const Authenticate: FC = () => {
    useTitle('Login');
    
    return (
        <Page title="Login">
            <Card>
                <Card.Body>
                    <AuthenticateForm/>
                </Card.Body>
            </Card>
        </Page>
    );
};

export default Authenticate;
