import Page from '@components/page';
import { GetServerSideProps } from 'next';

interface Props {
    //
}

const HomePage = () => {
    return (
        <Page>

        </Page>
    );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    return { props: {} };
};

export default HomePage;
