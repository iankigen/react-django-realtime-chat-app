import React from 'react'
import {Box, useTheme} from "@mui/material";

const Main: React.FC = () => {
    const theme = useTheme()
    return (
        <Box sx={{
            flexGrow: 1,
            mt: `${theme.primaryAppBar.height}px`,
            height: `calc(100vh-${theme.primaryAppBar.height}px)`,
            overflow: "hidden"
        }}>
            Main:React.FC
        </Box>
    )
}
export default Main
