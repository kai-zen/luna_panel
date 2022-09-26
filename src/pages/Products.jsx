import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { headCells, productFields, rows } from "../assets/constants";
import { PageTitle } from "../components/common";
import { Filtering, QuantityLimit, Sorting } from "../components/filtering";
import ActionButtons from "../components/Products/ActionButtons";
import SelectableTable from "../components/selectable-table/index.jsx";

const Products = () => {
  const [selected, setSelected] = useState([]);

  const navigate = useNavigate();

  return (
    <Box>
      <PageTitle
        subtitle="در این صفحه میتوانید تمامی تغییرات ممکن را روی محصولات اعمال کنید."
        buttonInfo={{
          title: "افزودن محصول جدید",
          click: () => navigate("/add-product"),
        }}
      >
        صفحه مدیریت محصولات
      </PageTitle>
      <Box sx={styles.filtersContainer}>
        <QuantityLimit />
        <Sorting fields={productFields} />
        <Filtering fields={productFields} />
      </Box>
      <SelectableTable
        rows={rows}
        headCells={headCells}
        selected={selected}
        setSelected={setSelected}
        actionButtons={<ActionButtons />}
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

export default Products;
