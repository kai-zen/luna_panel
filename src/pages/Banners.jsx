import { Box } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { headCells, rows } from "../assets/constants";
import { PageTitle } from "../components/common";
import { ActionButtons, BannerTable } from "../components/table";

const Banners = () => {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  const buttonsInfo = [
    {
      title: "حذف بنرهای انتخاب شده",
      click: () => {},
    },
  ];

  return (
    <Box>
      <PageTitle
        subtitle="در این صفحه میتوانید تمامی تغییرات ممکن را روی بنر ها اعمال کنید."
        buttonInfo={{
          title: "افزودن بنر جدید",
          click: () => navigate("/add-banner"),
        }}
      >
        صفحه مدیریت بنر ها
      </PageTitle>
      <BannerTable
        rows={rows}
        headCells={headCells}
        selected={selected}
        setSelected={setSelected}
        actionButtons={<ActionButtons buttonsInfo={buttonsInfo} />}
      />
    </Box>
  );
};

export default Banners;
