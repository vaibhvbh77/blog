import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ListingAlbums() {
  const [albums, setAlbums] = useState([]);

  const reduxId = useSelector((state) => {
    return state.id;
  });
  useEffect(() => {
    fetchAlbums();
  }, []);

  async function fetchAlbums() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums");
    const data = await response.json();
    setAlbums(
      data.filter((curr) => {
        return curr.userId === reduxId;
      })
    );
  }

  return (
    <div style={{ color: "white" }}>
      {console.log(albums)}
      <h1>These are the Albums for the id:{reduxId}</h1>
      <ol>
        {albums.map((curr) => {
          return <li key={curr.id}>{curr.title}</li>;
        })}
      </ol>
    </div>
  );
}
