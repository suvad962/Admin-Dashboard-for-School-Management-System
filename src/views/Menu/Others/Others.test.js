import React from 'react';
import ReactDOM from 'react-dom';
import Others from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Others />, div);
  ReactDOM.unmountComponentAtNode(div);
});
