import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
    NProgress.start();
};
Router.onRouteChangeComplete = () => {
    NProgress.done();
};
Router.onRouteChangeError = () => {
    NProgress.done();
};

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 6rem;
    padding: 0 2rem;
    background-color: ${props => props.theme.color.red};
`;

const Logo = styled.h1`
    font-size: 1.8rem;
    a {
        padding: 0.5rem 1rem;
        color: white;
        text-decoration: none;
    }
`;

const StyledAnchor = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledImg = styled.img`
    margin-right: 1rem;
`;

const Header = () => {
    return (
        <StyledHeader>
            <Logo>
                <Link href="/">
                    <StyledAnchor>
                        <StyledImg src="/static/icons/s-logo.png" />
                        Trendy
                    </StyledAnchor>
                </Link>
            </Logo>
            <Nav />
        </StyledHeader>
    );
}
 
export default Header;