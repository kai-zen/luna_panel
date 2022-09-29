import { Checkbox, TableBody, TableCell, TableRow } from "@mui/material";

const BannerTableBody = (props) => {
  const { isSelected, handleClick, data } = props;

  return (
    <TableBody>
      {data.map((row) => {
        const { name, calories, carbs, protein } = row;
        return (
          <TableRow
            hover
            onClick={() => handleClick(row)}
            role="checkbox"
            tabIndex={-1}
            key={name}
            selected={isSelected(row)}
          >
            <TableCell padding="checkbox">
              <Checkbox color="secondary" checked={isSelected(row)} />
            </TableCell>
            <TableCell align="center" sx={styles.bannerImage}>
              <img alt="banner" src="/images/banner.jpg" style={styles.image} />
            </TableCell>
            {[name, calories, carbs, protein].map((value, i) => (
              <TableCell align="center" key={`${value}${i}`}>
                {value}
              </TableCell>
            ))}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

const styles = {
  bannerImage: {
    width: "200px",
  },
  image: {
    width: "100%",
    imageSize: "cover",
  },
};

export default BannerTableBody;
