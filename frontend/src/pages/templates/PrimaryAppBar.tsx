import React, {useEffect, useState} from "react";
import {
    AppBar, Box, Drawer, IconButton, Link,
    Toolbar, Typography, useMediaQuery, useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"
import ExploreCategories from "../../components/SecondaryDrawer/ExploreCategories.tsx";


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

    const list = () => (
        <Box
            sx={{paddingTop: theme.primaryAppBar.height, minWidth: 200}}
            role='presentation'
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}>
            <ExploreCategories/>
        </Box>
    )

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
                    <Box
                        sx={{paddingTop: `${theme.primaryAppBar.height}px`, minWidth: 200}}
                        role='presentation'
                        onClick={() => toggleDrawer(false)}
                        onKeyDown={() => toggleDrawer(false)}>
                        <ExploreCategories/>
                    </Box>
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