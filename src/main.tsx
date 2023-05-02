import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "@/common/components/global";
import { store } from "@/store";
import { Provider } from "react-redux";
import AppTheme from "@/common/styles/theme/app.theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppTheme>
          <GlobalStyles>
            <App />
          </GlobalStyles>
        </AppTheme>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
