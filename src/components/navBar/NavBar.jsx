/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "../login/Login";
import "./navBar.scss";
import { useAtom, useAtomValue } from "jotai";
import { isLoginAtom, userAddressAtom } from "../../context/AtomGlobalVariables";

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
function SignInOut({ openModal, setOpenModal }) {
  const isLogin = useAtomValue(isLoginAtom);
  const [_, setUserAddress] = useAtom(userAddressAtom);

  if (isLogin && openModal === false) {
    return (
      <button
        className="btn-nav-login"
        onClick={() => {
          setUserAddress(null);
          localStorage.clear();
        }}
      >
        Sign Out
      </button>
    );
  } else {
    return (
      <button
        className="btn-nav-login"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Login
      </button>
    );
  }
}
