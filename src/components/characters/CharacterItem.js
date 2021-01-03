import React from "react";

const CharacterItem = ({ item }) => {
  const { name, birthday, status, img } = item;
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={img} alt="" />
        </div>
        <div className="card-back">
          <h1>{name}</h1>
          <ul>
            <li>
              <strong>Actor Name: </strong> {name}
            </li>
            <li>
              <strong>Actor Birthday: </strong> {birthday}
            </li>
            <li>
              <strong>Actor Status: </strong> {status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
