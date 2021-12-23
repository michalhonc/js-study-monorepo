import React from 'react';
import ResultsList from '../ResultsList';
import renderer from 'react-test-renderer';

it('ResultsList render 5 items', () => {
    const list = [
        {
            id: 'xu19das0',
            full_name: 'Dotaz 1',
            size: 12,
        },
        {
            id: 'xu1ddas0',
            full_name: 'Dotaz 1',
            size: 12,
        },
        {
            id: 'fu19das0',
            full_name: 'Dotaz 1',
            size: 12,
        },
        {
            id: 'x219das0',
            full_name: 'Dotaz 1',
            size: 12,
        },
        {
            id: 'xu193as0',
            full_name: 'Dotaz 1',
            size: 12,
        },
        // ...
    ]
    const tree = renderer.create(
        <ResultsList list={list} />
    );
    expect(tree.toJSON())
        .toMatchSnapshot();
});
