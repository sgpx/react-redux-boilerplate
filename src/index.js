import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./reduxStore/configureStore";
import { PersistGate } from "redux-persist/integration/react";

const { store, persistor } = configureStore();
const rootElement = document.querySelector("#root");
const Target = () => (
  <Provider store={store}>
    <PersistGate
      persistor={persistor}
      loading={<React.Fragment>loading..</React.Fragment>}
    >
      <App />
    </PersistGate>
  </Provider>
);

ReactDOM.render(<Target />, rootElement);
