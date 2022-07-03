import { useEffect, useState } from 'react';

import {PlayerCard} from './PlayerCard/PlayerCard';

const TopScorers = () => {
  const [topScorers, setTopScorers] = useState([]);
  const [season, setSeason] = useState('');
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '16393793dbmsh4d76b449ff481c6p19207bjsn3ae3d8e407ae',
      'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch('https://api-football-v1.p.rapidapi.com/v3/players/topscorers?league=39&season=2020', options)
      .then(response => response.json())
      .then(data => {
        const season = data.parameters.season;
        const players = data.response;

        setSeason(season);
        setTopScorers(players);

      })
      .catch(err => console.error(err));
  },[]);

  return(
    <>
      <h2>Season: {season}</h2>
      <ul>
        {topScorers.map(x => <PlayerCard data={x} />)}
      </ul>
    </>
  )
};

export default TopScorers;