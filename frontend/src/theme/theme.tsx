import {createTheme, responsiveFontSizes} from "@mui/material";

declare module '@mui/material/styles' {
    interface Theme {
        primaryAppBar: {
            height: number,
            minHeight: number,
        }
    }

    interface ThemeOptions {
        primaryAppBar?: {
            height?: number;
            minHeight?: number;
        };
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