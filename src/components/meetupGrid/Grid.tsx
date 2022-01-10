import Card from './Card';
import { Meetup } from '../../models/Meetup';

const data: Meetup[] = [
  {
    id: 1,
    title: 'Yoga i parken',
    date: '1984-05-05',
    description: 'Solhälsningar på gräsmattan',
    comments: ['Detta är en kommentar'],
    rating: 5,
  },
  {
    id: 2,
    title: 'DnD i källaren',
    date: '2020-05-05',
    description: 'Svettiga nördar gör svettiga saker',
    comments: [],
    rating: 8,
  },
  {
    id: 3,
    title: 'Karate på systembolaget',
    date: '2022-05-05',
    description: 'Vi leker Bruce Lee vid rödvinshyllan',
    comments: [],
    rating: 10,
  },
];

interface Props {
  searchString: string;
}

const Grid = ({ searchString }: Props) => {
  const filteredData = data.filter((meetup) => meetup.title.toLowerCase().includes(searchString.toLowerCase()));

  return (
    <main className="card-grid">
      {filteredData.map((meetup) => (
        <Card key={meetup.id} meetup={meetup} />
      ))}
    </main>
  );
};

export default Grid;
