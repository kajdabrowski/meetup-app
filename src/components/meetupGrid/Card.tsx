import { Meetup } from '../../models/Meetup';

interface Props {
  meetup: Meetup;
}

const Card = ({ meetup }: Props) => (
  <section className="card">
    <h3 className="card-title">{meetup.title}</h3>
    <p>{meetup.description}</p>
    <p>{meetup.comments}</p>
    <p>{meetup.rating}</p>
    <p>{meetup.date}</p>
  </section>
);

export default Card;
