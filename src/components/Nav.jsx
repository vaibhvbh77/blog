import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <NavLink to="/users">Listing Page </NavLink>
      <br></br>
      <br></br>
      <br></br>
      <NavLink to="/id">Id's</NavLink>
    </>
  );
};
export default NavBar;
