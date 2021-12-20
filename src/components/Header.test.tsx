import { render, screen } from '@testing-library/react';
import { shallow, mount } from 'enzyme';
import Header from './Header';

describe('Header component', () => {
  it('renders without errors', () => {
    //Smoke test
    render(<Header />);
  });

  it('renders input element with correct placeholder text initially', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists('input')).toBe(true);
    expect(wrapper.find('input').prop('placeholder')).toMatch('Search for meetup...');
  });
});
