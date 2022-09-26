import { Checkbox, TableCell, TableHead, TableRow } from "@mui/material";
import { headCells } from "../../assets/constants";

const ProductsTableHead = ({ selectedLength, rowsLength, selectAll }) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="secondary"
            indeterminate={selectedLength > 0 && selectedLength < rowsLength}
            checked={rowsLength > 0 && selectedLength === rowsLength}
            onChange={selectAll}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            padding="normal"
            sortDirection={false}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default ProductsTableHead;
