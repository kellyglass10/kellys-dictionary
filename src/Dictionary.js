import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleDictionaryResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "09ofabt96a856ac54d57c0bab329361b";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
  }

  function handleKeyWordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyWordChange} />
      </form>
    </div>
  );
}
