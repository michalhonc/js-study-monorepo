import React from 'react';
import {  } from 'prop-types';
import styled from 'styled-components';

const NON_EXTENDED_ITEM = 5;

const StyledListItem = styled.li`
    list-style: none;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #eee;
    padding: 0.5rem;
`;

const StyledList = styled.ul`
    padding: 0;
    margin: 0;
`;

const StyledButton = styled.button`
    border: 0;
    padding: 0;
    margin: 0;
    background-color: transparent;
    color: #999;
    font-size: 1.4rem;
    line-height: 2rem;
    text-decoration: underline;
    cursor: pointer;
`;

const ResultsList = ({ list }) => {
    const[isExtended, setIsExtended] = React.useState(false);
    const listToRender = isExtended ? list : list.slice(0, NON_EXTENDED_ITEM);
    return (
        <>
            <StyledList>
                {listToRender.map((item, index) => {
                    return (
                        <StyledListItem key={item.id}>
                            <span>{index + 1},</span>
                            <span>{item.full_name}</span>
                            <span>{item.size}tis.</span>
                        </StyledListItem>
                    )
                })}
            </StyledList>
            {!isExtended && (
                    <StyledButton onClick={() => setIsExtended(true)}>
                        Zobrazit další
                    </StyledButton>
                )
            }
        </> 
    )
};

//ResultsList.propTypes = {
//	
//}
//
//ResultsList.defaultProps = {
//	
//}

export default ResultsList;
