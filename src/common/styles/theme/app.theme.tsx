import React, { ReactNode } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { selectAppMode } from "@/store/app.selectors";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/common/styles/scss/_common.scss";

interface PropsType {
  children: ReactNode;
}

const Theme: React.FC<PropsType> = ({ children }) => {
  const mode = useSelector(selectAppMode);

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#3fb59f"
          },
          secondary: {
            main: "#f50057"
          }
        }
      }),
    [mode]
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
