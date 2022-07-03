function MatchCard(props) {
  // console.log(data)

  const homeTeam = props.data.teams.home.name;
  const awayTeam = props.data.teams.away.name;

  return(
    <div>
      <span>
        {homeTeam}
      </span>
       -
       <span>
        {awayTeam}
       </span>
    </div>
  )
};

export default MatchCard;