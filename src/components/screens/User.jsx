import classes from "/Users/test/Desktop/Assignement/blog/src/components/screens/User.module.css";
const User = (props) => {
  return (
    <li className={classes.movie}>
      <h1>{props.title}</h1>
      <h5>{props.body}</h5>
    </li>
  );
};

export default User;
