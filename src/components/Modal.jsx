import classes from "/Users/test/Desktop/Assignement/blog/src/components/ErrorModal.module.css";
import Card from "./Card";
const Modal = () => {
  return (
    <div>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>Error Ocured</h2>
        </header>
        <div className={classes.content}>
          <p>You have entered an incorrect email.</p>
        </div>
        <footer className={classes.actions}>
          <button>Try Again</button>
        </footer>
      </Card>
    </div>
  );
};
export default Modal;
