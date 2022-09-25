import { Button } from "@mui/material";

const ActionButton = ({ title, click }) => {
  return (
    <Button
      variant="contained"
      disableElevation
      onClick={click}
      size="small"
      sx={styles.button}
      color="CTA"
    >
      {title}
    </Button>
  );
};

const styles = {
  button: { height: "40px", color: "#FFF", borderRadius: "20px", px: 2 },
};

export default ActionButton;
