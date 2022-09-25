import { useState } from "react";
import { Box, Button, Chip, MenuItem, Select, Typography } from "@mui/material";

const Sorting = () => {
  const [submittedAmount, setSubmittedAmount] = useState(false);

  const addFilter = () => {
    setSubmittedAmount(true);
  };

  const removeFilter = () => {
    setSubmittedAmount(false);
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="subtitle2">مرتب سازی بر اساس: </Typography>
      {submittedAmount ? (
        <Chip
          onDelete={removeFilter}
          label="قیمت / صعودی"
          sx={{ direction: "ltr" }}
        />
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Select
              sx={{ height: "35px", fontSize: "14px" }}
              // onChange={handleChange}
              defaultValue={0}
            >
              <MenuItem value={0}>قیمت</MenuItem>
              <MenuItem value={1}>تعداد فروش</MenuItem>
              <MenuItem value={2}>تاریخ</MenuItem>
              <MenuItem value={3}>نام</MenuItem>
            </Select>
            <Select
              defaultValue={0}
              sx={{ height: "35px", fontSize: "14px" }}
              // onChange={handleChange}
            >
              <MenuItem value={0}>صعودی</MenuItem>
              <MenuItem value={1}>نزولی</MenuItem>
            </Select>
          </Box>
          <Button
            variant="contained"
            size="small"
            disableElevation
            onClick={addFilter}
          >
            اعمال
          </Button>
        </>
      )}
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    gap: 2,
    alignItems: "center",
  },
};

export default Sorting;
