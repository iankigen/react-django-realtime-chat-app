import React from "react";
import {Box, CssBaseline} from "@mui/material";
import {PrimaryAppBar} from "./templates/PrimaryAppBar.tsx";
import PrimaryDrawer from "./templates/PrimaryDrawer.tsx";
import SecondaryDrawer from "./templates/SecondaryDrawer.tsx";
import Main from "./templates/Main.tsx";
import PopularChannels from "./templates/PopularChannels.tsx";
import ExploreCategories from "../components/SecondaryDrawer/ExploreCategories.tsx";
import ExploreServers from "../components/Main/ExploreServers.tsx";

const Home: React.FC = () => {
    return (
        <Box sx={{
            display: "flex"
        }}>
            <CssBaseline/>
            <PrimaryAppBar/>
            <PrimaryDrawer>
                <PopularChannels open={false}/>
            </PrimaryDrawer>
            <SecondaryDrawer>
                <ExploreCategories/>
            </SecondaryDrawer>
            <Main>
                <ExploreServers/>
            </Main>
        </Box>
    )
}

export default Home