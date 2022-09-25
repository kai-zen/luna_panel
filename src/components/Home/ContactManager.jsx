import {
  Instagram as InstagramIcon,
  WhatsApp as WhatsappIcon,
} from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const ContactManager = () => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>راه های ارتباط با مدیر سایت:</Typography>
      <Typography sx={styles.text}>
        +98 933 890 6524
        <WhatsappIcon />
      </Typography>
      <Typography sx={styles.text}>
        ali.razipur
        <InstagramIcon />
      </Typography>
    </Box>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 1,
  },
  title: {
    fontWeight: "500",
    fontSize: "18px",
  },
  text: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    direction: "ltr",
  },
};

export default ContactManager;
