import { Paper, Table, TableContainer } from "@mui/material";
import SelectableTableBody from "./SelectableTableBody";
import SelectableTableHead from "./SelectableTableHead";
import SelectableTableTitle from "./SelectableTableTitle";

const SelectableTable = ({
  title,
  rows,
  headCells,
  selected,
  setSelected,
  actionButtons = null,
}) => {
  const handleClick = (name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const selectAll = (e) => {
    e.target.checked ? setSelected(rows) : setSelected([]);
  };

  const isSelected = (row) => selected.indexOf(row) !== -1;

  return (
    <Paper sx={styles.container} elevation={3}>
      <SelectableTableTitle
        selectedLength={selected.length}
        title={title}
        actionButtons={actionButtons}
      />
      <TableContainer>
        <Table sx={styles.table} size="medium">
          <SelectableTableHead
            selectAll={selectAll}
            selectedLength={selected.length}
            rowsLength={rows.length}
            fieldsName={headCells}
          />
          <SelectableTableBody
            isSelected={isSelected}
            handleClick={handleClick}
            data={rows}
          />
        </Table>
      </TableContainer>
    </Paper>
  );
};

const styles = {
  container: { my: 3, p: 2 },
  table: { minWidth: 750 },
};

export default SelectableTable;
