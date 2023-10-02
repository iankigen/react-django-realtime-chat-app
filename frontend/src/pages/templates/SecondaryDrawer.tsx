import React from 'react'
import {Box, Typography, useTheme} from "@mui/material";
import {BASE_URL} from "../../config.ts";
import useAxiosInterceptor from "../../helpers/jwtInterceptor.ts";

const SecondaryDrawer: React.FC = () => {
    const theme = useTheme()
    const jwtAxios = useAxiosInterceptor()

    jwtAxios({
        method: 'get',
        url: `${BASE_URL}/api/server/select/`
    })
        .then(({status, data}) => {
            // handle success
            console.log(status, data);
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })

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
