import React, { useState } from 'react';
import { Meetup } from '../../models/Meetup';

interface Props {
  meetup: Meetup;
}

const Card = ({ meetup }: Props) => {
  //comment
  const [comment, setComment] = useState<string>('');
  const [comments, setComments] = useState<string[]>([...meetup.comments]);

  const commentOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setComment(target.value);
  };

  const addComment = () => {
    setComments([...comments, comment]);
  };
  //Attend
  const [attend, setAttend] = useState<boolean>(false);

  const handleAttend = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setAttend(target.checked);
  };

  return (
    <section className="card">
      <h3 className="card-title">{meetup.title}</h3>
      <p>{meetup.date}</p>
      <p>{meetup.description}</p>
      {comments.map((comment, index) => (
        <p key={index}>{comment}</p>
      ))}
      <label htmlFor="checkbox">Attend event: </label>
      <input type="checkbox" onChange={handleAttend} />
      <p>{meetup.rating}</p>
      <input onChange={commentOnChange} placeholder="Kommentera"></input>
      <button onClick={addComment}>Lägg till kommentar</button>
    </section>
  );
};

export default Card;
