import React, { useEffect, useState } from "react";
import { actorsAPI } from "../api/blog";

export default function BlogContainer() {
  const [actors, setActors] = useState(null);

  useEffect(() => {
    getActors();
  }, []);

  const getActors = () => {
    actorsAPI
      .then((res) => {
        console.log(res.data.actors);
        setActors(res.data.actors);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (!actors) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h3>Blog container</h3>
      {actors?.map((actor, index) => (
        <div key={index}>
          <img
            src={actor.img_url}
            alt={actor.name}
            style={{ width: "200px", borderRadius: "5px" }}
          />
          {actor.name}
        </div>
      ))}
    </div>
  );
}
