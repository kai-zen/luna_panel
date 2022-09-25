import { Box, Grid, Typography } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { menuItems } from "../assets/constants";
import { VerticalSpace } from "../components/common";
import NavCard from "../components/Home/NavCard";

const Home = () => {
  return (
    <Box>
      <Typography variant="h6">
        <span style={styles.name}>{` ${"علی"} `}</span>
        عزیز به پنل مدیریتی فروشگاه لونا خوش آمدی!
      </Typography>
      <VerticalSpace amount="5px" />
      <Typography variant="caption">
        از طریق منوی پایین یا سمت راست به صفحه مورد نظر خود بروید.
      </Typography>
      <Grid container sx={styles.grid} spacing={4}>
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
  grid: {
    mt: 3,
  },
};

export default Home;
