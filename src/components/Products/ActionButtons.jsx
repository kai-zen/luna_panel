import { Box } from "@mui/material";
import { ActionButton } from "../common";

const ActionButtons = () => {
  const buttonsInfo = [
    {
      title: "اعمال تخفیف",
      click: () => {},
    },
    {
      title: "حذف تخفیف",
      click: () => {},
    },
    {
      title: "افزودن موجودی",
      click: () => {},
    },
    {
      title: "اتمام موجودی",
      click: () => {},
    },
  ];

  return (
    <Box sx={styles.container}>
      {buttonsInfo.map((btn) => (
        <ActionButton title={btn.title} click={btn.click} />
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
