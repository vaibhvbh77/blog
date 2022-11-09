import { useEffect, useState } from "react";
import Modal from "./Modal";
import classes from "./screens/AddPost.module.css";
const AddNewPost = (props) => {
  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");
  const [isValid, setValid] = useState(true);
  const [showModal, setModal] = useState(false);

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
    console.log("items");
    if (title.length === 0 && body.length === 0) {
      setModal(true);
      return;
    }
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
    <div>
      {showModal && (
        <Modal
          title="An error occured!"
          message="Sorry your title and body length is too low!"
          onOkay={() => {
            setModal(false);
          }}
        />
      )}
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AddNewPost;
