import { Container, Grid, Box, Typography, Button } from "@mui/material";
import * as React from "react";
import ImageCard from "./ImageCard";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <React.Fragment>
      <Grid
        container
        sx={{
          background: "#e5e5e7",
          marginTop: "65px",
          textAlign: "initial",
          position: "relative",
        }}
      >
        <Grid item xs={1}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "200px",
            }}
          >
            <img
              src="https://apekshahandore.github.io/capstone_venia/static/media/chevron-left.90adf07fedb3ecf91519b196c2c4454f.svg"
              alt="fwd-arrow"
            />
          </Box>
        </Grid>
        <Grid item xs={5}>
          <Box>
            <br />
            <br />
            <Typography variant="h3" sx={{ fontWeight: 700 }}>
              Shop the new
              <br /> Signature Collection
            </Typography>
            <br />
            <Typography variant="subtitle1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod <br />
              tempor incididunt ut labore et dolore magna aliqua. Lobortis
              mattis <br />
              aliquam faucibus purus.
            </Typography>
            <Box>
              <br />
              <br />

              <Button
                sx={{ background: "#e26a2c", width: "200px" }}
                variant="contained"
                component={Link}
                to="/view-products-allproducts"
              >
                Shop Now
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              backgroundImage: `url(https://apekshahandore.github.io/capstone_venia/static/media/herobanner1.e381db1c14abfc717006.png)`,
              backgroundSize: "cover",
              height: 500,
            }}
          ></Box>
        </Grid>
      </Grid>
      <Box>
        <ImageCard />
      </Box>
      <Container>
        <Grid
          container
          sx={{
            textAlign: "initial",
            marginTop: "65px",
          }}
        >
          <Grid item xs={6}>
            <Box sx={{ padding: "40px" }}>
              <br />
              <br />
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                Take off in the new Signature Legging
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                Lorem Ipsum Dolor Tempor
              </Typography>
              <br />
              <br />
              <Typography variant="subtitle1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore
                magna.
              </Typography>
              <Box>
                <br />
                <br />

                <Button
                  sx={{
                    color: "#e26a2c",
                    width: "200px",
                    border: "2px solid #e26a2c",
                  }}
                  variant="outlined"
                  component={Link}
                  to="/view-products-allproducts"
                >
                  Shop Collection
                </Button>

                <Button
                  sx={{
                    background: "#e26a2c",
                    width: "200px",
                    marginLeft: "10px",
                  }}
                  variant="contained"
                  component={Link}
                  to="/view-products-allproducts"
                >
                  Shop Now
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box
              sx={{
                backgroundImage: `url(https://apekshahandore.github.io/capstone_venia/static/media/homebanner22.b059079456a38c25ef3e.png)`,
                backgroundSize: "cover",
                height: 500,
              }}
            ></Box>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid
          container
          sx={{
            textAlign: "initial",
            marginTop: "65px",
          }}
        >
          <Grid item xs={7}>
            <Box
              sx={{
                backgroundImage: `url(https://apekshahandore.github.io/capstone_venia/static/media/standingman.33999102e9d1828ff8f6.png)`,
                backgroundSize: "cover",
                height: 350,
                marginTop: "2vh",
                marginBottom: "2vh",
              }}
            ></Box>
          </Grid>
          <Grid item xs={5}>
            <Box
              sx={{
                backgroundColor: "#1b252c",
                color: "#ffff",
                height: 375,
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <Typography variant="h3">Conquer your next adventure</Typography>
              <Typography variant="subtitle1">
                Lorem Ipsum Dolor Tempor
              </Typography>

              <Button
                sx={{
                  color: "#fff",
                  width: "200px",
                  border: "2px solid #fff",
                  margin: "10px",
                }}
                variant="outlined"
                component={Link}
                to="/view-products-allproducts"
              >
                Shop Devices
                
              </Button>

              <Box
                sx={{
                  bottom: 64.5,
                  height: 60,
                  left: -27,
                  position: "absolute",
                  width: 56,
                }}
              >
                <img
                  sx={{ width: 100 }}
                  src="https://apekshahandore.github.io/capstone_venia/static/media/map-pin.c477d7d3206a6993881c0bfc6a33a201.svg"
                  alt="pin"
                />
                <hr
                  sx={{
                    borderBottom: "4px solid #e26a2c",
                    bottom: "57px",
                    width: "102px",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
