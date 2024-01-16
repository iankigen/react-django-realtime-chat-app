import React, {useEffect} from 'react'
import useCrud from "../../hooks/useCrud.ts";
import {
    Box,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from "@mui/material";
import {Link} from "react-router-dom";

interface Category {
    id: number,
    name: string,
    icon?: string,
    description?: string
}

const ExploreCategories: React.FC = () => {
    const theme = useTheme()
    const {fetchData, loading, dataCRUD, error} = useCrud<Category>([], "/api/server/category")
    useEffect(() => {
        fetchData()
    }, []);
    console.log(dataCRUD)
    return (
        <>
            <Box sx={{
                height: "50px",
                display: "flex",
                alignItems: "center",
                px: 2,
                borderBottom: `1px solid ${theme.palette.divider}`,
                position: "sticky",
                top: 0,
                backgroundColor: theme.palette.background.default
            }}>
                Explore
            </Box>
            <List sx={{py: 0}}>
                {!!(dataCRUD && dataCRUD.length) && dataCRUD.map((item) => (
                    <ListItem
                        disablePadding
                        key={item.id}
                        sx={{display: "block"}}
                        dense={true}
                    >
                        <Link to={`/explore/${item.id}`} style={{textDecoration: "none", color: "inherit"}}>
                            <ListItemButton sx={{minHeight: 48}}>
                                <ListItemIcon sx={{minWidth: 0, justifyContent: "center"}}>
                                    <ListItemAvatar sx={{minWidth: "0px"}}>
                                        <img src={item.icon} alt="Icon" style={{
                                            width: "25px", height: "25px", display: "block", margin: "auto"
                                        }}/>
                                    </ListItemAvatar>
                                </ListItemIcon>
                                <ListItemText primary={
                                    <Typography variant="body1"
                                                textAlign="start"
                                                paddingLeft={1}
                                    >{item.name}</Typography>}>
                            </ListItemText>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default ExploreCategories
