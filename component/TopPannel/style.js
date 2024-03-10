import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex !important",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left_div: {
    display: "flex",
    alignItems: "center",
    padding: "5px 0",
    [theme.breakpoints.down("md")]: {
      overflowX: "scroll",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
  right_div: {
    display: "flex",
    justifyContent: "space-around",
  },
  flex: {
    display: "flex",
    "& a": {
      color: "#007bff",
      textDecoration: "none",
      marginLeft: "4px",
    },
  },
}));

export { useStyles };
