import React, {useEffect} from "react";
import useCrud from "../../hooks/useCrud.ts";
import {
    Avatar,
    Box,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import {Link} from "react-router-dom";

interface PopularChannelsProps {
    open: boolean
}

interface Server {
    id: number,
    name: string,
    owner: number,
    category: number | null,
    description: string,
    channels: number[],
    created_at: string,
    updated_at: string,
    members_count: number,
    icon?: string,
    banner?: string,
}

const PopularChannels: React.FC<PopularChannelsProps> = ({open}) => {

    const {dataCRUD, error, loading, fetchData} = useCrud<Server[]>([], '/api/server/select/')

    useEffect(() => {
        fetchData()
    }, []);

    return (<>
            <Box sx={{
                height: 50,
                p: 2,
                display: "flex",
                alignItems: "center",
                flex: "1 1 100%"
            }}>
                <Typography
                    sx={{
                        display: open ? "block" : "none"
                    }}
                >
                    Popular Channels
                </Typography>
            </Box>
            <Box
                sx={{
                    height: 100,
                    p: 2,
                    display: open ? "flex" : "none",
                    alignItems: "center",
                    flex: "1 1 100%"
                }}
            >
                <List sx={{marginTop: "150px"}}>
                    {!!(dataCRUD && dataCRUD.length) && dataCRUD.map((item) => (
                        <ListItem
                            key={item.id}
                            disablePadding={true}
                            dense={true}
                            sx={{display: "block"}}>
                            <Link
                                style={{textDecoration: "none", color: "inherit"}}
                                to={`/server/${item.id}`}>
                                <ListItemButton sx={{minHeight: 0}}>
                                    <ListItemIcon sx={{minWidth: 0, justifyContent: "center"}}>
                                        <ListItemAvatar sx={{minWidth: "50px"}}>
                                            <Avatar alt="Server Icon" src={item.icon}></Avatar>
                                        </ListItemAvatar>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <Typography variant="body2" sx={{
                                                fontWeight: 700,
                                                lineHeight: 1.2,
                                                textOverflow: "ellipsis",
                                                overflow: "hidden",
                                                whiteSpace: "nowrap"
                                            }}
                                            >
                                                {item.name}
                                            </Typography>
                                        }
                                        secondary={<Typography variant="body2" sx={{
                                            fontWeight: 500,
                                            lineHeightL: 1.2,
                                            color: "textSecondary"
                                        }}>{item.category.name}</Typography>}
                                        sx={{opacity: open ? 1 : 0}}
                                        primaryTypographyProps={{
                                            sx: {
                                                textOverflow: "ellipsis",
                                                overflow: "hidden",
                                                whiteSpace: "nowrap",
                                            }
                                        }}
                                    >
                                    </ListItemText>
                                </ListItemButton>
                            </Link>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </>

    )
}

export default PopularChannels