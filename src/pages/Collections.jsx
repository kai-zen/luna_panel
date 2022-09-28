import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { headCells, productFields, rows } from "../assets/constants";
import { PageTitle } from "../components/common";
import { Filtering, Sorting } from "../components/filtering";
import { ActionButtons, SelectableTable } from "../components/table";

const Collections = () => {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const buttonsInfo = [
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
        subtitle="در این صفحه میتوانید تمامی تغییرات ممکن را روی ست ها اعمال کنید."
        buttonInfo={{
          title: "افزودن ست جدید",
          click: () => navigate("/add-collection"),
        }}
      >
        صفحه مدیریت ست ها
      </PageTitle>
      <Box sx={styles.filtersContainer}>
        <Sorting fields={productFields} />
        <Filtering fields={productFields} />
      </Box>
      <SelectableTable
        title="ست ها"
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

export default Collections;
