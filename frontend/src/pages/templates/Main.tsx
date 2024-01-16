import React from 'react'
import {Box, useTheme} from "@mui/material";

interface MainProps {
    children: React.ReactNode,
}

const Main: React.FC<MainProps> = ({children}) => {
    const theme = useTheme()
    return (
        <Box sx={{
            flexGrow: 1,
            mt: `${theme.primaryAppBar.height}px`,
            height: `calc(100vh-${theme.primaryAppBar.height}px)`,
            overflow: "hidden"
        }}>
            {children}
        </Box>
    )
}
export default Main
