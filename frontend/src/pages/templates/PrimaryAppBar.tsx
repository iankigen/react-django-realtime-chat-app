import React, {useEffect, useState} from "react";
import {
    AppBar, Box, Drawer, IconButton, Link,
    Toolbar, Typography, useMediaQuery, useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"


export const PrimaryAppBar: React.FC = () => {
    const [sideMenu, setSideMenu] = useState<boolean>(false)
    const theme = useTheme()
    const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.up("sm"))

    const toggleDrawer = (open: boolean) => {
        setSideMenu(open)
    }

    useEffect(() => {
        if (isSmallScreen && sideMenu) {
            setSideMenu(false)
        }
    }, [isSmallScreen]);

    return (
        <AppBar sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: theme.palette.background.default,
            borderBottom: `1px solid ${theme.palette.divider}`,
        }}>
            <Toolbar
                variant="dense"
                sx={{
                    height: theme.primaryAppBar.height,
                    minHeight: theme.primaryAppBar.minHeight,
                }}>
                <Box sx={{
                    display: {
                        xs: "block",
                        sm: "none",
                    }
                }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        sx={{mr: 1}}
                        onClick={() => toggleDrawer(true)}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Box>

                <Drawer anchor="left" open={sideMenu} onClose={() => toggleDrawer(false)}>
                    {[...Array(10)].map((_, index) => (
                        <Typography key={index} paragraph>
                            {index}
                        </Typography>
                    ))}
                </Drawer>
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