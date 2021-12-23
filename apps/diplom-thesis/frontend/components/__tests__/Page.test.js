import React from 'react';
import Page from '../Page';
import Index from '../../pages/index';
import renderer from 'react-test-renderer';

it('App render index page', () => {
    const tree = renderer.create(
        <Page>
            <Index />
        </Page>
    );
    expect(tree.toJSON())
        .toMatchSnapshot();
});
