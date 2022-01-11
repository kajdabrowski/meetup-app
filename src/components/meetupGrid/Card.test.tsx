import { render, screen } from '@testing-library/react';
import Card from './Card';
import { Meetup } from '../../models/Meetup';
import { shallow, mount } from 'enzyme';

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
    //Ge inputen ett value för att få den defined
    //Expecta den att bli falsy, så är det ok med undefined
    const checkbox = wrapper.find('.card-input-attend');
    console.log(checkbox.html());
    expect(checkbox.props().checked).toBeFalsy();

    // console.log(checkbox.props().checked);

    // expect(screen.getByTestId('TEST')).toBeInTheDocument();

    // expect(checkbox.checked).toEqual(false);
    // expect(input).toBeChecked();

    // console.log(checkbox.html());
    // const value = checkbox.render().val();
    // console.log(value);
  });
});
