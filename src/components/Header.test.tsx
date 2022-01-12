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
    expect(wrapper.find('input').prop('placeholder')).toMatch('Search for meetup...');
  });

  it('renders empty input initially', () => {
    const wrapper = shallow(<Header searchText="" setSearchText={() => {}} />);
    const input = wrapper.find('input');
    expect(input.exists()).toBe(true);
    const value = input.render().val();
    expect(value).toBe('');
  });
});
