import Modal from "../UI/Modal/Modal";

function LoginForm(props) {
  function formSubmitHandler(event) {
    event.preventDefault();
    props.changeFormVisibility();
  }
  return (
    <Modal>
      <form className="" onSubmit={formSubmitHandler}>
        <input type="email" required></input>
        <input type="password" required></input>
        <button type="submit" className="">
          Login
        </button>
      </form>
      <button onClick={props.changeFormVisibility}>Close</button>
    </Modal>
  );
}
export default LoginForm;
