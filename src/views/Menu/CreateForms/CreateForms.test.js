import React from 'react';
import ReactDOM from 'react-dom';
import CreateForms from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateForms />, div);
  ReactDOM.unmountComponentAtNode(div);
});
