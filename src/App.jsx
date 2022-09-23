import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { Home } from "./pages";
import { theme } from "./assets/customTheme";
import Layout from "./components/layout";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;