import React from 'react';
import ReactDOM from 'react-dom';
import AddClassSchedule from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddClassSchedule />, div);
  ReactDOM.unmountComponentAtNode(div);
});
