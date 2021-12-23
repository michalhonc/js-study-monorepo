import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import Header from './Header/Header';
import Meta from './Header/Meta';

import theme from './styles/config/config';
import { MenuProvider } from './Menu/MenuContext';
import Menu from './Menu/Menu';
  

const StyledPage = styled.div`
    color: ${props => props.theme.color.black};
    position: relative;
`;

const Inner = styled.div`
    max-width: ${props => props.theme.size.maxWidth};
    margin: 0 auto;
    padding: 2rem;
`;

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 10px;
        font-family: 'Arial CE', Arial, 'Helvetica CE', Helvetica, sans-serif;
        font-weight: normal;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        padding: 0;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
        height: 100%;
        background-color: ${props => props.theme.color.backgroundGray}
    }

    a {
        text-decoration: none;
        color: ${theme.black};
    }

    h1 {
        font-size: 34px;
        line-height: 48px;
        margin: 0;
    }
    h2 {
        font-size: 24px;
        line-height: 32px;
    }
    h3 {
        font-size: 20px;
        line-height: 32px;
    }
    h4 {
        font-size: 16px;
        line-height: 24px;
    }
    h5 {
        font-size: 14px;
        line-height: 24px;
    }
    h6 {
        font-size: 12px;
        line-height: 24px;
    }
`;

class Page extends Component {
    render() { 
        return (
            <ThemeProvider theme={theme}>
                <MenuProvider>
                    <StyledPage>
                        <Meta />
                        <Menu />
                        <Header />
                        <Inner>
                            {this.props.children}
                        </Inner>
                        <GlobalStyle theme={theme} />
                    </StyledPage>
                </MenuProvider>
            </ThemeProvider>
        );
    }
}
 
export default Page;