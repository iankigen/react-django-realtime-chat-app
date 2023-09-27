import React from "react";
import {
    AppBar, Link,
    Toolbar, Typography, useTheme,
} from "@mui/material";


export const PrimaryAppBar: React.FC = () => {
    const theme = useTheme()

    return (
        <AppBar position="static" sx={{
            backgroundColor: theme.palette.background.default,
            borderBottom: `1px solid ${theme.palette.divider}`,
        }}>
            <Toolbar
                variant="dense"
                sx={{
                    height: theme.primaryAppBar.height,
                    minHeight: theme.primaryAppBar.minHeight,
                }}>
                <Link href='/' underline="none" color="inherit">
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            display: {
                                fontWeight: 700, letterSpacing: "-0.5px"
                            }
                        }}
                    >
                        CHATAPP
                    </Typography>
                </Link>
            </Toolbar>
        </AppBar>
    );
};