import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Collections, Home, Products } from "./pages";
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
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
