import { Button } from "@mui/material";

const OutlinedActionButton = ({ title, click }) => {
  return (
    <Button
      variant="outlined"
      disableElevation
      onClick={click}
      size="small"
      sx={styles.button}
      color="secondary"
    >
      {title}
    </Button>
  );
};

const styles = {
  button: { height: "40px", borderRadius: "20px", px: 2 },
};

export default OutlinedActionButton;
