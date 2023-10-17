import React, {useEffect, useState} from "react";
import {Box, styled, useMediaQuery, useTheme} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer"
import DrawerToggle from "../../components/PrimaryDrawer/DrawerToggle.tsx";

interface PrimaryDrawerProps {
    children: React.ReactNode,
}

interface ChildProps {
    open: boolean,
}

type ChildElement = React.ReactElement<ChildProps>


const PrimaryDrawer: React.FC<PrimaryDrawerProps> = ({children}) => {
    const [open, setOpen] = useState<boolean>(true)
    const theme = useTheme()
    const isSmallScreen: boolean = useMediaQuery(theme.breakpoints.up("sm"))
    useEffect(() => {
        setOpen(isSmallScreen)
    }, [isSmallScreen]);

    const openedMixin = () => ({
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: "hidden"
    })
    const closedMixin = () => ({
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: "hidden",
        width: theme.primaryDrawer.closed,
    })

    const Drawer = styled(MuiDrawer, {})(({theme, open}) => ({
        width: theme.primaryDrawer.width,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        ...(open && {...openedMixin(), "& .MuiDrawer-paper": openedMixin()}),
        ...(!open && {...closedMixin(), "& .MuiDrawer-paper": closedMixin()}),
    }))

    const handleOpenDrawer = () => setOpen(true)
    const handleCloseDrawer = () => setOpen(false)

    return (
        <Drawer
            open={open}
            variant={!isSmallScreen ? "temporary" : "permanent"}
            PaperProps={{
                sx: {
                    mt: `${theme.primaryAppBar.height}px`,
                    height: `calc(100vh-${theme.primaryAppBar.height}px)`,
                    width: theme.primaryDrawer.width,
                }
            }}
        >
            <Box>
                <Box sx={{position: "absolute", top: 0, right: 0, p: 0, width: open ? "auto" : "100%"}}>
                    <DrawerToggle open={open} handleOpenDrawer={handleOpenDrawer}
                                  handleCloseDrawer={handleCloseDrawer}/>
                </Box>
                {React.Children.map(children, (child) => {
                    return React.isValidElement(child) ?
                        React.cloneElement(child as ChildElement, {open}) :
                        child
                })}
            </Box>
        </Drawer>
    )
}

export default PrimaryDrawer
