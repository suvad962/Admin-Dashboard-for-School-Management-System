import React from 'react';
import ReactDOM from 'react-dom';
import AddTeacher from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddTeacher />, div);
  ReactDOM.unmountComponentAtNode(div);
});
