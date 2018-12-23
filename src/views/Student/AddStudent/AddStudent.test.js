import React from 'react';
import ReactDOM from 'react-dom';
import AddStudent from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddStudent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
