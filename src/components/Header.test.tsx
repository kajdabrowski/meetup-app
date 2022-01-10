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
});
