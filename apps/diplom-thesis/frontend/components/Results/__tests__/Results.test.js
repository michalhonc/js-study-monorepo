import React from 'react';
import Results from '../Results';
import renderer from 'react-test-renderer';

it('Results render 5 items', async () => {
    fetch.mockResponse(() => callMyApi().then(res => ({body: res})));

    const tree = renderer.create(<Results query="gaearon" />);
    await Promise.resolve();
    expect(tree.toJSON()).toMatchSnapshot();
});
