import { Box } from "@mui/material";
import Menu from "./Menu";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <Box sx={styles.container}>
      <Topbar />
      <Menu />
      <Box sx={styles.children} className="children">
        {children}
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    p: "90px 90px 20px 20px",
    width: "100%",
    height: "100vh",
    backgroundColor: "primary.main",
  },
  children: {
    backgroundColor: "white",
    borderRadius: "60px",
    p: "30px",
    width: "100%",
    height: "100%",
    overflowY: "auto",
  },
};

export default Layout;
