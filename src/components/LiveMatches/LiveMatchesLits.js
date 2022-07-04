import {useState, useEffect} from 'react';

import MatchCard from './MatchCard/MatchCard';

const LiveMatches = () => {
  const [matches, setMatches] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '16393793dbmsh4d76b449ff481c6p19207bjsn3ae3d8e407ae',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };
  
  useEffect(() => {
    fetch('https://api-football-v1.p.rapidapi.com/v3/fixtures?date=2021-07-15', options)
      .then(response => response.json())
      .then(data => {
        const matches = data.response;
        setMatches(matches);
      })
      .catch(err => console.error(err));
  }, []);

  return(
    <>
      <h2 className='title-section'>
        Live Matches Today: {matches.length}

        {matches.map(x => <MatchCard data={x} />)}
      </h2>
    </>
  )
};

export default LiveMatches; 