import Card from './Card';
import { Meetup } from '../../models/Meetup';

const Grid = () => {
  const testData: Meetup = {
    title: '',
    date: '',
    description: '',
    comments: [],
    rating: 10,
  };
  return (
    <main className="card-grid">
      <Card meetup={testData} />
      <Card meetup={testData} />
      <Card meetup={testData} />
      <Card meetup={testData} />
      <Card meetup={testData} />
      <Card meetup={testData} />
    </main>
  );
};

export default Grid;
