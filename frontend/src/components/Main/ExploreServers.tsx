import React, {useEffect} from "react";
import {
    Avatar,
    Box, Card, CardContent, CardMedia, Container,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography
} from "@mui/material";
import {Link, useParams} from "react-router-dom";
import useCrud from "../../hooks/useCrud.ts";


interface Category {
    id: number,
    name: string,
    icon?: string,
    description?: string
}

interface Server {
    id?: number,
    name?: string,
    description?: string,
    icon?: string,
    banner?: string,
    category: Category,
}


const ExploreServers: React.FC = () => {
    const {categoryName} = useParams()
    const url = categoryName ? `/api/server/select/?category=${categoryName}` : '/api/server/select/'
    const {fetchData, dataCRUD, error} = useCrud<Server>([], url)
    useEffect(() => {
        fetchData()
    }, [categoryName]);

    const showSpecificName: boolean = !!categoryName && !!dataCRUD.length

    return (
        <>
            <Container maxWidth="lg">
                <Box sx={{pt: 6}}>
                    <Typography
                        variant="h3"
                        noWrap
                        component="h1"
                        sx={{
                            display: {
                                sm: 'block',
                                fontWeight: 700,
                                letterSpacing: '-2px',
                                textTransform: 'capitalize',
                            },
                            textAlign: {xs: 'center', sm: 'left'},
                        }}
                    >
                        {showSpecificName ? dataCRUD[0].category.name : 'Popular Channels'}
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="h2"
                        color="textSecondary"
                        sx={{
                            display: {
                                sm: 'block',
                                fontWeight: 700,
                                letterSpacing: '-1px',
                            },
                            textAlign: {xs: 'center', sm: 'left'},
                        }}
                    >
                        {showSpecificName
                            ? `Channels talking about ${dataCRUD[0].category.name}`
                            : 'Check out some of our Popular Channels'}
                    </Typography>
                </Box>
                <Typography
                    variant="h6"
                    sx={{pt: 6, pb: 1, fontWeight: 700, letterSpacing: '-1px'}}
                >
                    Recommended Channels
                </Typography>
                <Grid container spacing={{xs: 0, sm: 2}}>
                    {dataCRUD.map(item => (
                        <Grid item key={item.id} xs={12} sm={6} md={6} lg={3}>
                            <Card
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    boxShadow: 'none',
                                    backgroundImage: 'none',
                                    borderRadius: 0,
                                }}
                            >
                                <Link
                                    to={`/server/${item.id}`}
                                    style={{textDecoration: 'none', color: 'inherit'}}
                                >
                                    <CardMedia
                                        component="img"
                                        image={
                                            item.banner
                                                ? item.banner
                                                : 'https://source.unsplash.com/random/'
                                        }
                                        alt="random banner"
                                        sx={{display: {xs: 'none', sm: 'block'}}}
                                    />
                                    <CardContent
                                        sx={{
                                            flexGrow: 1,
                                            p: 0,
                                            '&:last-child': {paddingBottom: 0},
                                        }}
                                    >
                                        <List>
                                            <ListItem disablePadding>
                                                <ListItemIcon sx={{minWidth: 0}}>
                                                    <ListItemAvatar sx={{minWidth: '50px'}}>
                                                        <Avatar
                                                            alt="server icon"
                                                            src={item.icon}></Avatar>
                                                    </ListItemAvatar>
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={
                                                        <Typography
                                                            variant="body2"
                                                            textAlign="start"
                                                            sx={{
                                                                textOverflow: 'ellipsis',
                                                                overflow: 'hidden',
                                                                whiteSpace: 'nowrap',
                                                                fontWeight: 700,
                                                            }}
                                                        >
                                                            {item.name}
                                                        </Typography>
                                                    }
                                                    secondary={
                                                        <Typography variant="body2">
                                                            {item.category.name}
                                                        </Typography>
                                                    }
                                                />
                                            </ListItem>
                                        </List>
                                    </CardContent>
                                </Link>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}

export default ExploreServers;
