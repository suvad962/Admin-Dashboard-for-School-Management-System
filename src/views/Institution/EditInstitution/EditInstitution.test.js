import React from 'react';
import ReactDOM from 'react-dom';
import EditAdmin from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditAdmin />, div);
  ReactDOM.unmountComponentAtNode(div);
});
