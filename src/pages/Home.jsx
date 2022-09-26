import { Box, Grid, Typography } from "@mui/material";
import { menuItems } from "../assets/constants";
import { PageTitle, VerticalSpace } from "../components/common";
import { ContactManager, NavCard } from "../components/Home";

const Home = () => {
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
          <NavCard item={item} key={item.title} />
        ))}
      </Grid>
      <VerticalSpace amount="30px" />
      <ContactManager />
    </Box>
  );
};

const styles = {
  name: {
    display: "inline",
    fontWeight: "bold",
    color: "CTA.dark",
  },
};

export default Home;
