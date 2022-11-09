import classes from "./User.module.css";
const User = (props) => {
  return (
    <li className={classes.movie}>
      <h1>Title: {props.title}</h1>
      <h5>Post: {props.body}</h5>
    </li>
  );
};

export default User;
