import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "../login/Login";
import "./navBar.scss";
import { useGlobalContext } from "../../context/GlobalVariables";

export default function NavBar() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/">APP-NAME</Link>

        <div>
          <NavLink to="/">Games</NavLink>
          <NavLink to="/NFTs">NFTs</NavLink>

          <SignInOut openModal={openModal} setOpenModal={setOpenModal} />
        </div>
      </nav>

      {openModal && <Login openModal={openModal} setOpenModal={setOpenModal} />}
    </>
  );
}

//sign in & sign out button appears based on conditions
function SignInOut(props) {
  const { isLogin, setUserAddress } = useGlobalContext();

  if (isLogin && props.openModal === false) {
    return (
      <button className="btn-nav-login" onClick={() => setUserAddress(null)}>
        Sign Out
      </button>
    );
  } else {
    return (
      <button
        className="btn-nav-login"
        onClick={() => {
          props.setOpenModal(true);
        }}
      >
        Login
      </button>
    );
  }
}
