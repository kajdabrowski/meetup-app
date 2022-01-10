import { useState } from 'react';
import { Meetup } from '../../models/Meetup';

interface Props {
  meetup: Meetup;
}

const Card = ({ meetup }: Props) => {
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<string[]>([...meetup.comments]);

  const commentOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setComment(target.value);
  };

  const addComment = () => {
    setComments([...comments, comment]);
  };

  return (
    <section className="card">
      <h3 className="card-title">{meetup.title}</h3>
      <p>{meetup.description}</p>
      {comments.map((comment, index) => (
        <p key={index}>{comment}</p>
      ))}
      <p>{meetup.rating}</p>
      <p>{meetup.date}</p>
      <input onChange={commentOnChange} placeholder="Kommentera"></input>
      <button onClick={addComment}>Lägg till kommentar</button>
    </section>
  );
};

export default Card;
