import { Toolbar, Typography } from "@mui/material";

const SelectableTableTitle = (props) => {
  const { selectedLength, title, actionButtons } = props;
  return (
    <Toolbar sx={styles.container}>
      <Typography variant="h6">
        {`${selectedLength > 0 ? `${selectedLength} مورد انتخاب شده` : title}`}
      </Typography>
      <div style={{ flexGrow: 1 }} />
      {actionButtons}
    </Toolbar>
  );
};

const styles = {
  container: { pl: 2, pr: 1 },
};

export default SelectableTableTitle;
