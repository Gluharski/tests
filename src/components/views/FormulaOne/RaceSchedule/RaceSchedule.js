import { useState, useEffect } from 'react';

import Race from './Race/Race';

export const RaceSchedule = () => {
  const [schedule, setSchedule] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '16393793dbmsh4d76b449ff481c6p19207bjsn3ae3d8e407ae',
      'X-RapidAPI-Host': 'f1-race-schedule.p.rapidapi.com'
    }
  };

  useEffect(() => {
    fetch('https://f1-race-schedule.p.rapidapi.com/api', options)
      .then(response => response.json())
      .then(data => {
        setSchedule(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      {schedule.map(x => <Race data={x} />)}
    </>
  )
};