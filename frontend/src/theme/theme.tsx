import {createTheme, responsiveFontSizes} from "@mui/material";

declare module '@mui/material/styles' {
    interface Theme {
        primaryAppBar: {
            height: number,
            minHeight: number,
        },
        primaryDrawer: {
            width: number,
            closed: number,
        },
        secondaryDrawer: {
            width: number,
        },
    }

    interface ThemeOptions {
        primaryAppBar?: {
            height?: number;
            minHeight?: number;
        },
        primaryDrawer: {
            width?: number,
            closed?: number,
        },
        secondaryDrawer: {
            width?: number,
        },
    }
}


const theme = createTheme({
    typography: {
        fontFamily: "'IBM Plex Sans',sans-serif",
    },
    primaryAppBar: {
        height: 50,
        minHeight: 50,
    },
    primaryDrawer: {
        width: 240,
        closed: 70,
    },
    secondaryDrawer: {
        width: 240,
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                color: "default",
                elevation: 0
            }
        }
    }
})

export default responsiveFontSizes(theme)