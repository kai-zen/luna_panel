import { Box, Grid } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { menuItems } from "../assets/constants";
import { PageTitle } from "../components/common";
import { NavCard } from "../components/Home";

const Home = () => {
  return (
    <Box>
      <PageTitle subtitle="از طریق منوی پایین یا سمت راست به صفحه مورد نظر خود بروید.">
        <span style={styles.name}>{` ${"علی"} `}</span>
        عزیز به پنل مدیریتی فروشگاه لونا خوش آمدی!
      </PageTitle>
      <Grid container spacing={4}>
        {menuItems.map((item) => (
          <NavCard item={item} />
        ))}
      </Grid>
    </Box>
  );
};

const styles = {
  name: {
    fontWeight: "bold",
    color: indigo[700],
  },
};

export default Home;
