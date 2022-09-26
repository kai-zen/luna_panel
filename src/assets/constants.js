import {
  Checkroom,
  Extension,
  ExtensionOutlined,
  ShoppingCart,
  ShoppingCartOutlined,
  Group,
  GroupOutlined,
  ViewCarousel,
  ViewCarouselOutlined,
  Category,
  CategoryOutlined,
  QueryStats,
  Savings,
  SavingsOutlined,
  LocalOffer,
  LocalOfferOutlined,
} from "@mui/icons-material";
import { teal, green, blueGrey } from "@mui/material/colors";

export const allColors = [teal, green, blueGrey];

export const menuItems = [
  {
    title: "محصولات",
    path: "/products",
    active: <Checkroom sx={{ fontSize: "inherit" }} />,
    outlined: <Checkroom sx={{ fontSize: "inherit" }} />,
  },
  {
    title: "ست ها",
    path: "/collections",
    active: <Extension sx={{ fontSize: "inherit" }} />,
    outlined: <ExtensionOutlined sx={{ fontSize: "inherit" }} />,
  },
  {
    title: "کاربران",
    path: "/users",
    active: <Group sx={{ fontSize: "inherit" }} />,
    outlined: <GroupOutlined sx={{ fontSize: "inherit" }} />,
  },
  {
    title: "سفارشات",
    path: "/orders",
    active: <ShoppingCart sx={{ fontSize: "inherit" }} />,
    outlined: <ShoppingCartOutlined sx={{ fontSize: "inherit" }} />,
  },
  {
    title: "بنر ها",
    path: "/banners",
    active: <ViewCarousel sx={{ fontSize: "inherit" }} />,
    outlined: <ViewCarouselOutlined sx={{ fontSize: "inherit" }} />,
  },
  {
    title: "دسته ها",
    path: "/categories",
    active: <Category sx={{ fontSize: "inherit" }} />,
    outlined: <CategoryOutlined sx={{ fontSize: "inherit" }} />,
  },
  {
    title: "آمار",
    path: "/stats",
    active: <QueryStats sx={{ fontSize: "inherit" }} />,
    outlined: <QueryStats sx={{ fontSize: "inherit" }} />,
  },
  {
    title: "مالی",
    path: "/financial",
    active: <Savings sx={{ fontSize: "inherit" }} />,
    outlined: <SavingsOutlined sx={{ fontSize: "inherit" }} />,
  },
  {
    title: "تخفیفات",
    path: "/discounts",
    active: <LocalOffer sx={{ fontSize: "inherit" }} />,
    outlined: <LocalOfferOutlined sx={{ fontSize: "inherit" }} />,
  },
];

export const productFields = [
  {
    title: "قیمت",
    value: 0,
  },
  {
    title: "تعداد فروش",
    value: 1,
  },
  {
    title: "تاریخ",
    value: 2,
  },
  {
    title: "نام محصول",
    value: 3,
  },
];

export const moreOrLess = [
  {
    title: "بیشتر از",
    value: 0,
  },
  {
    title: "کمتر از",
    value: 1,
  },
];

export const ascendingOrDescending = [
  {
    title: "صعودی",
    value: 0,
  },
  {
    title: "نزولی",
    value: 1,
  },
];

//Products table
function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
  };
}

export const rows = [
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Donut", 452, 25.0, 51, 4.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Honeycomb", 408, 3.2, 87, 6.5),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Jelly Bean", 375, 0.0, 94, 0.0),
  createData("KitKat", 518, 26.0, 65, 7.0),
  createData("Lollipop", 392, 0.2, 98, 0.0),
  createData("Marshmallow", 318, 0, 81, 2.0),
  createData("Nougat", 360, 19.0, 9, 37.0),
  createData("Oreo", 437, 18.0, 63, 4.0),
];

export const headCells = [
  "Dessert (100g serving)",
  "Calories",
  "Fat (g)",
  "Carbs (g)",
  "Protein (g)",
];
