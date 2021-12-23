import React from 'react';
import {  } from 'prop-types';
import styled from 'styled-components';

import SearchInput from '../components/SearchInput';
import Results from '../components/Results/Results';

const Index = () => {
    const [query, setQuery] = React.useState('');

    return (
        <>
            <SearchInput query={query} setQuery={setQuery} />
            <Results query={query} />
        </>
    );
};

export default Index;