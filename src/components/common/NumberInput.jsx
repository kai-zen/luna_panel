import { TextField } from "@mui/material";

const NumberInput = (props) => {
  const {
    label = "",
    min = 1,
    max = 100,
    startAdornment = null,
    defaultValue = 1,
  } = props;

  return (
    <TextField
      sx={styles.input}
      label={label}
      type="number"
      variant="standard"
      InputProps={{
        inputProps: {
          max,
          min,
        },
        startAdornment,
      }}
      defaultValue={defaultValue}
    />
  );
};

const styles = {
  input: {
    width: "85px",
  },
};

export default NumberInput;
