import { useState } from "react";
import { Box, Chip, Typography } from "@mui/material";
import { Dropdown } from "../common";
import { ascendingOrDescending } from "../../assets/constants";
import { ApplyFilterButton } from ".";

const Sorting = ({ fields }) => {
  // const { addSort, removeSort } = props;
  const [submitted, setSubmitted] = useState(false);

  return (
    <Box sx={styles.container}>
      <Typography variant="subtitle2">مرتب سازی بر اساس: </Typography>
      {submitted ? (
        <Chip
          onDelete={() => {
            setSubmitted(false);
            // removeSort();
          }}
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
            <Dropdown data={fields} />
            <Dropdown data={ascendingOrDescending} />
          </Box>
          <ApplyFilterButton
            click={() => {
              setSubmitted(true);
              // addSort();
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
};

export default Sorting;
