import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { productFields } from "../assets/constants";
import { PageTitle } from "../components/common";
import { Filtering, QuantityLimit, Sorting } from "../components/filtering";
import { ProductsTable } from "../components/Products";

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
      <Box sx={styles.filtersContainer}>
        <QuantityLimit />
        <Sorting fields={productFields} />
        <Filtering fields={productFields} />
      </Box>
      <ProductsTable />
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
