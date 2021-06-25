import React, { useEffect, useState } from "react";
import "./SearchResults.css";

export default function SearchResults() {
  const [query, setQuery] = useState("react");
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    fetch("https://hn.algolia.com/api/v1/search?query=" + query)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, [query]);

  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      {data.hits.map((info) => {
        return (
          <div>
            <a href={info.url}> {info.title} </a>
          </div>
        );
      })}
    </div>
  );
}
