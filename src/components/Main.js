import { useState, useEffect } from "react";

function Main() {
  const [dogs, setDogs] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        const image = data.message;

        setDogs(image);
      });
  }, []);

  return <img src={dogs} alt={dogs} />;
}

export default Main;
