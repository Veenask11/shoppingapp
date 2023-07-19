import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

export default function OrderConfirmation(props) {
  const user =  localStorage.getItem("user");
  const userData = JSON.parse(user);
  const cartData = useSelector((state) => state.shoppingBag);

  return (
    <React.Fragment>
      <Box sx={{ marginTop: 10 }}>
        <Typography variant="h3" sx={{ fontWeight: 600 }}>
          Order Successful! 
        </Typography>
        <Box>
          <Container>
            <Grid container spacing={4}>
              <Grid item xs={7}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: 600, textAlign: "left" }}
                >
                  Order Number #4987404
                </Typography>
                <Grid container spacing={4}>
                  <Grid item xs={6}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, textAlign: "left" }}
                    >
                      Shipping Information
                    </Typography>
                    <Box sx={{ textAlign: "left" }}>
                      <p>
                        {userData.email } {userData.phone} {userData.firstname } {userData.lastname} 
                        {userData.street }{userData.city } {userData.country } {userData.zipcode }
                        United States
                      </p>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, textAlign: "left" }}
                    >
                      Shipping Method
                    </Typography>
                    <Box sx={{ textAlign: "left" }}>
                      <p>
                     {userData.shipping}
                      </p>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, textAlign: "left" }}
                    >
                      Payment Information
                    </Typography>
                    <Box sx={{ textAlign: "left" }}>
                      <p>Credit Card Visa ending in {userData.cvv}</p>
                    </Box>
                  </Grid>
                </Grid>
                <Grid container>
                      {cartData.map((item, index) => (
                        <Grid item xs={6} key={item.id}>
                          <Grid container>
                            <Grid item xs={6} sx={{ textAlign: "left" }}>
                              <img
                                src={item.image}
                                alt={item.title}
                                width={100}
                                height={200}
                              />
                            </Grid>

                            <Grid item xs={6} sx={{ textAlign: "left" }}>
                              <p>
                                name of the pdt : {item.title.substring(0, 18)}
                              </p>
                              <p>color: Medium</p>
                              <p>size: Medium</p>
                              <p>price: ${item.price}</p>
                            </Grid>
                          </Grid>
                        </Grid>
                      ))}
                    </Grid>
                    <Box sx={{ textAlign: "left" }}>
                    <p>
                      You will also receive an email with the details and we
                      will let you know when your order has shipped. Lorem ipsum
                      dolor sit amet, consetetur sadipscing elitr, sed diam
                      nonumy eirmod tempor invidunt ut labore et dolore magna
                      aliquyam erat, sed diam voluptua. At vero eos et accusam
                      et justo duo dolores et ea rebum. For assistance call
                      Support at 1-800-867-5309, M - F, 9am - 8pm EST.
                    </p>
                  </Box>
              </Grid>
              <Grid item xs={5} >
              <Typography variant="h2" sx={{fontWeight:800,backgroundColor:'#ff8243',marginTop:5,color:'#ffff'}}>Give us a follow to SAVE 20% on your next order.</Typography>
                </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
}
