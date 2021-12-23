import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Icon from '../Shared/Icon';
import { MenuContext } from '../Menu/MenuContext';
import Button from '../styles/Button';

const NavStyled = styled.nav`
    display: flex;
    /* margin: auto 5rem; */
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    line-height: 2;
    font-weight: bold;
    text-transform: uppercase;
    a {
        color: ${props => props.theme.color.white};
    }
`;

const MenuStyled = styled.svg`
    height: 3.2rem;
    width: 3.2rem;
    fill: ${props => props.theme.color.white};
`;

const Nav = () => {
    const { state, dispatch } = React.useContext(MenuContext);

    return (
        <NavStyled>
            <Button onClick={() => dispatch({ type: 'open' })} style={{ display: 'flex' }}>
                <Icon icon="menu" el={MenuStyled} />
            </Button>
        </NavStyled>
    );
}
 
export default Nav;