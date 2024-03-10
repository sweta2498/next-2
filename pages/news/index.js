import { Box, Container, Grid } from "@mui/material"
import axios from "axios"
import News from "../../component/News/News";
import NewsAds from "../../component/News/NewsAds";
import RightColumn from "../../component/News/RightColumn";

export const getServerSideProps = async () => {
  try {
    const response = await axios.get("/news?page=1&limit=5");
    const value = response?.data
    return {
      props: {
        data: value,
      },
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

const ShowNews = ({ data }) => {

  // console.log(data);

  return (
    <>
      <Container style={{ marginTop: "5px" }} >
        <Box>
          <Grid container display="flex" justifyContent="space-around" >
            <Grid item xs={12} sm={12} md={6} lg={7.5} >
              <NewsAds data={data?.result} />
              <News data={data?.result} pagination={data?.pagination} />
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4} >
              <RightColumn data={data?.result} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default ShowNews