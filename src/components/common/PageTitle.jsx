import { Box, Typography } from "@mui/material";
import ActionButton from "./ActionButton";
import VerticalSpace from "./VerticalSpace";

const PageTitle = ({ children, subtitle = "", buttonInfo = false }) => {
  return (
    <Box sx={{ mb: 5, display: "flex" }}>
      <Box>
        <Typography variant="h5" fontWeight={500}>
          {children}
        </Typography>
        <VerticalSpace amount="10px" />
        <Typography variant="caption">{subtitle}</Typography>
      </Box>
      <div style={{ flexGrow: 1 }} />
      {buttonInfo && (
        <ActionButton title={buttonInfo.title} click={buttonInfo.click} />
      )}
    </Box>
  );
};

export default PageTitle;
