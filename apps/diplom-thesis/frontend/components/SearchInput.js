import React  from 'react';
import {  } from 'prop-types';
import styled from 'styled-components';

import Icon from './Shared/Icon';

const Input = styled.input`
    width: 100%;
    padding: 1.4rem;
    border-radius: 0.4rem;
    border: 1px solid ${props => props.theme.color.borderGray};
    box-shadow: ${props => props.theme.styled.shadow};
    background-color: ${props => props.theme.color.white};
`;


const InputWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    width: 100%;
`;

const StyledIcon = styled.svg`
    position: absolute;
    height: 50%;
    margin: auto 0;
    top: 50%;
    transform: translateY(-50%);
    right: 2rem;
    fill: ${props => props.theme.color.black};
`;

const SearchInput = (props) => (
    <InputWrapper>
        <Input
            type="input"
            value={props.query}
            onChange={(e) => props.setQuery(e.target.value)}
            placeholder="Hledejte.."
        />
        <Icon icon='search' el={StyledIcon} />
    </InputWrapper>
);

export default SearchInput;