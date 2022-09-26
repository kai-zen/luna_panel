import { Toolbar, Typography } from "@mui/material";
import ActionButtons from "./ActionButtons";

const ProductsTableTitle = ({ length }) => {
  return (
    <Toolbar sx={{ pl: 2, pr: 1 }}>
      <Typography variant="h6" id="tableTitle" component="div">
        {`${length > 0 ? `${length} مورد انتخاب شده` : "محصولات"}`}
      </Typography>
      <div style={{ flexGrow: 1 }} />
      <ActionButtons />
    </Toolbar>
  );
};

export default ProductsTableTitle;
