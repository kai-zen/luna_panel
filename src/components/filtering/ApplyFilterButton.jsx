import { Button } from "@mui/material";

const ApplyFilterButton = ({ click }) => {
  return (
    <Button variant="contained" size="small" disableElevation onClick={click}>
      اعمال
    </Button>
  );
};

export default ApplyFilterButton;
