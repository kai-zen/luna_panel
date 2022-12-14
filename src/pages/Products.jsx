import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { headCells, productFields, rows } from "../assets/constants";
import { PageTitle } from "../components/common";
import { Filtering, QuantityLimit, Sorting } from "../components/filtering";
import { SelectableTable, ActionButtons } from "../components/table";

const Products = () => {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const buttonsInfo = [
    {
      title: "اعمال تخفیف",
      click: () => {},
    },
    {
      title: "حذف تخفیف",
      click: () => {},
    },
    {
      title: "افزودن موجودی",
      click: () => {},
    },
    {
      title: "اتمام موجودی",
      click: () => {},
    },
  ];

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
        title="محصولات"
        rows={rows}
        headCells={headCells}
        selected={selected}
        setSelected={setSelected}
        actionButtons={<ActionButtons buttonsInfo={buttonsInfo} />}
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
