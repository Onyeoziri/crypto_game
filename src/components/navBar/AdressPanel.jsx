import { useAtomValue } from "jotai";
import { userAddressAtom } from "../../context/AtomGlobalVariables";
import "./navBar.scss";

export default function AdressPanel() {
  const userAddress = useAtomValue(userAddressAtom);

  return (
    <div className="a-panel">
      <p>Your Wallet Adress: {userAddress}</p>
    </div>
  );
}
