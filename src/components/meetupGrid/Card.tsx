import { Meetup } from '../../models/Meetup';

interface Props {
  meetup: Meetup;
}

const Card = ({ meetup }: Props) => (
  <section>
    <h3>{meetup.title}</h3>
    <p>{meetup.description}</p>
    <p>{meetup.comments}</p>
    <p>{meetup.rating}</p>
    <p>{meetup.date}</p>
  </section>
);

export default Card;
