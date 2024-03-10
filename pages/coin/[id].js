import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";

import {
  Button,
  Chip,
  Container,
  Grid,
  Typography,
  LinearProgress,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Tabs,
  Tab,
  ListItemText,
  ListItem,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  ArrowDropDown,
  ArrowDropUp,
  Star,
  ShareOutlined,
  NotificationsOutlined,
  StarBorderOutlined,
  InfoRounded,
  ExpandMore,
} from "@mui/icons-material";

import coin from "../../CoinDetails";
import { chartDays } from "../../ChartDays";
import SelectButton from "../../component/SelectButton";

// export async function getServerSideProps(context) {
//   const id = context.query.id.toString();

//   const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}
//   `);

//   const data = await res.json();

//   return {
//     props: {
//       coin: data,
//     },
//   };
// }

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.04)",
  },
  btn: {
    border: "1px solid #d1d5db",
    minWidth: "48px",
    marginRight: "4px",
  },
  tab: {
    fontSize: "14px",
    textTransform: "capitalize",
    fontWeight: 600,
  },
}));

// defaults. = "bottom";
const CoinDetails = () => {
  const classes = useStyles();
  const [historicData, setHistoricData] = useState([]);
  const [days, setDays] = useState(1);
  const [value, setValue] = useState("overview");
  const router = useRouter();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetchHistoricData();
  }, [days, router.query.id]);

  const fetchHistoricData = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${router.query.id}/market_chart?vs_currency=usd&days=${days}`
    );
    console.log(data.prices);

    setHistoricData(data.prices);
  };

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "First dataset",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: "Second dataset",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774",
      },
    ],
  };
  console.log("data", historicData);

  return (
    <Container sx={{ marginTop: "32px" }}>
      <Grid container columnSpacing={1}>
        <Grid item xl={8} lg={8} md={8} xs={12}>
          <Chip
            label={`Rank #${coin?.market_cap_rank}`}
            sx={{
              borderRadius: "7px",
              backgroundColor: "#000000",
              color: "#ffffff",
              fontSize: "12px",
              height: "24px",
            }}
          />
          <Typography component="div" display="flex" alignItems="center" mt={1}>
            <Image
              src={coin?.image?.large}
              alt={coin?.image?.large}
              height="30px"
              width="30px"
            />

            <Typography
              ml={1}
              variant="body2"
              fontWeight="700"
              fontFamily="system-ui"
              fontSize="18px"
              component="div"
            >
              {coin?.name + " " + `(${coin?.symbol?.toUpperCase()})`}
            </Typography>
          </Typography>
          <Typography display="flex" alignItems="center" mt={1} component="div">
            <Typography
              variant="body2"
              fontWeight="700"
              fontFamily="system-ui"
              fontSize="24px"
              component="span"
            >
              ${coin?.market_data?.current_price?.usd.toLocaleString()}
            </Typography>
            <Typography
              // variant="body2"
              // fontWeight="700"
              component="div"
              fontSize="24px"
            >
              <Typography
                component="span"
                fontSize="18px"
                display="flex"
                alignItems="center"
                fontWeight={700}
                ml={0.5}
                color={
                  coin?.market_data?.price_change_percentage_1h_in_currency
                    ?.usd < 0
                    ? "#e15241"
                    : "#4eaf0a"
                }
              >
                {coin?.market_data?.price_change_percentage_1h_in_currency <
                0 ? (
                  <ArrowDropDown />
                ) : (
                  <ArrowDropUp />
                )}
                {coin?.market_data?.price_change_percentage_1h_in_currency?.usd?.toFixed(
                  1
                )}
                %
              </Typography>
            </Typography>
          </Typography>
          <Typography mt={1} variant="subtitle2" color="gray">
            1.0000000 BTC
          </Typography>
        </Grid>
      </Grid>
      <Grid container mt={2} columnSpacing={0.5} rowSpacing={0.5}>
        <Grid item xl={3} lg={3} md={3} xs={12}>
          <Card className={classes.card}>
            <CardHeader
              title="Market Cap"
              titleTypographyProps={{
                variant: "subtitle2",
                fontWeight: 700,
                color: "#111827",
              }}
              action={
                <IconButton sx={{ fontSize: "16px" }}>
                  <InfoRounded color="disabled" fontSize="16px" />
                </IconButton>
              }
            />
            <CardContent>
              <Typography component="h4" color="#111827" fontWeight={600}>
                $ 600,199,550,611
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xl={3} lg={3} md={3} xs={12}>
          <Card className={classes.card}>
            <CardHeader
              title="Fully Diluted"
              titleTypographyProps={{
                variant: "subtitle2",
                fontWeight: 700,
                color: "#111827",
              }}
              action={
                <IconButton sx={{ fontSize: "16px" }}>
                  <InfoRounded color="disabled" fontSize="16px" />
                </IconButton>
              }
            />
            <CardContent>
              <Typography component="h4" color="#111827" fontWeight={600}>
                $ 662,124,561,000
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xl={3} lg={3} md={3} xs={12}>
          <Card className={classes.card}>
            <CardHeader
              title="Volume"
              titleTypographyProps={{
                variant: "subtitle2",
                fontWeight: 700,
                color: "#111827",
              }}
              action={
                <IconButton sx={{ fontSize: "16px" }}>
                  <InfoRounded color="disabled" fontSize="16px" />
                </IconButton>
              }
            />
            <CardContent>
              <Typography component="h4" color="#111827" fontWeight={600}>
                $ 71,482,887,160
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xl={3} lg={3} md={3} xs={12}>
          <Card className={classes.card}>
            <CardHeader
              title="Circular Supply"
              titleTypographyProps={{
                variant: "subtitle2",
                fontWeight: 700,
                color: "#111827",
              }}
              action={
                <IconButton sx={{ fontSize: "16px" }}>
                  <InfoRounded color="disabled" fontSize="16px" />
                </IconButton>
              }
            />
            <CardContent>
              <Typography component="h4" color="#111827" fontWeight={600}>
                $ 274,199,550,611
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container mt={3} columnSpacing={2}>
        <Grid item xl={9} lg={9} md={9} xs={12}>
          <Card className={classes.card}>
            <CardContent>
              <Tabs value={value} onChange={handleChange} variant="scrollable">
                <Tab
                  value="overview"
                  label="Overview"
                  className={classes.tab}
                />
                <Tab value="market" label="Market" className={classes.tab} />
                <Tab value="wallets" label="Wallets" className={classes.tab} />
                <Tab value="ratings" label="Ratings" className={classes.tab} />
                <Tab
                  value="analysis"
                  label="Analysis"
                  className={classes.tab}
                />
                <Tab
                  value="price estimates"
                  label="Price estimates"
                  className={classes.tab}
                />
              </Tabs>
              <ButtonGroup
                size="small"
                aria-label="small button group"
                sx={{ marginTop: "20px" }}
              >
                {chartDays.map((day) => (
                  <Button
                    key={day.value}
                    onClick={() => {
                      setDays(day.value);
                    }}
                    color="inherit"
                    // selected={day.value === days}
                    sx={{
                      border: "1px solid #d1d5db",

                      backgroundColor:
                        day.value === days ? "#e5e7eb" : "#ffffff",
                      ":hover": {
                        color: "#8dc647",
                      },
                    }}
                  >
                    {day.label}
                  </Button>
                ))}
              </ButtonGroup>
              <Line
                data={{
                  labels: historicData?.map((coin) => {
                    let date = new Date(coin[0]);
                    let time =
                      date.getHours() > 12
                        ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                        : `${date.getHours()}:${date.getMinutes()} AM`;
                    return days === 1 ? time : date.toLocaleDateString();
                  }),
                  datasets: [
                    {
                      data: historicData.map((coin) => coin[1]),
                      label: `Price ( Past ${days} Days ) in usd`,
                      borderColor: "#EEBC1D",
                    },
                    {
                      data: historicData.map((coin) => coin[1]),
                      label: "vol",
                    },
                  ],
                }}
                options={{
                  elements: {
                    point: {
                      radius: 1,
                    },
                  },
                }}
              />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xl={3} lg={3} md={3} xs={12}>
          <Card className={classes.card}>
            <CardContent>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    src={coin?.image?.large}
                    alt={coin?.image?.large.toUpperCase()}
                    sx={{
                      height: "35px",
                      width: "35px",
                      cursor: "pointer",
                    }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography fontSize={14} fontWeight={700}>
                      {coin?.name}
                    </Typography>
                  }
                />
                <ExpandMore sx={{ fontSize: "25px" }} />
              </ListItem>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

// CoinDetails.getInitialProps = async (ctx) => {
//   const { data } = await axios.get(
//     `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365`
//   );
//   return { historicData: data.prices };
// };
export default CoinDetails;
