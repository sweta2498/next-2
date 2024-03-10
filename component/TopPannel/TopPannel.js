import React from "react";
import Link from "next/link";

import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { useStyles } from "./style";
// import classes from "../../styles/top.module.css";

const TopPannel = () => {
  const classes = useStyles();
  return (
    <AppBar
      // position="sticky"
      position="static"
      sx={{
        backgroundColor: "#ffffff",
        boxShadow: "none",
        borderBottom: "1px solid #ddd",
      }}
      className={classes.appbar}
    >
      <Toolbar className={classes.toolbar} variant="dense">
        <Container className={classes.container}>
          <Typography component="div" className={classes.left_div}>
            <Typography
              mr={2}
              variant="caption"
              color="gray"
              className={classes.flex}
            >
              Coins:
              <Typography
                component={Link}
                href="/coins"
                variant="caption"
                ml={5}
                color="#007bff"
                sx={{ textDecoration: "none" }}
              >
                5815626
              </Typography>
            </Typography>
            <Typography
              mr={2}
              variant="caption"
              color="gray"
              className={classes.flex}
            >
              Exchanges:
              <Typography
                component={Link}
                href="/coins"
                variant="caption"
                ml={0.5}
                color="#007bff"
                sx={{ textDecoration: "none" }}
              >
                5815626
              </Typography>
            </Typography>
            <Typography
              mr={2}
              variant="caption"
              color="gray"
              className={classes.flex}
            >
              Market&nbsp;Cap:
              <Typography
                component={Link}
                href="/coins"
                variant="caption"
                ml={0.5}
                color="#007bff"
                sx={{ textDecoration: "none" }}
              >
                5815626
              </Typography>
            </Typography>
            <Typography
              mr={2}
              variant="caption"
              color="gray"
              className={classes.flex}
            >
              Dominance:
              <Typography
                component={Link}
                href="/coins"
                variant="caption"
                ml={0.5}
                color="#007bff"
                sx={{ textDecoration: "none" }}
              >
                5815626
              </Typography>
            </Typography>
            <Typography
              mr={2}
              variant="caption"
              color="gray"
              className={classes.flex}
            >
              Gas:
              <Typography
                component={Link}
                href="/coins"
                variant="caption"
                ml={0.5}
                color="#007bff"
                sx={{ textDecoration: "none" }}
              >
                5815626
              </Typography>
            </Typography>
          </Typography>
          {/* <Typography component="div" className={classes.right_div}>
            <Typography color="gray">right</Typography>
            <Typography color="gray">right</Typography>
            <Typography color="gray">right</Typography>
          </Typography> */}
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default TopPannel;
