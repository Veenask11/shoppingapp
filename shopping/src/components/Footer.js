import * as React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  Container,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Footer() {
  return (
    <React.Fragment>
      <Box sx={{ marginTop: "auto" }}>
        <hr />
        <Container sx={{ textAlign: "initial", marginTop: "30px" }}>
          <Grid container>
            <Grid item xs={3} sz>
              <Typography variant="h6">Account</Typography>
              <Box>
                <Link href="#" underline="none" color="inherit">
                  Sign In
                </Link>
              </Box>
              <Box>
                <Link href="#" underline="none" color="inherit">
                  Register
                </Link>
              </Box>
              <Box>
                <Link href="#" underline="none" color="inherit">
                  Order Status
                </Link>
              </Box>
            </Grid>

            <Grid item xs={3} sz>
              <Typography variant="h6">About Us</Typography>
              <Box>
                <Link href="#" underline="none" color="inherit">
                  Our Story
                </Link>
              </Box>
              <Box>
                <Link href="#" underline="none" color="inherit">
                  Careers
                </Link>
              </Box>
            </Grid>

            <Grid item xs={3} sz>
              <Typography variant="h6">Help</Typography>
              <Box>
                <Link href="#" underline="none" color="inherit">
                  Contact Us
                </Link>
              </Box>
              <Box>
                <Link href="#" underline="none" color="inherit">
                  Order Status
                </Link>
              </Box>
              <Box>
                <Link href="#" underline="none" color="inherit">
                  Returns
                </Link>
              </Box>
            </Grid>

            <Grid item xs={3} sz>
              <Typography variant="h6">Follow Us!</Typography>
              <Box>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
              </Box>
              <Box sx={{ marginLeft: "-40px" }}>
                <BottomNavigation showLabels>
                  <BottomNavigationAction icon={<InstagramIcon />} />
                  <BottomNavigationAction icon={<TwitterIcon />} />
                  <BottomNavigationAction icon={<FacebookIcon />} />
                </BottomNavigation>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <hr />
        <Container sx={{ marginTop: "30px" }}>
          <Grid container>
            <Grid item xs={1} sz>
              <Box>
                <img
                  alt="logo"
                  src="https://apekshahandore.github.io/capstone_venia/static/media/logo3.f17b4f0a6b57e56f010c.PNG"
                />
              </Box>
            </Grid>
            <Grid item xs={8} sz>
              <Box>&copy; Company Name Address Ave, City Name, State ZIP</Box>
            </Grid>
            <Grid item xs={3} sz>
              <Box>
                <Link href="#" sx={{ marginRight: "20px" }} color="inherit">
                  Terms of Use
                </Link>
                <Link href="#" color="inherit">
                  Privacy Policy
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
}
