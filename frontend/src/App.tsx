import React from "react";
import {RouterProvider} from "react-router-dom";
import Router from "./router.tsx";
import theme from "./theme/theme.tsx";
import {ThemeProvider} from "@mui/material";

const App: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={Router}/>
        </ThemeProvider>
    )
}
export default App
