import React from "react";
import CharacterItem from "./CharacterItem";
const CharacterGrid = (props) => {
  const { items, isLoading } = props;
  if (isLoading) {
    return <h1>Loading....</h1>;
  } else {
    return (
      <section className="cards">
        {items.map((item) => {
          return <CharacterItem key={item.char_id} item={item} />;
        })}
      </section>
    );
  }
};

export default CharacterGrid;
