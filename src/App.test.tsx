import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import Header from './components/Header';
import App from './App';

test('renders without errors', () => {
  //Smoke test
  render(<App />);
});

it('shows list of meetups matching search criteria when typing in input field', () => {
  const wrapper = mount(<App />);

  const input = wrapper.find('header input');

  const testSearchString = 'DnD';

  input.simulate('change', { target: { value: testSearchString } });

  const cards = wrapper.find('main.card-grid .card');
  const titles = cards.find('h3');

  titles.forEach((title) => {
    const actualTitle = title.text();
    expect(actualTitle.toLowerCase()).toMatch(testSearchString.toLowerCase());
  });
});
