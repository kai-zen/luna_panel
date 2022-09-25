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
        elevation={4}
      >
        <Typography sx={styles.text}>{item.title}</Typography>
        <Box sx={styles.item}>{item.active}</Box>
      </Paper>
    </Grid>
  );
};

const styles = {
  container: {
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
      backgroundColor: indigo[100],
    },
  },
  text: {
    fontWeight: "500",
  },
  item: {
    fontSize: "2rem",
  },
};

export default NavCard;
