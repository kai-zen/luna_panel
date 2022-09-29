import { useState } from "react";
import { Box, Button, Chip, Typography } from "@mui/material";
import { NumberInput } from "../common";

const QuantityLimit = () => {
  // const { addFilter, removeFilter } = props;
  const [isUnitPercent, setIsUnitPercent] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  return (
    <Box sx={styles.container}>
      <Typography variant="subtitle2">تعداد نتایج: </Typography>
      {submitted ? (
        <Chip
          color="primary"
          label="حداکثر 100 عدد از نتایج"
          onDelete={() => {
            setSubmitted(false);
            // removeFilter();
          }}
          sx={{ direction: "ltr" }}
        />
      ) : (
        <>
          <NumberInput
            max={isUnitPercent && 100}
            startAdornment={
              <Chip
                color="primary"
                label={`${isUnitPercent ? "%" : "عدد"}`}
                onClick={() => setIsUnitPercent(!isUnitPercent)}
                size="large"
                sx={styles.chip}
              />
            }
          />
          <Button
            variant="contained"
            size="small"
            disableElevation
            onClick={() => {
              setSubmitted(true);
              // addFilter();
            }}
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
  chip: { lineHeight: "40px", ml: 1 },
};

export default QuantityLimit;
