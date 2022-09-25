import {
  AppBar,
  Box,
  IconButton,
  Typography,
  Badge,
  Avatar,
} from "@mui/material";
import {
  Mail as MailIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import { SearchField } from "../common";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();
  return (
    <AppBar elevation={0} sx={styles.container}>
      <Typography
        variant="h3"
        noWrap
        sx={styles.logo}
        onClick={() => navigate("/")}
      >
        luna
      </Typography>
      <SearchField />
      <div style={{ flexGrow: 1 }} />
      <Box sx={styles.iconContainer}>
        <IconButton color="inherit">
          <Badge variant="dot" overlap="circular" color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <Badge variant="dot" overlap="circular" color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <Avatar src="/images/me.jpg" sx={styles.avatar} />
      </Box>
    </AppBar>
  );
};

const styles = {
  container: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "90px",
    alignItems: "center",
    px: 3,
  },
  logo: {
    fontFamily: "pacifico",
    ml: 5,
    cursor: "pointer",
  },
  iconContainer: { display: "flex", alignItems: "center" },
  avatar: { width: 56, height: 56, mr: 2.5 },
};

export default Topbar;
