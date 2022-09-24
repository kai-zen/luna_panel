import { Box } from "@mui/material";
import Topbar from "./Topbar";

const Layout = ({ children }) => {
  return (
    <Box sx={styles.container}>
      <Topbar />
      <Box sx={styles.children} className="children">
        {children}
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    p: "90px 100px 30px 30px",
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
