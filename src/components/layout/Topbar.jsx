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

const Topbar = () => {
  return (
    <AppBar elevation={0} sx={styles.container}>
      <Typography variant="h3" noWrap sx={styles.logo}>
        luna
      </Typography>
      <SearchField />
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ display: "flex", alignItems: "center" }}>
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
        <Avatar src="/images/me.jpg" sx={{ width: 56, height: 56, mr: 2.5 }} />
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
  },
};

export default Topbar;
