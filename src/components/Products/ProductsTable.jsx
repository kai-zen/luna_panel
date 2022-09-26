import { useState } from "react";
import { Table, TableContainer, Paper } from "@mui/material";
import { ProductsTableTitle, ProductsTableHead, ProductsTableBody } from ".";
import { rows } from "../../assets/constants";

const ProductsTable = () => {
  const [selected, setSelected] = useState([]);

  const selectAll = (e) => {
    e.target.checked ? setSelected(rows) : setSelected([]);
  };

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

  const isSelected = (row) => selected.indexOf(row) !== -1;

  return (
    <Paper sx={styles.container} elevation={3}>
      <ProductsTableTitle length={selected.length} />
      <TableContainer>
        <Table sx={styles.table} size="medium">
          <ProductsTableHead
            selectAll={selectAll}
            selectedLength={selected.length}
            rowsLength={rows.length}
          />
          <ProductsTableBody
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

export default ProductsTable;
