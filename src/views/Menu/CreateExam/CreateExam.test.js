import React from 'react';
import ReactDOM from 'react-dom';
import CreateExam from './';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateExam />, div);
  ReactDOM.unmountComponentAtNode(div);
});
