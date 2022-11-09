import { useEffect, useState } from "react";
import classes from "/Users/test/Desktop/Assignement/blog/src/components/screens/AddPost.module.css";
const AddNewPost = (props) => {
  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");
  const [isValid, setValid] = useState(true);

  useEffect(() => {
    if (title.length > 6 && body.length > 6) {
      setValid(false);
    }
  }, [title, body]);

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };

  const bodyHandler = (e) => {
    setbody(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const transformedData = {
      title: title,
      body: body,
      id: Math.random(),
    };
    setTitle("");
    setbody("");
    props.onAdd(transformedData);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={titleHandler}
          placeholder="Enter your Title for the post."
        ></input>
      </div>
      <div className={classes.control}>
        <label htmlFor="post">Body</label>
        <input
          id="post"
          type="text"
          value={body}
          onChange={bodyHandler}
          placeholder="Enter your Body for the post."
        ></input>
      </div>
      <button type="submit" disabled={isValid}>
        Add New Post
      </button>
    </form>
  );
};
export default AddNewPost;
