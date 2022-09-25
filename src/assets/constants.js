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
