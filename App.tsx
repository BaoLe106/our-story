import React from "react";
import { PaperProvider } from 'react-native-paper';
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import App from "./src/index";

const MainApp = () => (
  <Provider store={store}>
    <PaperProvider>
      <App />
    </PaperProvider>
  </Provider>
);

export default MainApp;
