import ReactShallowRenderer from 'react-test-renderer/shallow'
import React from 'react';
import Header from '../../component/Header'


test('should render Header', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
  });