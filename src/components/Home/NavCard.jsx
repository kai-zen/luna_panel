import { Box, Grid, Paper, Typography } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const NavCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Grid item>
      <Paper
        sx={styles.container}
        onClick={() => navigate(item.path)}
        elevation={6}
      >
        <Typography variant="h6">{item.title}</Typography>
        <Box sx={styles.item}>{item.active}</Box>
      </Paper>
    </Grid>
  );
};

const styles = {
  container: {
    p: "12px 30px 20px",
    borderRadius: "25px",
    display: "flex",
    flexDirection: "column",
    gap: 2,
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: ".5s",
    "&:hover": {
      backgroundColor: indigo[100],
    },
  },
  item: {
    width: "100px",
    height: "100px",
    borderRadius: "15px",
    fontSize: "3.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default NavCard;
