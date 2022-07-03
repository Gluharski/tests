import {useState, useEffect} from 'react';

export const RaceSchedule = () => {
  const [schedule, setSchedule] = useState('');
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
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }, []);

  return(
    <>
      <h2 className='title-section'>
        F1 Schedule Component
      </h2>
      {schedule}
    </>
  )
};