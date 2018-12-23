import React from 'react';
import ReactDOM from 'react-dom';
import CreateClass from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateClass />, div);
  ReactDOM.unmountComponentAtNode(div);
});
