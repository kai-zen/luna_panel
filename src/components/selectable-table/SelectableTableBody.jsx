import { Checkbox, TableBody, TableCell, TableRow } from "@mui/material";

const SelectableTableBody = (props) => {
  const { isSelected, handleClick, data } = props;
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
            key={name}
            selected={isSelected(row)}
          >
            <TableCell padding="checkbox">
              <Checkbox color="secondary" checked={isSelected(row)} />
            </TableCell>
            {[name, calories, fat, carbs, protein].map((value, i) => (
              <TableCell align="center" key={`${value}${i}`}>
                {value}
              </TableCell>
            ))}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default SelectableTableBody;
