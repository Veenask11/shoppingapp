import * as React from "react";
import {
  Grid,
  Box,
  Typography,
  Breadcrumbs,
  Link,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
export default function Products(props) {
  const [sorting, setValue] = React.useState("Sort By Price");

  const handleChange = (event, newValue) => {
    setValue(event.target.value);
    props.focusHandler(newValue);
  };
  return (
    <React.Fragment>
      <Box>
        <Box>
          <Grid container>
            <Grid item xs={4}>
              <Box
                sx={{
                  backgroundColor: "#1b252c",
                  color: "#ffff",
                  height: 350,
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    borderBottom: "4px solid #e26a2c",
                    fontWeight: 600,
                    textTransform: "capitalize",
                  }}
                >
                  {props.type}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={8}>
              <Box
                sx={{
                  backgroundImage: `url(https://www.kollamsupremeonline.com/img/cms/Online_poster.jpg)`,
                  backgroundSize: "cover",
                  height: 350,
                }}
              ></Box>
            </Grid>
          </Grid>
        </Box>
        <Container
          sx={{
            marginTop: 2,
            marginBottom: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid container sx={{ flexGrow: 1 }}>
            <Grid item xs={3}>
              <Box
                sx={{
                  textAlign: "left",
                  fontWeight: 600,
                  justifyContent: "center",
                }}
              >
                <Breadcrumbs aria-label="breadcrumb">
                  <Link underline="hover" color="inherit" href="/">
                    Home
                  </Link>
                  <Link
                    underline="hover"
                    color="inherit"
                    href={`/view-products-${props.type}`}
                  >
                    {props.type}
                  </Link>
                </Breadcrumbs>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                sx={{
                  textAlign: "left",
                  fontWeight: 600,
                  justifyContent: "center",
                }}
              >
                {props.data.length} Results
              </Box>
            </Grid>
            <Grid item xs={3} xsOffset="auto">
              <Box
                sx={{
                  textAlign: "left",
                  fontWeight: 600,
                  justifyContent: "center",
                }}
              >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Sort By Price
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sorting}
                    label="Sort By Price"
                    onChange={handleChange}
                  >
                    <MenuItem disabled value={"Sort By Price"}>
                      <em>Sort By Price</em>
                    </MenuItem>

                    <MenuItem value={"Low to high"}>Low to high</MenuItem>
                    <MenuItem value={"High to low"}>High to low</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
}
