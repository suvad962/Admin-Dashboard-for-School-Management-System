import React from 'react';
import ReactDOM from 'react-dom';
import CreateSection from './CreateSection';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateSection />, div);
  ReactDOM.unmountComponentAtNode(div);
});
