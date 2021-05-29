import AuthenticateForm from '@components/forms/authenticate-form';
import Page from '@components/page';
import { GetServerSideProps } from 'next';
import { getCsrfToken, getSession } from 'next-auth/client';
import { FC } from 'react';
import Card from 'react-bootstrap/Card';

interface Props {
    csrfToken: string,
}

const Auth: FC<Props> = ({ csrfToken }) => {
    return (
        <Page title="Login">
            <Card>
                <Card.Body>
                    <AuthenticateForm csrfToken={csrfToken} />
                </Card.Body>
            </Card>
        </Page>
    );
};

export default Auth;

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
    const session = await getSession({ req: context.req });

    if (session) {
        return {
            redirect: {
                destination: '/',
                permanent: true,
            }
        }
    }

    return {
        props: {
            csrfToken: await getCsrfToken(context),
        }
    }
}
