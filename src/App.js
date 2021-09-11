import React from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const setLogin = () => dispatch({ type: "login" });

  const { loggedIn } = state;
  return (
    <div>
      <button onClick={setLogin}>login</button>
      <div>
        logged in state: {loggedIn ? "yes" : "no"}
      </div>
    </div>
  );
};

export default App;
