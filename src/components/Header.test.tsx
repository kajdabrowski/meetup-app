import { render, screen } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
  it('renders without errors', () => {
    //Smoke test
    render(<Header searchText="" setSearchText={() => {}} />);
  });

  it('renders input element with correct placeholder text initially', () => {
    const wrapper = shallow(<Header searchText="" setSearchText={() => {}} />);
    //White box - an input element exists
    expect(wrapper.exists('input')).toBe(true);
    //The input element has correct placeholder text. Can change toMatch to exists.toBe(true) to only check if there is placeholder text.
    expect(wrapper.find('input').prop('placeholder')).toMatch('Search for meetup...');
  });

  it('renders empty input initially', () => {
    const wrapper = shallow(<Header searchText="" setSearchText={() => {}} />);
    const input = wrapper.find('input');
    //console.log(input.render());
    expect(input.exists()).toBe(true);
    //Render provides cheerio wrapper of input element, allowing to check its value
    const value = input.render().val();
    //expect value to exist but be empty, ie falsy (?)
    //expect(value).toBeFalsy();

    //expect value to be an empty string
    expect(value).toBe('');
  });

  //Moved integration test to app and rewrote test
  // it('shows list of meetups matching search criteria when typing in input field', () => {
  //   //render component
  //   const wrapper = shallow(<Header searchText="" setSearchText={() => {}} />);
  //   //Find the element
  //   const input = wrapper.find('input');

  //   //Create simulated user search string for input field
  //   const testSearchString = 'Yoga';
  //   //simulate the change event. Create fake event object where the target val is set to the simulated user search string.
  //   //The event target:value is from the setSearchText hook triggered by onChange event in header component.
  //   input.simulate('change', { target: { value: testSearchString } });
  // });
});
