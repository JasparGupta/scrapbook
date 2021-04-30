import Page from '@components/page';
import { GetServerSideProps } from 'next';

interface Props {
    //
}

const HomePage = () => {
    return (
        <Page title={process.env.NEXT_PUBLIC_APP_NAME}>

        </Page>
    );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    return {props: {}};
};

export default HomePage;
