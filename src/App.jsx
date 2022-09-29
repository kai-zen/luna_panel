import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Banners, Collections, Home, Orders, Products, Users } from "./pages";
import { theme } from "./assets/customTheme";
import Layout from "./components/Layout";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/users" element={<Users />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/banners" element={<Banners />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
