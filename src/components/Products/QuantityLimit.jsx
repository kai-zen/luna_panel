import { useState } from "react";
import { Box, Button, Chip, Typography } from "@mui/material";
import { NumberInput } from "../common";

const QuantityLimit = () => {
  const [isUnitPercent, setIsUnitPercent] = useState(true);
  const [submittedAmount, setSubmittedAmount] = useState(false);

  const handleClick = () => {
    setIsUnitPercent(!isUnitPercent);
  };

  const addFilter = () => {
    setSubmittedAmount(true);
  };

  const removeFilter = () => {
    setSubmittedAmount(false);
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="subtitle2">تعداد نتایج: </Typography>
      {submittedAmount ? (
        <Chip
          label="حداکثر 100 عدد از نتایج"
          onDelete={removeFilter}
          sx={{ direction: "ltr" }}
        />
      ) : (
        <>
          <NumberInput
            max={isUnitPercent && 100}
            startAdornment={
              <Chip
                label={`${isUnitPercent ? "%" : "عدد"}`}
                onClick={handleClick}
                size="large"
                sx={{ lineHeight: "40px", ml: 1 }}
              />
            }
          />
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

export default QuantityLimit;
