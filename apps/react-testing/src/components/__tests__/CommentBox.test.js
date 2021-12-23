import React from 'react';
import { mount } from 'enzyme';
import Root from '../../Root';
import CommentBox from '../CommentBox';
import { wrap } from 'module';

let wrapped;

beforeEach(() => {
   wrapped = mount(<Root><CommentBox /></Root>);
});

afterEach(() => {
   wrapped.unmount();
});

it('has a text area and two buttons', () => {
   expect(wrapped.find('textarea').length).toEqual(1);
   expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area', () => {
   beforeEach(() => {
      wrapped.find('textarea').simulate('change', {
         target: { value: 'New comment' }
      });
      wrapped.update();
   });

   it('has a textarea that users can type in', () => {
      expect(wrapped.find('textarea').prop('value')).toEqual('New comment');
   });

   it('is emptied after form has been submited', () => {
      wrapped.find('form').simulate('submit');
      wrapped.update();
      expect(wrapped.find('textarea').prop('value')).toEqual('');
   });
})