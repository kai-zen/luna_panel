import { Box, Button, Chip, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import { NumberInput } from "../common";

const Filtering = () => {
  const [submittedAmount, setSubmittedAmount] = useState(false);

  const addFilter = () => {
    setSubmittedAmount(true);
  };

  const removeFilter = () => {
    setSubmittedAmount(false);
  };
  return (
    <Box sx={styles.container}>
      <Typography variant="subtitle2">فیلتر بر اساس: </Typography>
      {submittedAmount ? (
        <Chip
          onDelete={removeFilter}
          label="قیمت / بیش از / 1000"
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
              <MenuItem value={0}>کمتر از</MenuItem>
              <MenuItem value={1}>بیشتر از</MenuItem>
            </Select>
            <NumberInput defaultValue={0} min={0} max={1_000_000} />
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

export default Filtering;
