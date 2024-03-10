import Image from "next/image";
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
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  ArrowDropDown,
  ArrowDropUp,
  Star,
  ShareOutlined,
  NotificationsOutlined,
  StarBorderOutlined,
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
  btn: {
    border: "1px solid #d1d5db",
    minWidth: "48px",
    marginRight: "4px",
  },
}));

// defaults. = "bottom";
const OldDesign = () => {
  const classes = useStyles();
  const [historicData, setHistoricData] = useState([]);
  const [flag, setflag] = useState(false);

  const [days, setDays] = useState(1);

  useEffect(() => {
    fetchHistoricData();
  }, [days]);

  const fetchHistoricData = async () => {
    const { data } = await axios.get(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${days}`
    );
    console.log(data.prices);
    setflag(true);
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
          <Typography mt={1} component="div" display="flex" alignItems="center">
            <Button
              variant="outlined"
              color="inherit"
              className={classes.btn}
              // sx={{
              //   border: "1px solid #d1d5db",
              //   minWidth: "48px",
              //   marginRight: "4px",
              // }}
            >
              <ShareOutlined />
            </Button>
            <Button variant="outlined" color="inherit" className={classes.btn}>
              <NotificationsOutlined />
            </Button>
            <Button variant="outlined" color="inherit" className={classes.btn}>
              <StarBorderOutlined />
            </Button>
            <Chip
              label={
                <Typography component="div" display="flex" alignItems="center">
                  <Star sx={{ fontSize: "16px", color: "#fc6" }} />
                  <Typography variant="subtitle2" fontSize="12px">
                    1,057,824 people like this
                  </Typography>
                </Typography>
              }
              sx={{
                borderRadius: "7px",
                backgroundColor: "#f3f4f6",
                color: "#000000",
                fontSize: "12px",
                height: "20px",
              }}
            />
          </Typography>
          <Grid container>
            <Grid item xl={6} lg={6} md={6} xs={12}>
              <LinearProgress
                // color="secondary"
                variant="determinate"
                value={50}
                sx={{
                  marginTop: "16px",
                  height: "8px",
                  borderRadius: "4px",
                  background: "#e5e7eb",
                  "& span": {
                    background:
                      "linear-gradient(90deg, rgba(255,204,102,1) 41%, rgba(141,198,71,1) 100%)",
                  },
                }}
              />
              <Typography
                display="flex"
                justifyContent="space-between"
                component="div"
                mt={0.5}
              >
                <Typography variant="caption" fontWeight={700} color="#111827">
                  $29,996.52
                </Typography>
                <Typography variant="caption" fontWeight={700} color="#111827">
                  24H Range
                </Typography>
                <Typography variant="caption" fontWeight={700} color="#111827">
                  $33,228.69
                </Typography>
              </Typography>
            </Grid>
            <Grid item xl={6} lg={6} md={6} xs={12}></Grid>
          </Grid>
          <Grid container>
            <Grid item xl={6} lg={6} md={6} xs={12}>
              <Typography
                component="div"
                display="flex"
                justifyContent="space-between"
                mt={1}
                pt={0.5}
                pb={0.5}
                borderBottom="1px solid #e5e7eb"
              >
                <Typography variant="subtitle2" color="#6b7280">
                  Market Cap
                </Typography>
                <Typography
                  variant="subtitle2"
                  fontWeight={700}
                  color="#111827"
                >
                  $600,199,550,611
                </Typography>
              </Typography>
              <Typography
                component="div"
                display="flex"
                justifyContent="space-between"
                mt={1}
                pt={0.5}
                pb={0.5}
                borderBottom="1px solid #e5e7eb"
              >
                <Typography variant="subtitle2" color="#6b7280">
                  24 Hour Trading Vol
                </Typography>
                <Typography
                  variant="subtitle2"
                  fontWeight={700}
                  color="#111827"
                >
                  $71,482,887,160
                </Typography>
              </Typography>
              <Typography
                component="div"
                display="flex"
                justifyContent="space-between"
                mt={1}
                pt={0.5}
                pb={0.5}
                borderBottom="1px solid #e5e7eb"
              >
                <Typography variant="subtitle2" color="#6b7280">
                  Fully Diluted Valuation
                </Typography>
                <Typography
                  variant="subtitle2"
                  fontWeight={700}
                  color="#111827"
                >
                  $662,124,561,000
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={4} lg={4} md={4} xs={12}></Grid>
      </Grid>
      <Grid container mt={2}>
        <Grid item xl={8} lg={8} md={8} xs={12}>
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
                  setflag(false);
                }}
                color="inherit"
                // selected={day.value === days}
                sx={{
                  border: "1px solid #d1d5db",

                  backgroundColor: day.value === days ? "#e5e7eb" : "#ffffff",
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
        </Grid>
      </Grid>
    </Container>
  );
};

// OldDesign.getInitialProps = async (ctx) => {
//   const { data } = await axios.get(
//     `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365`
//   );
//   return { historicData: data.prices };
// };
export default OldDesign;
