import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, NFT, ErrorPage } from "./pages";
import { TicTacToe } from "./pages";
import Test from "./pages/games/test/Test";

import { useAtom, useAtomValue } from "jotai";
import { isLoginAtom, userAddressAtom, ethBalanceAtom } from "./context/AtomGlobalVariables";

import NavBar from "./components/navBar/NavBar";
import AdressPanel from "./components/navBar/AdressPanel";
import "./styles/components.scss";
import "./App.css";

function App() {
  const isLogin = useAtomValue(isLoginAtom);

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
