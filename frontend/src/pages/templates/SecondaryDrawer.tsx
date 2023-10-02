import React from 'react'
import {Box, Typography, useTheme} from "@mui/material";

const SecondaryDrawer: React.FC = () => {
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
            {[...Array(10)].map((_, index) => (
                <Typography key={index} paragraph>
                    {index}
                </Typography>
            ))}
        </Box>
    )
}
export default SecondaryDrawer
