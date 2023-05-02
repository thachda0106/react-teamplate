import React, { ReactNode, Fragment } from "react";
import { globalStyles } from "./global.styles";
import { Global } from "@emotion/react";
import { CssBaseline } from "@mui/material";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/common/styles/scss/_common.scss";

interface PropsType {
  children: ReactNode;
}

const GlobalStyles: React.FC<PropsType> = ({ children }) => {
  return (
    <Fragment>
      <CssBaseline enableColorScheme />
      <Global styles={globalStyles} />
      {children}
    </Fragment>
  );
};

export default GlobalStyles;
