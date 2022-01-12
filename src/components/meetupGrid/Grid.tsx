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
    attending: false,
  },
  {
    id: 2,
    title: 'DnD i källaren',
    date: '2020-05-05',
    description: 'Svettiga nördar gör svettiga saker',
    comments: [],
    rating: 8,
    attending: false,
  },
  {
    id: 3,
    title: 'Karate på systembolaget',
    date: '2021-05-05',
    description: 'Vi leker Bruce Lee vid rödvinshyllan',
    comments: [],
    rating: 10,
    attending: false,
  },
  {
    id: 4,
    title: 'Kramkalas på ITHS',
    date: '2021-07-05',
    description: 'Myspys',
    comments: [],
    rating: 7,
    attending: false,
  },
  {
    id: 5,
    title: 'Lindyhop på parkeringen',
    date: '2022-03-10',
    description: 'Sladda med pv:n, skaka på göten',
    comments: [],
    rating: 10,
    attending: false,
  },
  {
    id: 6,
    title: 'Gyttjebrottning i tantolunden',
    date: '2022-06-01',
    description: 'Man mot man i leran',
    comments: [],
    rating: 10,
    attending: false,
  },
];

interface Props {
  searchString: string;
}

const Grid = ({ searchString }: Props) => {
  const filteredData = data.filter((meetup) => meetup.title.toLowerCase().includes(searchString.toLowerCase()));

  return (
    <main className="card-grid component">
      {filteredData.map((meetup) => (
        <Card key={meetup.id} meetup={meetup} />
      ))}
    </main>
  );
};

export default Grid;
