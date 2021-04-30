import { faBook, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserContext } from '@lib/contexts';
import { User } from '@lib/types';
import { url } from '@lib/utils';
import { format } from 'date-fns';
import { FC } from 'react';
import Col from 'react-bootstrap/Col';
import Container, { ContainerProps } from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

interface Props extends Pick<ContainerProps, 'fluid'> {
    title?: JSX.Element | string,
    user?: User,
}

const Page: FC<Props> = ({children, fluid, title, user}) => {
    return (
        <UserContext.Provider value={user}>
            <header>
                <Navbar variant="light">
                    <Navbar.Brand href={url('/')}>
                        <FontAwesomeIcon
                            className="text-muted"
                            icon={faBook}
                        /> {process.env.NEXT_PUBLIC_APP_NAME}
                    </Navbar.Brand>

                    <Navbar.Toggle/>

                    <Navbar.Collapse>
                        {user && (
                            <Nav className="ml-auto">
                                <Navbar.Text>
                                    <FontAwesomeIcon icon={faUser}/> {user.first_name} {user.last_name}
                                </Navbar.Text>
                            </Nav>
                        )}
                    </Navbar.Collapse>
                </Navbar>
            </header>

            <Container as="main" className="mb-5" fluid={fluid}>
                {title && (
                    <Row className="mb-5">
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
        </UserContext.Provider>
    );
};

export default Page;
