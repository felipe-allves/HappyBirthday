import { useParams } from "react-router-dom";
import Hero from '../Components/Hero/Hero';
import Message from '../Components/Message/Message';
import Gallery from '../Components/Gallery/Gallery';
import Music from '../Components/Music/Music';
import Countdown from '../Components/Countdown/Countdown';

export default function PersonPage({ people }) {
  const { name } = useParams();
  const person = people[name];

  if (!person) {
    return <h1>Pessoa não encontrada</h1>;
  }

  return (
    <>
      <Hero age={person.age} />
      <Message messages={person.messages} />
      <Gallery images={person.gallery} />
      <Music tracks={person.music} />
      <Countdown birthday={person.birthday} />
    </>
  );
}
