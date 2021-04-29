import Page from '@components/Page';
import cache from '@lib/cache';
import { tap } from '@lib/utils';
import { GetServerSideProps } from 'next';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Home = () => {
    return (
        <Page title={process.env.NEXT_PUBLIC_APP_NAME}>

        </Page>
    );
};

export const getServerSideProps: GetServerSideProps = async () => {
    return {props: {}};
};

export default Home;
