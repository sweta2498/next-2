import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    // display: "flex !important",
    // justifyContent: "space-between",
    // alignItems: "center",
    padding: 0,
  },
  brand: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      width: "100%",
      justifyContent: "center",
      textAlign: "center",
    },
    "& a": {
      textDecoration: "none",
      color: "#8dc647",
    },
  },
  left_div: {
    display: "flex",
    alignItems: "center",
  },

  right_div: {
    display: "flex",
    alignItems: "center",
  },

  nav_item: {
    paddingRight: "16px",
    color: "gray",
    cursor: "pointer",
    "&:hover": {
      color: "#8dc647",
    },
  },

  dropdown: {
    position: "relative",
    display: "inline-block",
    "&:hover $dropdown_content": { display: "block" },
  },
  dropdown_content: {
    display: "none",
    position: "absolute",
    backgroundColor: "#ffffff",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
    minWidth: "180px",
    zIndex: 1,
    padding: "8px 0",
    cursor: "pointer",
    "& p:hover": {
      backgroundColor: " #0000000a",
    },
  },

  //------------------- mobile css ---------------------------------

  drawer: {
    "& .MuiDrawer-paper": {
      right: 0,
    },
    padding: "16px",
  },
  drawer_brand: {
    textDecoration: "none",
  },
  link: {
    textDecoration: "none",
    color: "#000000",
  },
}));

export { useStyles };
