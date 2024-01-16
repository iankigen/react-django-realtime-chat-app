import React from 'react';
import ExploreServers from "../components/Main/ExploreServers.tsx";
import {Box, CssBaseline} from "@mui/material";
import {PrimaryAppBar} from "./templates/PrimaryAppBar.tsx";
import PrimaryDrawer from "./templates/PrimaryDrawer.tsx";
import PopularChannels from "./templates/PopularChannels.tsx";
import SecondaryDrawer from "./templates/SecondaryDrawer.tsx";
import ExploreCategories from "../components/SecondaryDrawer/ExploreCategories.tsx";
import Main from "./templates/Main.tsx";

const Explore: React.FC = () => {
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
    );
};

export default Explore;