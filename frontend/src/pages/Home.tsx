import React from "react";
import {Box, CssBaseline} from "@mui/material";
import {PrimaryAppBar} from "./templates/PrimaryAppBar.tsx";
import PrimaryDrawer from "./templates/PrimaryDrawer.tsx";
import SecondaryDrawer from "./templates/SecondaryDrawer.tsx";
import Main from "./templates/Main.tsx";
import PopularChannels from "./templates/PopularChannels.tsx";

const Home: React.FC = () => {
    return (
        <Box sx={{
            display: "flex"
        }}>
            <CssBaseline/>
            <PrimaryAppBar/>
            <PrimaryDrawer>
                <PopularChannels/>
            </PrimaryDrawer>
            <SecondaryDrawer/>
            <Main/>
        </Box>
    )
}

export default Home