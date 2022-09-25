import { Box, Chip, Typography } from "@mui/material";
import { useState } from "react";
import { Dropdown, NumberInput } from "../common";
import { moreOrLess } from "../../assets/constants";
import { ApplyFilterButton } from ".";

const Filtering = ({ fields }) => {
  // const { addFilter, removeFilter } = props;
  const [submitted, setSubmitted] = useState(false);

  return (
    <Box sx={styles.container}>
      <Typography variant="subtitle2">فیلتر بر اساس: </Typography>
      {submitted ? (
        <Chip
          onDelete={() => {
            setSubmitted(false);
            // removeFilter();
          }}
          label="قیمت / بیش از / 1000"
          sx={{ direction: "ltr" }}
        />
      ) : (
        <>
          <Box sx={styles.filtersContainer}>
            <Dropdown data={fields} />
            <Dropdown data={moreOrLess} />
            <NumberInput defaultValue={0} min={0} max={12_000_000} />
          </Box>
          <ApplyFilterButton
            click={() => {
              setSubmitted(true);
              // addFilter();
            }}
          />
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
  filtersContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
};

export default Filtering;
