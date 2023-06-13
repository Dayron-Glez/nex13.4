'use client';

import Link from 'next/link';
import {Navbar,Nav, Container} from 'react-bootstrap'
import {usePathname} from 'next/navigation'
export default function NavBar () {
    const path = usePathname();
    return (
    <Navbar bg='primary' variant='dark' sticky='top' expand='sm' collapseOnSelect>
        <Container>
            <Navbar.Brand as={Link} href='/'>Esto suele traerte al home page</Navbar.Brand>
            <Navbar.Toggle aria-controls='main-navbar'/>
            <Navbar.Collapse id='main-navbar'>
                <Nav>
                    <Nav.Link as={Link} href='/hello' active={path === '/hello'}>Hello</Nav.Link>
                    <Nav.Link as={Link} href='/static' active={path === '/static'}>Image</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}