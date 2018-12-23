import React from 'react';
import ReactDOM from 'react-dom';
import CreateNotice from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateNotice />, div);
  ReactDOM.unmountComponentAtNode(div);
});
