import { Button, ButtonGroup } from "@mui/material";
import { makeStyles } from "@mui/styles";

const SelectButton = ({ label, selected, onClick }) => {
  const useStyles = makeStyles({
    selectbutton: {
      backgroundColor: selected ? "gold" : "",
      color: selected ? "black" : "",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: "gold",
        color: "black",
      },
      width: "22%",
      //   margin: 5,
    },
  });

  const classes = useStyles();

  return (
    <ButtonGroup size="small" aria-label="small button group">
      <Button onClick={onClick}>{label}</Button>
    </ButtonGroup>
  );
};

export default SelectButton;
