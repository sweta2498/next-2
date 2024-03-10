import React, { useState } from "react";
import Link from "next/link";

import {
  AppBar,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import NavItems from "../../NavItem";
import { useStyles } from "./style";
// import classes from "../../styles/app.module.css";
import MobileDrawer from "./MobileDrawer";
import { useRouter } from "next/router";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const classes = useStyles();
  const router = useRouter()

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);

  // const [subItem, setSubItem] = useState([]);

  // const handleHover = (e) => {
  //   if (anchorEl !== e.currentTarget) {
  //     setAnchorEl(e.currentTarget);
  //   }
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const handleId = (id) => {
  //   NavItems.length > 0 &&
  //     NavItems.map((item) => {
  //       if (item.id === id) {
  //         setSubItem(item.subMenu);
  //       }
  //     });
  // };

  return (
    <>
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
        <Container className={classes.container}>
          <Toolbar /*variant="dense"*/>
            {/* variant="dense" apply for toolbar min-Height="48px" default min-Height="64px" */}
            {isMobile && <MobileDrawer />}
            <Typography variant="h5" className={classes.brand}>
              <Link href="/">Coinmcaps</Link>
            </Typography>
            {!isMobile && (
              <>
                <Typography component="div" className={classes.left_div}>
                  <Typography
                    display="flex"
                    ml={2}
                    alignItems="center"
                    component="div"
                  >
                    {NavItems.length > 0 &&
                      NavItems.map((item) => (
                        <Typography
                          className={classes.dropdown}
                          component="div"
                          key={item.id}
                        >
                          <Typography
                            className={classes.nav_item}
                            variant="body2"
                            key={item.id}
                            fontFamily="system-ui"
                            fontWeight={500}
                          // onMouseOver={(e) => {
                          //   handleHover(e);
                          //   handleId(item.id);
                          // }}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            className={classes.dropdown_content}
                            component="div"
                          >
                            {item?.subMenu?.map((i) => (
                              <Typography
                                key={i}
                                color="#282829"
                                padding="6px 16px"
                                fontSize="14px"
                              >
                                {i}
                              </Typography>
                            ))}
                          </Typography>
                        </Typography>
                      ))}
                  </Typography>
                </Typography>
                <Typography
                  className={classes.right_div}
                  component="div"
                  ml="auto"
                >
                  <Typography className={classes.nav_item} variant="body2" onClick={() => router.push("/news")}>
                    News
                  </Typography>
                  <Typography className={classes.nav_item} variant="body2">
                    Portfolio
                  </Typography>
                  <Typography className={classes.nav_item} variant="body2">
                    Login
                  </Typography>
                  <Typography className={classes.nav_item} variant="body2">
                    Sign Up
                  </Typography>
                </Typography>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      {/* <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        // getContentAnchorEl={null}
      >
        {subItem?.length > 0 &&
          subItem.map((item, key) => (
            <MenuItem
              key={key}
              sx={{
                // padding: "3px 6px",
                fontSize: "14px",
                minHeight: "auto",
                color: "#282829",
              }}
            >
              {item}
            </MenuItem>
          ))}
      </Menu> */}
    </>
  );
};

export default Navbar;
