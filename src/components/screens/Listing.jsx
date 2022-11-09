import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AddNewPost from "../AddNewPost";
import User from "./User";
import classes from "/Users/test/Desktop/Assignement/blog/src/components/screens/List.module.css";
const Listing = (props) => {
  const location = useLocation();
  const userId = location.state.userId;
  const history = useHistory();

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
      <h2>Your user id is :{userId}</h2>
      <button
        onClick={() => {
          return setNewUser((prev) => {
            return !prev;
          });
        }}
      >
        Add new post
      </button>

      <button
        onClick={() => {
          history.push("/");
        }}
      >
        Log out
      </button>

      {showNewUser && <AddNewPost onAdd={AddHandler} />}

      {loading && <p>Loading...</p>}
      <ol className={classes["movies-list"]}>
        {user.map((curr) => {
          return (
            <User title={curr.title} body={curr.body} key={curr.id}></User>
            // <li key={curr.id}>
            //   <h1>{curr.title}</h1>
            //   <h5>{curr.body}</h5>
            // </li>
          );
        })}
      </ol>
    </>
  );
};
export default Listing;
