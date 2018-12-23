import React from 'react';
import ReactDOM from 'react-dom';
import EditStudent from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditStudent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
