import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Pagination, Typography, useMediaQuery, useTheme } from "@mui/material"
import { makeStyles } from "@mui/styles";
import axios from "axios";
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    newsimage: {
        borderRadius: '15px',
        "&:hover": {
            cursor: 'pointer',
            borderRadius: '15px',
            opacity: 1,
            // transition: "transform 3s, filter 1s ease-in-out",
            transform: "scale(1.1)",
            opacity: "1",
        },
    },
    typography: {
        "&:hover": {
            cursor: 'pointer',
            color: '#0291ff'
        }
    }
}));

const News = ({ data, pagination }) => {

    const classes = useStyles();
    const [page, setPage] = useState(1);
    const [newsdata, setnewsdata] = useState(data);

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down("sm", "md"));

    const handlepagechange = async (value) => {
        const response = await axios.get(`/news`, {
            params: {
                page: `${value}`,
                limit: 5
            }
        });
        // console.log("=-=-=-=-=-", response?.data?.result);
        setnewsdata(response?.data?.result)
    }

    return (
        <>
            <List
                sx={{
                    backgroundColor: "transparent",
                    marginTop: "3%",
                    marginBottom: 0,
                    border: "1px solid rgba(0, 0, 0, 0.12)",
                    overflow: "hidden"
                }}
                disablePadding>
                <ListItem
                    sx={{
                        justifyContent: "flex-start",
                        color: "black",
                        backgroundColor: "rgb(30,103,147,5%)",
                        textDecoration: "none",
                        textDecorationThickness: "1.5px"
                    }}>
                    <Typography
                        variant="h6"
                        fontWeight="700px"
                        align="center"
                        color="black">
                        Treding News
                    </Typography>
                </ListItem>
                <Divider />

                {newsdata?.map((item) =>
                    <Link href={`/news/${item?.slug}`} key={item?.id} >
                        <Typography component="div" key={item?.id}>
                            <ListItem disablePadding>
                                <ListItemButton
                                    sx={{
                                        padding: "8px",
                                        display: "flex",
                                        alignItems: "start",
                                    }}>

                                    <ListItemAvatar sx={{ mt: 1, mr: 1 }}>
                                        <Image
                                            // className={classes.newsimage}
                                            className={`${classes.newsimage} newsadsimage`}
                                            src={item?.news_picture_url}
                                            // width="250px"
                                            // height="180px"
                                            width={isMobile ? '120px' : '250px'}
                                            height={isMobile ? '100px' : '180px'} />

                                    </ListItemAvatar>

                                    <ListItemText
                                        sx={{ wordBreak: "break-word", mr: 1, display: 'inline', mt: 1, ml: 1 }}>
                                        <Box display="flex" component="div" >
                                            <div
                                                className={`${classes.typography} typography`}>
                                                {item?.title}
                                            </div>
                                        </Box>
                                        <Box display="flex" component="div">
                                            {/* <Typography component='div' fontSize={16} color='#777777' dangerouslySetInnerHTML={{ __html: item?.content }} /> */}
                                            <Typography className={isMobile ? 'description' : 'descriptionmd'} component='div' color='#777777' dangerouslySetInnerHTML={{ __html: item?.meta_description }} />
                                        </Box>
                                        <Typography className={classes.author} mb={1} component='div' variant="body1" color='#0291ff'>{item?.author}</Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                        </Typography>
                    </Link>
                )}
            </List>

            <div style={{ display: "flex", justifyContent: "center" }}>
                <Pagination
                    color="primary"
                    shape="rounded"
                    page={page}
                    count={pagination?.totalPages}
                    onChange={(e, value) => {
                        handlepagechange(value)
                        setPage(value);
                        window.scroll(0, 450);
                    }}
                    sx={{ mt: 5, mb: 8 }}
                />
            </div>
        </>
    )
}

export default News