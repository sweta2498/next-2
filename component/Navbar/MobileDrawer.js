import React, { useState } from "react";
import Link from "next/link";

import {
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { ArrowDropDown, ArrowDropUp, Close, Menu } from "@mui/icons-material";

import NavItems from "../../NavItem";
import { useStyles } from "./style";
// import classes from "../../styles/app.module.css";

const MobileDrawer = () => {
  const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedId, setSelectedId] = useState("");

  const handleClose = () => {
    setOpenDrawer(false);
  };

  const handleSubMenu = (id) => {
    if (selectedId === id) {
      setSelectedId("");
    } else {
      setSelectedId(id);
    }
  };

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={handleClose}
        className={classes.drawer}
      >
        <Typography component="div" p={2}>
          <Typography
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            component="div"
          >
            <IconButton sx={{ padding: 0 }} onClick={handleClose}>
              <Close />
            </IconButton>
            <Link href="/" className={classes.drawer_brand}>
              <Typography variant="h5" color="#8dc647">
                Coinmcaps
              </Typography>
            </Link>
            <Typography variant="body2" color="gray">
              Subscribe
            </Typography>
          </Typography>
          <List>
            {NavItems.length > 0 &&
              NavItems.map((item) => (
                <Typography key={item.id} component="div">
                  <ListItem
                    disablePadding
                    onClick={() => handleSubMenu(item.id)}
                    // key={item.id}
                  >
                    <ListItemButton
                      sx={{
                        padding: "8px 0",
                        borderBottom: "1px solid #dee2e6",
                      }}
                    >
                      <ListItemText
                        primary={item.name}
                        // color={item.id === selectedId ? "#8dc647" : "#000000de"}
                        primaryTypographyProps={{
                          sx: {
                            fontSize: "14px",
                            color:
                              item.id === selectedId ? "#8dc647" : "#000000de",
                          },
                        }}
                      />
                      {item.id === selectedId ? (
                        <ArrowDropUp />
                      ) : (
                        <ArrowDropDown />
                      )}
                    </ListItemButton>
                  </ListItem>

                  <Collapse
                    in={item.id === selectedId}
                    timeout="auto"
                    unmountOnExit
                  >
                    {item?.subMenu?.map((sub, key) => (
                      <Link href="/" className={classes.link} key={key}>
                        <ListItem disablePadding>
                          <ListItemButton
                            sx={{
                              padding: "8px 0",
                              // borderBottom: "1px solid #dee2e6",
                            }}
                          >
                            <ListItemText
                              primary={sub}
                              primaryTypographyProps={{
                                sx: {
                                  fontSize: "14px",
                                },
                              }}
                            />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    ))}
                  </Collapse>
                </Typography>
              ))}
          </List>
        </Typography>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{ padding: 0 }}
      >
        <Menu color="#000000"></Menu>
      </IconButton>
    </>
  );
};

export default MobileDrawer;
