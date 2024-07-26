import checkWin from "./helper-functions/checkWin";
import { useEffect, useState } from "react";

const TicTacToe = () => {
  const [turn, setTurn] = useState(1);
  const [score, setScore] = useState<{ x: string; o: string }[]>([]);
  const [state, setState] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  useEffect(() => {
    const result = checkWin(state);
    if (result) {
      if (result === "Tie") {
        setMessage("The game is a tie!");
      } else {
        setMessage(`Player ${result} wins!`);
        if (result === "✕") {
          setScore([...score, { x: "win", o: "" }]);
        } else {
          setScore([...score, { x: "", o: "win" }]);
        }
      }
    }
  }, [state]);

  const [message, setMessage] = useState("");

  const handleClick = (square: number) => {
    if (!message) {
      let temp = state;
      let changed = false;

      switch (square) {
        case 1:
          if (temp[0][0] === "") {
            temp[0][0] = turn === 1 ? "✕" : "O";
            changed = true;
          }
          break;
        case 2:
          if (temp[0][1] === "") {
            temp[0][1] = turn === 1 ? "✕" : "O";
            changed = true;
          }
          break;
        case 3:
          if (temp[0][2] === "") {
            temp[0][2] = turn === 1 ? "✕" : "O";
            changed = true;
          }
          break;
        case 4:
          if (temp[1][0] === "") {
            temp[1][0] = turn === 1 ? "✕" : "O";
            changed = true;
          }
          break;
        case 5:
          if (temp[1][1] === "") {
            temp[1][1] = turn === 1 ? "✕" : "O";
            changed = true;
          }
          break;
        case 6:
          if (temp[1][2] === "") {
            temp[1][2] = turn === 1 ? "✕" : "O";
            changed = true;
          }
          break;
        case 7:
          if (temp[2][0] === "") {
            temp[2][0] = turn === 1 ? "✕" : "O";
            changed = true;
          }
          break;
        case 8:
          if (temp[2][1] === "") {
            temp[2][1] = turn === 1 ? "✕" : "O";
            changed = true;
          }
          break;
        case 9:
          if (temp[2][2] === "") {
            temp[2][2] = turn === 1 ? "✕" : "O";
            changed = true;
          }
          break;
      }
      setState([...temp]);
      if (changed) setTurn(turn * -1);
    }
  };
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          "linear-gradient(to right top, #dbe0e6, #d3eaf1, #ccf4f1, #d3fce4, #edffd2)",
      }}
    >
      <div>
        <h1
          style={{
            textAlign: "center",
            marginTop: "-20vh",
            fontWeight: "bold",
          }}
        >
          Tic Tac Toe{" "}
        </h1>
        <h2
          style={{
            width: "300px",
            height: "30px",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          {message}
        </h2>
        <table style={{ position: "relative" }}>
          <div
            id="score-board"
            style={{
              position: "absolute",
              width: "100px",
              height: "152px",
              border: "1px solid grey",
              left: "200px",
              overflowY: "scroll",
            }}
          >
            <div
              style={{
                border: "1px solid grey",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div>✕</div>
                <div>O</div>
              </div>
              {score.map((s) => {
                return (
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <div>{s.x ? "WIN" : "-"}</div>
                    <div>{s.o ? "WIN" : "-"}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <tr>
            <td
              className={
                state[0][0] === ""
                  ? turn === 1
                    ? "td-x-hover"
                    : "td-o-hover"
                  : state[0][0] === "✕"
                  ? "td-x"
                  : "td-o"
              }
              onClick={() => handleClick(1)}
            >
              {state[0][0]}
            </td>
            <td
              className={
                state[0][1] === ""
                  ? turn === 1
                    ? "td-x-hover"
                    : "td-o-hover"
                  : state[0][1] === "✕"
                  ? "td-x"
                  : "td-o"
              }
              onClick={() => handleClick(2)}
            >
              {state[0][1]}
            </td>
            <td
              className={
                state[0][2] === ""
                  ? turn === 1
                    ? "td-x-hover"
                    : "td-o-hover"
                  : state[0][2] === "✕"
                  ? "td-x"
                  : "td-o"
              }
              onClick={() => handleClick(3)}
            >
              {state[0][2]}
            </td>
          </tr>
          <tr>
            <td
              className={
                state[1][0] === ""
                  ? turn === 1
                    ? "td-x-hover"
                    : "td-o-hover"
                  : state[1][0] === "✕"
                  ? "td-x"
                  : "td-o"
              }
              onClick={() => handleClick(4)}
            >
              {state[1][0]}
            </td>
            <td
              className={
                state[1][1] === ""
                  ? turn === 1
                    ? "td-x-hover"
                    : "td-o-hover"
                  : state[1][1] === "✕"
                  ? "td-x"
                  : "td-o"
              }
              onClick={() => handleClick(5)}
            >
              {state[1][1]}
            </td>
            <td
              className={
                state[1][2] === ""
                  ? turn === 1
                    ? "td-x-hover"
                    : "td-o-hover"
                  : state[1][2] === "✕"
                  ? "td-x"
                  : "td-o"
              }
              onClick={() => handleClick(6)}
            >
              {state[1][2]}
            </td>
          </tr>
          <tr>
            <td
              className={
                state[2][0] === ""
                  ? turn === 1
                    ? "td-x-hover"
                    : "td-o-hover"
                  : state[2][0] === "✕"
                  ? "td-x"
                  : "td-o"
              }
              onClick={() => handleClick(7)}
            >
              {state[2][0]}
            </td>
            <td
              className={
                state[2][1] === ""
                  ? turn === 1
                    ? "td-x-hover"
                    : "td-o-hover"
                  : state[2][1] === "✕"
                  ? "td-x"
                  : "td-o"
              }
              onClick={() => handleClick(8)}
            >
              {state[2][1]}
            </td>
            <td
              className={
                state[2][2] === ""
                  ? turn === 1
                    ? "td-x-hover"
                    : "td-o-hover"
                  : state[2][2] === "✕"
                  ? "td-x"
                  : "td-o"
              }
              onClick={() => handleClick(9)}
            >
              {state[2][2]}
            </td>
          </tr>
        </table>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button
            style={{
              alignSelf: "center",
              marginTop: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              setState([
                ["", "", ""],
                ["", "", ""],
                ["", "", ""],
              ]);
              setMessage("");
            }}
          >
            {message ? "Play again" : "reset"}
          </button>
        </div>
      </div>
    </div>
  );
};
export default TicTacToe;
