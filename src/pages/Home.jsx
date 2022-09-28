import { useNavigate } from "react-router-dom";
import { Box, Grid, Paper, Typography } from "@mui/material";
import {
  Instagram as InstagramIcon,
  WhatsApp as WhatsappIcon,
} from "@mui/icons-material";
import { menuItems } from "../assets/constants";
import { PageTitle, VerticalSpace } from "../components/common";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <PageTitle subtitle="از طریق منوی پایین یا سمت راست به صفحه مورد نظر خود برو.">
        <Typography
          variant="h4"
          component="span"
          sx={styles.name}
        >{` ${"علی"} `}</Typography>
        عزیز به پنل مدیریتی فروشگاه لونا خوش آمدی!
      </PageTitle>
      <Grid container spacing={4}>
        {menuItems.map((item) => (
          <Grid item>
            <Paper
              sx={styles.navCardContainer}
              onClick={() => navigate(item.path)}
              elevation={4}
            >
              <Typography sx={{ fontWeight: "500" }}>{item.title}</Typography>
              <Box sx={{ fontSize: "2rem" }}>{item.active}</Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <VerticalSpace amount="30px" />
      <Paper sx={styles.contactContainer} elevation={0}>
        <Typography sx={styles.contactTitle}>
          راه های ارتباط با مدیر سایت:
        </Typography>
        <Typography sx={styles.contactText}>
          +98 933 890 6524
          <WhatsappIcon />
        </Typography>
        <Typography sx={styles.contactText}>
          ali.razipur
          <InstagramIcon />
        </Typography>
      </Paper>
    </Box>
  );
};

const styles = {
  navCardContainer: {
    width: "100px",
    py: "12px",
    borderRadius: "25px",
    display: "flex",
    flexDirection: "column",
    gap: 2,
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: ".5s",
    "&:hover": {
      backgroundColor: "primary.main",
    },
  },
  contactContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 1,
  },
  contactTitle: {
    fontWeight: "500",
    fontSize: "18px",
  },
  contactText: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    direction: "ltr",
  },
  name: {
    display: "inline",
    fontWeight: "bold",
    color: "CTA.dark",
  },
};

export default Home;
