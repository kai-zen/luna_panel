import { Box } from "@mui/material";
import { ActionButton } from "../common";

const ActionButtons = ({ buttonsInfo }) => {
  return (
    <Box sx={styles.container}>
      {buttonsInfo.map((btn) => (
        <ActionButton title={btn.title} click={btn.click} key={btn.title} />
      ))}
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: 1,
  },
};

export default ActionButtons;
