import { render, screen } from '@testing-library/react';
import Card from './Card';
import { Meetup } from '../../models/Meetup';
import { mount } from 'enzyme';

describe('Card component', () => {
  it('renders without errors', () => {
    //Smoke test
    const testData: Meetup = {
      id: 1,
      title: 'Fotboll',
      date: '2021-08-12',
      description: 'Korpenboll, alla mot alla',
      comments: [],
      rating: 10,
      attending: false,
    };
    render(<Card meetup={testData} />);
  });

  it('renders meetup title and date', () => {
    //Black box test
    const testData: Meetup = {
      id: 2,
      title: 'Hockey',
      date: '2020-05-10',
      description: 'Vuxna män slåss i rustning',
      comments: [],
      rating: 5,
      attending: false,
    };
    render(<Card meetup={testData} />);

    screen.getByText(testData.title, { exact: false });
    screen.getByText(testData.date, { exact: false });
  });

  it('renders comment input with placeholder text initially', () => {
    const testData: Meetup = {
      id: 2,
      title: 'Hockey',
      date: '2020-05-10',
      description: 'Vuxna män slåss i rustning',
      comments: [],
      rating: 5,
      attending: false,
    };
    const wrapper = mount(<Card meetup={testData} />);

    const input = wrapper.find('.card-input-comment');
    expect(input.exists()).toBe(true);
    expect(input.prop('placeholder')).toMatch('Kommentera');
  });

  it('renders attending input checkbox set to false initially', () => {
    const testData: Meetup = {
      id: 2,
      title: 'Hockey',
      date: '2020-05-10',
      description: 'Vuxna män slåss i rustning',
      comments: [],
      rating: 5,
      attending: false,
    };
    const wrapper = mount(<Card meetup={testData} />);
    const checkbox = wrapper.find('.card-input-attend');
    expect(checkbox.props().checked).toBeFalsy();
  });
});
