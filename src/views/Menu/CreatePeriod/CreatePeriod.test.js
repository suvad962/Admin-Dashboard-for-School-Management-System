import React from 'react';
import ReactDOM from 'react-dom';
import CreatePeriod from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(<CreatePeriod />, div);
  ReactDOM.unmountComponentAtNode(div);
});
