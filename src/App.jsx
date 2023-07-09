import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useGlobalContext } from "./context/GlobalVariables";
import { Home, NFT, ErrorPage } from "./pages";
import { TicTacToe } from "./pages";

import NavBar from "./components/navBar/NavBar";
import AdressPanel from "./components/navBar/AdressPanel";
import "./App.css";
import "./styles/components.scss";

import Test from "./pages/test/test";

function App() {
  return (
    <Router>
      <NavBar />
      <AdressBar />
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

function AdressBar() {
  const { isLogin } = useGlobalContext();
  return <>{isLogin && <AdressPanel />}</>;
}

export default App;
