import { Avatar, Box, Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Image from 'next/image';
import { useRouter } from 'next/router';
import axios from 'axios';
import RightColumn from '../../component/News/RightColumn';

export const getServerSideProps = async (context) => {
  const slug = context.query.slug
  console.log(slug);
  try {
    const trydata = await axios.get(`/news?page=1&limit=5`);
    const response = await axios.get(`/news/${slug}`);
    const datatry = trydata?.data
    const data = response?.data?.result
    return {
      props: {
        data: data, datatry
      }
    };
  } catch (err) {
    // console.log(err.response?.status);
    return {
      redirect: {
        destination: "/500",
        permanent: false,
      },
    };
  }
};

const Single_News = ({ data, datatry }) => {

  const router = useRouter();
  const slug = router?.query?.slug;
  // console.log(datatry);

  return (
    <>
      <Container>
        <Box>
          <Grid container display="flex" justifyContent="space-around">

            <Grid item xs={12} sm={12} md={6} lg={7.5} sx={{ mt: 2 }}>
              <h1 className='title'>
                {data?.title}
              </h1>
              <Box sx={{ display: 'inline' }}>
                <Box sx={{ display: 'flex' }}>
                  {/* <Avatar src='https://mui.com/static/images/avatar/1.jpg' /> */}
                  <Box sx={{ display: 'inline' }}>
                    <Typography>
                      {data?.author}
                    </Typography>
                    <Typography
                      variant='body2'
                      sx={{ color: 'gray', mt: 0.5, mb: 2 }}>
                      {new Date(data?.createdAt)?.toLocaleString()}
                      {/* <VisibilityOutlinedIcon sx={{ width: 15, height: 15 }} /> 379 */}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'inline', mt: 5 }}>
                  <Image
                    className='newsimage'
                    src={data?.news_picture_url}
                    height='500px'
                    width='800px' />
                    
                  <Typography component='div' mt={2}>
                    {data?.meta_description}
                  </Typography>
                  <br />
                  <Typography component='div' dangerouslySetInnerHTML={{ __html: data?.content }} />
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4}>
              <RightColumn data={datatry?.result} />
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* <Container
        style={{ marginTop: "5px" }}>
        <Box>
          <Grid container display="flex" justifyContent="space-around">
            <Grid item xs={12} sm={12} md={8} lg={8} sx={{ mt: 2 }}>

              <Box sx={{ display: 'inline' }}>
                <Box sx={{ display: 'flex' }}>
                  <Avatar src='https://mui.com/static/images/avatar/1.jpg' />
                  <Box sx={{ display: 'inline', ml: 2 }}>
                    <Typography >Darren </Typography>
                    <Typography variant='body2'>22/27/20222 10:40 <VisibilityOutlinedIcon sx={{ width: 15, height: 15 }} /> 379</Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'inline' }}>
                  <Image
                    style={{ marginTop: '25px' }}
                    src='https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60'
                    height='500px'
                    width='750px' />

                  <Typography> GameFi has been hit hard by the bear market, and players often see it as another “cash grab” opportunity
                    This narrative has to change, and the way it starts is by setting the proper narrative from the get-g,,l,l,l,l,l,o
                    quality games.”</Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4}>
              <RightColumn />
            </Grid>
          </Grid>
        </Box>
      </Container> */}
    </>
  )
}

export default Single_News