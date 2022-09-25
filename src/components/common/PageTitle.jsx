import { Box, Typography } from "@mui/material";
import ActionButton from "./ActionButton";
import VerticalSpace from "./VerticalSpace";

const PageTitle = ({ children = null, subtitle = "", buttonInfo = false }) => {
  return (
    <Box sx={{ mb: 5, display: "flex" }}>
      <Box>
        <Typography variant="h6">{children}</Typography>
        <VerticalSpace amount="5px" />
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
