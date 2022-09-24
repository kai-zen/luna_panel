import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";

const SearchField = () => {
  return (
    <Box sx={styles.container}>
      <input type="text" style={styles.input} placeholder="جستجو..." />
      <SearchIcon sx={styles.icon} />
    </Box>
  );
};

const styles = {
  container: {
    m: 2,
    display: "flex",
    alignItems: "center",
    position: "relative",
    height: "36px",
    width: "260px",
  },
  input: {
    fontFamily: "iransans",
    padding: "5px 15px",
    borderRadius: "18px",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(256,256,256,.5)",
  },
  icon: {
    position: "absolute",
    left: "8px",
  },
};

export default SearchField;
