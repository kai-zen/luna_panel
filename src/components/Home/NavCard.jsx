import { Box, Grid, Paper, Typography } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const NavCard = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Grid item>
      <Paper
        sx={{
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
        }}
        onClick={() => navigate(item.path)}
        elevation={6}
      >
        <Typography variant="h6">{item.title}</Typography>
        <Box
          sx={{
            width: "100px",
            height: "100px",
            borderRadius: "15px",
            fontSize: "4rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {item.active}
        </Box>
      </Paper>
    </Grid>
  );
};

export default NavCard;
