import React from 'react';
import ReactDOM from 'react-dom';
import AddAcademicCalender from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddAcademicCalender />, div);
  ReactDOM.unmountComponentAtNode(div);
});
