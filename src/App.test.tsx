import React from 'react';
import { render } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import Header from './components/Header';
import App from './App';

test('renders without errors', () => {
  //Smoke test
  render(<App />);
});

//OBS Testet failar medvetet då teststrängen endast matchar 1 titel i meetup-objektet
//OBS2 Skriv om testet så det bara matchar inskickade strängen mot 1 titel
it('shows list of meetups matching search criteria when typing in input field', () => {
  //integration test
  //render component
  const wrapper = mount(<App />);

  // shallow(<Header searchText="" setSearchText={() => {}} />);
  //Find the element
  const input = wrapper.find('header input');

  //Create simulated user search string for input field
  const testSearchString = 'DnD';
  //simulate the change event. Create fake event object where the target val is set to the simulated user search string.
  //The event target:value is from the setSearchText hook triggered by onChange event in header component.
  input.simulate('change', { target: { value: testSearchString } });

  const cards = wrapper.find('main.card-grid .card');
  const titles = cards.find('h3');

  titles.forEach((title) => {
    //console.log(title.find('h3').html()); //Visar bara 2 av 3 titlar?
    const actualTitle = title.text();
    //console.log(actualTitle)
    expect(actualTitle.toLowerCase()).toMatch(testSearchString.toLowerCase());
  });
});
