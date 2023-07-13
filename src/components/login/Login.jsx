/* eslint-disable react/prop-types */
import foxImg from "../../assets/MetaMask_Fox.png";
import foxImg2 from "../../assets/metamask.gif";
import { Metamask } from "../../api/Metamask";
import { useEffect } from "react";
import { useAtom, useAtomValue } from "jotai";
import {
  isLoginAtom,
  userAddressAtom,
  ethBalanceAtom,
} from "../../context/AtomGlobalVariables";
import "./login.scss";

export default function Login(props) {
  const isLogin = useAtomValue(isLoginAtom);
  const [userAddress, setUserAddress] = useAtom(userAddressAtom);
  const [ethBalance, setEthBalance] = useAtom(ethBalanceAtom);

  const closeModal = () => {
    props.setOpenModal(!props.openModal);
  };

  const RequestAccount = async () => {
    const { account, ethBalance } = await Metamask();
    setUserAddress(account);
    setEthBalance(ethBalance);
  };

  return (
    <div className="overlay">
      <div className="m-container">
        <button className="btn-x" onClick={closeModal}>
          X
        </button>
        <div className="m-content">
          {!isLogin ? (
            <LoginPropt onRequestAccount={RequestAccount} />
          ) : (
            <LoginSuccess
              userAddress={userAddress}
              ethBalance={ethBalance}
              closeModal={closeModal}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function LoginPropt({ onRequestAccount }) {
  return (
    <>
      <h1>Login</h1>
      <img src={foxImg} alt="Meta_Mask_Logo"></img>
      <p>Using MetaMask</p>
      <button className="btn-login" onClick={onRequestAccount}>
        Login
      </button>
    </>
  );
}

function LoginSuccess({ userAddress, ethBalance, closeModal }) {
  return (
    <>
      <img className="img-fox2" src={foxImg2} alt="Meta_Mask_Logo"></img>
      <h2>Welcome</h2>
      <p>Address: {userAddress}</p>
      <p>Eth: {ethBalance}</p>
      <button className="btn-login" onClick={closeModal}>
        Close
      </button>
    </>
  );
}
