import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import classes from "/Users/test/Desktop/Assignement/blog/src/components/screens/AddUser.module.css";
const Form = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [error, setError] = useState();
  const [userError, setUserError] = useState();
  const [id, setId] = useState();

  const [list, setList] = useState(false);
  //   const [targeteduser, setTarget] = useState("");
  const [users, setUsers] = useState([]);

  const changeHandler = (event) => {
    setEmail(event.target.value);
  };

  const onSubmitHandler = (event) => {
    setUserError(false);
    event.preventDefault();
    // setError(false);

    const targetedUser = users.filter((curr) => {
      return curr.email === email;
    });

    if (targetedUser.length === 0 && email.length !== 0) {
      setError(true);
    }
    if (targetedUser.length === 0) {
      setUserError(true);
    }
    if (targetedUser.length > 0) {
      setList(true);

      setId(targetedUser[0].id);
      console.log(id);
      // props.onId(targetedUser[0].id);

      // console.log(id);
    }
  };

  useEffect(() => {
    {
      list && history.push({ pathname: "/user", state: { userId: id } });
    }
  }, [id]);

  useEffect(() => {
    fetchUserHandler();
  }, []);

  async function fetchUserHandler() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Some network error Occured!");
      }
      const data = await response.json();

      setUsers(data);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          value={email}
          placeholder="Enter your email here"
          onChange={changeHandler}
        ></input>
        <br></br>
        <br></br>
        <button>LogIn</button>
      </form>
      {error && <p>{error}</p>}

      {list && <h1>Welcome your id is {id}</h1>}
      {userError && <p>You have typed incorrect email please try again.</p>}

      {list && <button onClick={onSubmitHandler}>Posts</button>}
    </>
  );
};

export default Form;
