import React from 'react';
import ReactDOM from 'react-dom';
import EditTeacher from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditTeacher />, div);
  ReactDOM.unmountComponentAtNode(div);
});
