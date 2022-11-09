import classes from "/Users/test/Desktop/Assignement/blog/src/components/ErrorModal.module.css";
import Card from "./Card";
const Modal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} />
      <div className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <button onClick={props.onOkay}>Try Again</button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
