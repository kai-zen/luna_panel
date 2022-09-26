import { MenuItem, Select } from "@mui/material";

const Dropdown = ({ data }) => {
  return (
    <Select
      sx={syles.container}
      // onChange={handleChange}
      defaultValue={data[0].value}
    >
      {data.map((item) => (
        <MenuItem value={item.value} key={item.title}>
          {item.title}
        </MenuItem>
      ))}
    </Select>
  );
};

const syles = {
  container: { height: "35px", fontSize: "14px" },
};

export default Dropdown;
