import Box from '@mui/material/Box';
import { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import { Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    newsimage: {
        // overflow: "hidden",
        marginTop: '5px',
        borderRadius: "20px",
        "&:hover": {
            cursor: 'pointer',
            // overflow: 'hidden',
            screenX: "none",
            // transition: "transform 3s, filter 1s ease-in-out",   
            transform: "scale(1.1)",
            // transform: scale(1.03);
            opacity: "1",
        },
    },
    slideshow: {
        margin: " 1px auto",
        overflow: "hidden",
        maxwidth: "850px",
        marginTop: "30px"
    },
    slideshowSlider: {
        whitespace: "nowrap",
        transition: 'ease 3000ms',
    }
}));

const NewsAds = ({ data }) => {

    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = data?.length;
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === data.length - 1 ? 0 : prevIndex + 1
                ),
            8000
        );
    }, [index]);

    return (
        <>
            <div className={classes.slideshow}>
                <div
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }} >
                    {data?.map((img, index) => (
                        <Link href={`/news/${img?.slug}`} key={img?.id}>
                            <div
                                className="slide"
                                key={index}>
                                <Typography className='newstitle'>{img?.title}</Typography>
                                <Box
                                    component="img"
                                    sx={{
                                        height: 400,
                                        display: 'block',
                                        maxWidth: 850,
                                        overflow: 'hidden',
                                        width: '100%',
                                        mr: 5
                                    }}
                                    className={classes.newsimage}
                                    src={img?.news_picture_url}
                                    alt={img?.author}
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default NewsAds