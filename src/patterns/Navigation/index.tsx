import React, { useState, useEffect } from 'react';

import { greetings, socialLinks } from '../../../portfolio';

import Headrom from 'headroom.js';

import {
    UncontrolledCollapse,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
} from 'reactstrap';

const Navigation = () => {
    const [collapseClasses, setCollapseClasses] = useState('');

    const onNavExiting = () => setCollapseClasses('collapsing-out');
    const onNavExited = () => setCollapseClasses('');

    useEffect(() => {
        let headrom = new Headrom(document.getElementById('navbar-main'));
        headrom.init();
    });

    return (
        <>
            <header className='header-global'>
                <Navbar
                    className='navbar-main navbar-transparent navbar-light headroom'
                    expand='lg'
                    id='navbar-main'
                >
                    <Container>
                        <NavbarBrand className='mr-lg-5' href='/'>
                            <h2 className='text-white' id='nav-title'>
                                {greetings.name}
                            </h2>
                        </NavbarBrand>
                        <button
                            className='navbar-toggler'
                            aria-label='navbar_toggle'
                            id='navbar_global'
                        >
                            <span className='navbar-toggler-icon' />
                        </button>
                        <UncontrolledCollapse
                            toggler='#navbar_global'
                            navbar
                            className={collapseClasses}
                            onExiting={onNavExiting}
                            onExited={onNavExited}
                        >
                            <div className='navbar-collapse-header'>
                                <Row>
                                    <Col className='collapse-brand' xs='6'>
                                        <h3
                                            className='text-black'
                                            id='nav-title'
                                        >
                                            {greetings.name}
                                        </h3>
                                    </Col>
                                    <Col className='collapse-close' xs='6'>
                                        <button
                                            className='navbar-toggler'
                                            id='navbar_global'
                                        >
                                            <span />
                                            <span />
                                        </button>
                                    </Col>
                                </Row>
                            </div>
                            <Nav
                                className='align-items-lg-center ml-lg-auto'
                                navbar
                            >
                                {
                                    socialLinks?.github && (
                                        <NavItem>
                                            <NavLink
                                                rel='noopener'
                                                aria-label='Github'
                                                className='nav-link-icon'
                                                href={socialLinks?.github}
                                                target='_blank'
                                            >
                                                <i className='fa fa-github' />
                                                <span className='nav-link-inner--text d-lg-none ml-2'>
                                                    Github
                                                </span>
                                            </NavLink>
                                        </NavItem>
                                    )
                                }
                            </Nav>
                        </UncontrolledCollapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
}

export default Navigation