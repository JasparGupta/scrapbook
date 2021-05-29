import { faBook, faSignInAlt, faSignOutAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { UserContext } from '@lib/contexts';
import { url } from '@lib/utils';
import { format } from 'date-fns';
import { signIn, signOut, useSession } from 'next-auth/client';
import { FC } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container, { ContainerProps } from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Head from 'next/head';
import Dropdown from 'react-bootstrap/Dropdown';
import { fullName } from '@lib/utils/user';

interface Props extends Pick<ContainerProps, 'fluid'> {
    title?: string,
}

const Page: FC<Props> = ({ children, fluid, title }) => {
    const [session, loading] = useSession();

    return (
        <>
            <Head>
                <title>Scrapbook{title ? ` | ${title}` : ''}</title>
            </Head>

            <UserContext.Provider value={session?.user}>
                <header>
                    <Navbar variant="light">
                        <Navbar.Brand href={url('/')}>
                            <FontAwesomeIcon
                                className="text-muted"
                                icon={faBook}
                            /> {process.env.NEXT_PUBLIC_APP_NAME}
                        </Navbar.Brand>

                        <Navbar.Toggle />

                        <Navbar.Collapse>
                            <Nav className="ml-auto">
                                {!loading && (
                                    <>
                                        {session
                                            ? (
                                                <Dropdown>
                                                    <Dropdown.Toggle variant="light">
                                                        <FontAwesomeIcon icon={faUser} className="text-muted" /> {fullName(session.user)}
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item onClick={() => signOut()}>
                                                            <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            )
                                            : (
                                                <Button onClick={() => signIn()} variant="light">
                                                    <FontAwesomeIcon icon={faSignInAlt} /> Sign In
                                                </Button>
                                            )}
                                    </>
                                )}
                            </Nav>
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
        </>
    );
};

export default Page;
