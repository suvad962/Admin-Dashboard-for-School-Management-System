import React from 'react';
import ReactDOM from 'react-dom';
import StudentProfile from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<StudentProfile />, div);
  ReactDOM.unmountComponentAtNode(div);
});
