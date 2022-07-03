export const PlayerCard = ({data}) => {
  console.log(data)
  return(
    <>
      <article className="top-scorers">
        <div className="aside-image-container">
          <img src={data.player.photo} alt={data.player.photo || data.player.name} />
        </div>

        <div className="main-container">
          <h2>{data.player.name}</h2>
          <p>
            height: {data.player.height} 
          </p>

          <p>
            weight: {data.player.weight}
          </p>

          <p>
            age: {data.player.age}
          </p>
          {/* height, weight, age */}
          {/* birth => place, country */}
        </div>
      </article>
    </>
  )
};