import { Checkbox, TableCell, TableHead, TableRow } from "@mui/material";

const SelectableTableHead = (props) => {
  const { selectedLength, rowsLength, selectAll, fieldsName } = props;
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
        {fieldsName.map((fieldName) => (
          <TableCell key={fieldName} align="center">
            {fieldName}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default SelectableTableHead;
