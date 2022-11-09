import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AddNewPost from "../AddNewPost";
import ListingAlbums from "../ListingAlbums";
import User from "./User";
import classes from "./List.module.css";

const Listing = (props) => {
  const location = useLocation();
  const userId = location.state.userId;
  const history = useHistory();

  const [showList, setShowList] = useState(false);
  const [showAlbum, setShowAlbum] = useState(false);

  const reduxId = useSelector((state) => {
    return state.id;
  });

  const [showNewUser, setNewUser] = useState(false);

  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUserHandler();
  }, []);

  const AddHandler = (obj) => {
    setUser((prev) => {
      return [...prev, obj];
    });
  };
  async function fetchUserHandler() {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    const item = data.filter((curr) => {
      return curr.userId === userId;
    });
    setUser(item);
    setLoading(false);
    console.log(item);
  }
  return (
    <>
      <h1>Welcome to the Posts Page. </h1>
      <h2>Your user id is :{reduxId}</h2>
      <button
        style={{ marginRight: "15px" }}
        onClick={() =>
          setShowAlbum((prev) => {
            return !prev;
          })
        }
      >
        Show Album
      </button>

      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Log out
      </button>
      <br></br>
      <br></br>

      <button
        style={{ marginRight: "15px" }}
        onClick={() =>
          setShowList((prev) => {
            return !prev;
          })
        }
      >
        Show Post
      </button>
      {showList && (
        <button
          style={{ marginRight: "15px" }}
          onClick={() => {
            return setNewUser((prev) => {
              return !prev;
            });
          }}
        >
          Add new post
        </button>
      )}
      {showNewUser && <AddNewPost onAdd={AddHandler} />}

      {loading && <p>Loading...</p>}

      {showAlbum && <ListingAlbums />}
      {showList && (
        <ol className={classes["movies-list"]}>
          {user.map((curr) => {
            return (
              <User title={curr.title} body={curr.body} key={curr.id}></User>
            );
          })}
        </ol>
      )}
    </>
  );
};
export default Listing;
