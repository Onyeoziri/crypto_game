import { useGlobalContext } from "../../context/GlobalVariables";
import "./navBar.scss";

export default function AdressPanel() {
  const { userAddress } = useGlobalContext();
  return (
    <div className="a-panel">
      <p>Your Wallet Adress: {userAddress}</p>
    </div>
  );
}
