import { url } from '@lib/utils';
import { format } from 'date-fns';
import { FC } from 'react';
import Col from 'react-bootstrap/Col';
import Container, { ContainerProps } from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

interface Props extends Pick<ContainerProps, 'fluid'> {
    title?: JSX.Element | string,
}

const Page: FC<Props> = ({children, fluid, title}) => {
    return (
        <>
            <header>
                <Navbar variant="light">
                    <Navbar.Brand href={url('/')}>
                        {process.env.NEXT_PUBLIC_APP_NAME}
                    </Navbar.Brand>
                </Navbar>
            </header>

            <Container as="main" fluid={fluid}>
                {title && (
                    <Row>
                        <Col>
                            <h1>{title}</h1>
                        </Col>
                    </Row>
                )}

                <Row>
                    <Col>
                        {children}
                    </Col>
                </Row>
            </Container>

            <Container as="footer" className="mt-auto bg-light" fluid>
                <Row>
                    <Col>
                        <Container className="mt-5 py-5">
                            <Row>
                                <Col>
                                    &copy; {process.env.NEXT_PUBLIC_APP_NAME} {format(new Date(), 'yyyy')}
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Page;
