import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PageTitle, VerticalSpace } from "../components/common";
import {
  ActionButtons,
  Filtering,
  QuantityLimit,
  Sorting,
} from "../components/Products";

const Products = () => {
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
      <QuantityLimit />
      <VerticalSpace amount="30px" />
      <Sorting />
      <VerticalSpace amount="30px" />
      <Filtering />
      <VerticalSpace amount="30px" />
      <ActionButtons />
    </Box>
  );
};

export default Products;
