import { Box, IconButton, Tooltip } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { useLocation, useNavigate } from "react-router-dom";
import { menuItems } from "../../assets/constants";

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  return (
    <Box sx={styles.container}>
      {menuItems.map((item) => (
        <Tooltip title={item.title} placement="left">
          <IconButton
            sx={{
              ...styles.item,
              backgroundColor: `${
                location.pathname === item.path ? indigo[200] : indigo[50]
              }`,
            }}
            onClick={() => navigate(item.path)}
          >
            {location.pathname === item.path ? item.active : item.outlined}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
};

const styles = {
  container: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    width: "90px",
    justifyContent: "space-between",
    alignItems: "center",
    right: 0,
    mt: 2,
    gap: 1,
  },
  item: {
    color: "#000",
    fontSize: "1.5rem",
    backgroundColor: indigo[200],
  },
};

export default Menu;
