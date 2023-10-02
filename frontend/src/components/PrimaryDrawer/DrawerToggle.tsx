import React from "react";

import {Box, IconButton} from "@mui/material";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import {ChevronRight} from "@mui/icons-material";

interface DrawerToggleProps {
    handleCloseDrawer: () => void
    handleOpenDrawer: () => void
    open: boolean
}

const DrawerToggle: React.FC<DrawerToggleProps> = ({handleCloseDrawer, handleOpenDrawer, open}) => {
    return (
        <Box sx={{
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"}}
        >
            <IconButton onClick={() => {
                if (open) {
                    handleCloseDrawer()
                } else {
                    handleOpenDrawer()
                }
            }}>
                {open ? <ChevronLeft/> : <ChevronRight/>}
            </IconButton>
        </Box>
    )
}

export default DrawerToggle
