import { Box } from "@mui/material";
import { ActionButton } from "../common";

const ActionButtons = () => {
  return (
    <Box sx={styles.container}>
      <ActionButton title={"اعمال تخفیف"} />
      <ActionButton title={"اتمام موجودی"} />
      <ActionButton title={"حذف تخفیف"} />
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
