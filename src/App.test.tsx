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
  //integration test
  //render component
  const wrapper = mount(<App />);

  // shallow(<Header searchText="" setSearchText={() => {}} />);
  //Find the element
  const input = wrapper.find('header input');

  //Create simulated user search string for input field
  const testSearchString = 'Yoga';
  //simulate the change event. Create fake event object where the target val is set to the simulated user search string.
  //The event target:value is from the setSearchText hook triggered by onChange event in header component.
  input.simulate('change', { target: { value: testSearchString } });

  const cards = wrapper.find('main.card-grid .card');
  const titles = cards.find('h3');

  titles.forEach((title) => {
    //console.log(title.find('h3').html());
    const actualTitle = title.text();
    //console.log(actualTitle)
    expect(actualTitle).toMatch(testSearchString);
  });
});
