import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import moment from 'moment'
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
    newsimage: {
        // opacity: 0.7,
        filter: "brightness(40%)",
        // backgroundcolor: "black",
        overflow: "hidden",
        // backgroundcolor:" linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7))",
        "&:hover": {
            cursor: 'pointer',
            opacity: 1,
            filter: "brightness(100%)",
        },
    },
    roundBorder: {
        borderRadius: "5px !important",
    },
    counter: {
        "&:hover": {
            color: 'transparent',
        },
    }
}));

const RightColumn = ({ data }) => {

    const classes = useStyles();

    return (
        <>
            <List
                sx={{
                    backgroundColor: "transparent",
                    mt: 3.5,
                    marginBottom: 0,
                    border: "1px solid rgba(0, 0, 0, 0.12)",
                    overflow: "hidden",
                }}
                className={classes.roundBorder}
                disablePadding >

                <ListItem
                    sx={{
                        justifyContent: "center",
                        color: "black",
                        backgroundColor: "rgb(30,103,147,5%)",
                        textDecoration: "none",
                        textDecorationThickness: "1.5px",
                    }}>

                    <Typography
                        variant="h6"
                        fontWeight="700px"
                        align="center"
                        color="black" >
                        Latest News
                    </Typography>
                </ListItem>
                <Divider />

                {data?.map((item, i) =>
                    <Link href={`/news/${item?.slug}`} key={item?.id} >
                        <Typography component="div" className={classes.link} key={item?.id}>
                            <ListItem disablePadding>
                                <ListItemButton
                                    sx={{
                                        padding: "8px",
                                        display: "flex",
                                        alignItems: "start",
                                    }}>

                                    <ListItemAvatar sx={{ mt: 0.5, mr: 1, mb: -0.5, position: 'relative', color: '#fff' }} className={classes.counter}>
                                        <Image
                                            className={classes.newsimage}
                                            src={item?.news_picture_url}
                                            width="100px"
                                            height="100px" />
                                        <Typography fontSize={40} position={'absolute'} top='50%' left='50%' sx={{ transform: "translate(-50%,-50%)" }} > {i + 1}</Typography>
                                    </ListItemAvatar>

                                    <ListItemText
                                        sx={{ wordBreak: "break-word", m: 0, display: 'inline' }}>
                                        <Box display="flex">
                                            <Typography mt={1} fontSize={14} component='div' textTransform={"uppercase"} fontWeight={600}>{item?.author + " / "}</Typography>
                                            &nbsp;<Typography mt={1.3} fontSize={12} component='div'>{" " + moment(item?.createdAt).fromNow(true)} ago</Typography>
                                        </Box>
                                        {/* <Box display="flex" component="div">
                                                    <Typography mt={1} fontSize={16} component='div'>{moment(item?.createdAt).fromNow(true)} ago</Typography>
                                                </Box> */}
                                        <Box display="flex" component="div">
                                            <Typography className="letestnewstitle" component='div' variant="body1" color='#777777' dangerouslySetInnerHTML={{ __html: item?.title }} />
                                        </Box>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                            <Divider />
                        </Typography>
                    </Link>
                )}
            </List>
        </>
    )
}

export default RightColumn