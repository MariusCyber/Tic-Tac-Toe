import "./App.css";
import TicTacToe from "./components/TictTacToe";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
const checkLogIn = () => {};
function App() {
  useEffect(() => {
    checkLogIn();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
