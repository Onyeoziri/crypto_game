import foxImg from "../../assets/MetaMask_Fox.png";
import foxImg2 from "../../assets/metamask.gif";
import { Metamask } from "../../api/Metamask";
import { useGlobalContext } from "../../context/GlobalVariables";
import { useEffect } from "react";
import "./login.scss";

export default function Login(props) {
  const { isLogin } = useGlobalContext();

  const closeModal = () => {
    props.setOpenModal(!props.openModal);
  };

  return (
    <div className="overlay">
      <div className="m-container">
        <button className="btn-x" onClick={closeModal}>
          X
        </button>
        <div className="m-content">
          {!isLogin ? <LoginPropt /> : <LoginSuccess closeModal={closeModal} />}
        </div>
      </div>
    </div>
  );
}

function LoginPropt() {
  const { setUserAddress, setEthBalance } = useGlobalContext();

  const RequestAccount = async () => {
    const { account, ethBalance } = await Metamask();
    console.log(`Your Accountis : ${account} and Eth Balance: ${ethBalance}`);
  };

  return (
    <>
      <h1>Login</h1>
      <img src={foxImg} alt="Meta_Mask_Logo"></img>
      <p>Using MetaMask</p>
      <button className="btn-login" onClick={RequestAccount}>
        Login
      </button>
    </>
  );
}

function LoginSuccess(props) {
  return (
    <>
      <img className="img-fox2" src={foxImg2} alt="Meta_Mask_Logo"></img>
      <h2>Welcome</h2>
      <p>Address:</p>
      <p>Eth:</p>
      <button className="btn-login" onClick={props.closeModal}>
        Close
      </button>
    </>
  );
}
