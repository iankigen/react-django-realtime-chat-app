import React from 'react'
import {Box, useTheme} from "@mui/material";

interface SecondaryDrawerProps {
    children: React.ReactNode
}

const SecondaryDrawer: React.FC<SecondaryDrawerProps> = ({children}) => {
    const theme = useTheme()
    return (
        <Box sx={{
            minWidth: theme.secondaryDrawer.width,
            height: `calc(100vh-${theme.primaryAppBar.height}px)`,
            mt: `${theme.primaryAppBar.height}px`,
            borderRight: `1px solid ${theme.palette.divider}`,
            display: {xs: "none", sm: "block"},
            overflow: "auto"
        }}>
            {children}
        </Box>
    )
}
export default SecondaryDrawer
