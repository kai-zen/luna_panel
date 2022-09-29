import { Box } from "@mui/material";
import { useState } from "react";
import { headCells, productFields, rows } from "../assets/constants";
import { PageTitle } from "../components/common";
import { Filtering, QuantityLimit, Sorting } from "../components/filtering";
import { ActionButtons, SelectableTable } from "../components/table";

const Users = () => {
  const [selected, setSelected] = useState([]);

  const buttonsInfo = [
    {
      title: "افزودن تخفیف",
      click: () => {},
    },
    {
      title: "ارسال ایمیل",
      click: () => {},
    },
    {
      title: "ارسال پیامک",
      click: () => {},
    },
    {
      title: "مسدود کردن",
      click: () => {},
    },
    {
      title: "رها کردن",
      click: () => {},
    },
  ];

  return (
    <Box>
      <PageTitle subtitle="در این صفحه میتوانید کاربران را مدیریت کنید.">
        صفحه مدیریت کاربران
      </PageTitle>
      <Box sx={styles.filtersContainer}>
        <QuantityLimit />
        <Sorting fields={productFields} />
        <Filtering fields={productFields} />
      </Box>
      <SelectableTable
        title="کاربران"
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

export default Users;
