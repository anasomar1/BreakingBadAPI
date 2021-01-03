import React, { useState } from "react";

const Search = ({ setQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    setQuery(q);
  };
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search chracters..."
          autoFocus
          value={text}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
