import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAtomValue } from "jotai";
import { isLoginAtom } from "./context/AtomGlobalVariables";
import { Home, NFT, ErrorPage } from "./pages";
import { TicTacToe } from "./pages";

import NavBar from "./components/navBar/NavBar";
import AdressPanel from "./components/navBar/AdressPanel";
import "./App.css";
import "./styles/components.scss";

import Test from "./pages/test/test";
import { useEffect } from "react";

function App() {
  const isLogin = useAtomValue(isLoginAtom);

  useEffect(() => {
    //!!I need to solcve react 18 rerender problem to fix game
    console.log("Re-render problem");
  }, []);
  return (
    <Router>
      <NavBar />
      {isLogin && <AdressPanel />}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/NFTs" element={<NFT />} />

        <Route path="/games/TicTacToe" element={<TicTacToe />} />

        <Route path="/test" element={<Test />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
