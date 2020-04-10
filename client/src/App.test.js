import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);

});

test('testing to make it work', () => {
  const {getByText} = render(<App />)
  const headerText = getByText(/2019 Womens World Cup/i)
  expect(headerText).toBeVisible();

});