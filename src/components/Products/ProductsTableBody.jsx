import { Checkbox, TableBody, TableCell, TableRow } from "@mui/material";

const ProductsTableBody = ({ isSelected, handleClick, data }) => {
  return (
    <TableBody>
      {data.map((row) => {
        const { name, calories, fat, carbs, protein } = row;
        return (
          <TableRow
            hover
            onClick={() => handleClick(row)}
            role="checkbox"
            tabIndex={-1}
            key={row.name}
            selected={isSelected(row)}
          >
            <TableCell padding="checkbox">
              <Checkbox color="secondary" checked={isSelected(row)} />
            </TableCell>
            {[name, calories, fat, carbs, protein].map((value) => (
              <TableCell align="center">{value}</TableCell>
            ))}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default ProductsTableBody;
