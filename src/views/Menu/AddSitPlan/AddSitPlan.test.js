import React from 'react';
import ReactDOM from 'react-dom';
import AddSitPlan from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddSitPlan />, div);
  ReactDOM.unmountComponentAtNode(div);
});
