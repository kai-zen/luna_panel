import { useState } from "react";
import { Box } from "@mui/material";
import { PageTitle } from "../components/common";
import { SelectableTable } from "../components/table";
import { Filtering, QuantityLimit, Sorting } from "../components/filtering";
import { headCells, productFields, rows } from "../assets/constants";

const Orders = () => {
  const [selected, setSelected] = useState([]);

  return (
    <Box>
      <PageTitle subtitle="در این صفحه میتوانید سفارشات را مدیریت کنید.">
        صفحه مدیریت سفارشات
      </PageTitle>
      <Box sx={styles.filtersContainer}>
        <QuantityLimit />
        <Sorting fields={productFields} />
        <Filtering fields={productFields} />
      </Box>
      <SelectableTable
        title="سفارشات"
        rows={rows}
        headCells={headCells}
        selected={selected}
        setSelected={setSelected}
      />
    </Box>
  );
};

const styles = {
  filtersContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
};

export default Orders;
