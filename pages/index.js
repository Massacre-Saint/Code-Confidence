import { useEffect, useState } from 'react';
import { LearnedTechStart, LearnedTechView } from '../components/containers';
import { useAuth } from '../utils/context/authContext';
import { getLearnedTech, getTech } from '../utils/data';
import { Loading, Message } from '../components';

function Home() {
  const { user } = useAuth();
  const [learnedTech, setLearnedTech] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const loader = () => {
    getTech().then(async (array) => {
      const userTech = await getLearnedTech(user, array);
      setLearnedTech(userTech);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    loader();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (isLoading) {
    return <Loading />;
  }

  if (learnedTech.length === 0) {
    return (
      <>
        <LearnedTechStart onUpdate={loader} />
      </>
    );
  }
  return (
    <div className="home">
      <div className="quick-bar-container" />
      <div className="message-container">
        <Message />
      </div>
      <LearnedTechView tech={learnedTech} />
    </div>
  );
}
export default Home;
