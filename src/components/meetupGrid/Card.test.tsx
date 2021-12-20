import { render, screen } from '@testing-library/react';
import Card from './Card';
import { Meetup } from '../../models/Meetup';

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
    };
    render(<Card meetup={testData} />);

    screen.getByText(testData.title, { exact: false });
    screen.getByText(testData.date, { exact: false });
  });
});
