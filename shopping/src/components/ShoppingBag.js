import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  ButtonGroup,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  increamentCartItemAction,
  decreamentItemAction,
  removeItemAction,
} from "../redux/Actions";

export default function ShoppingBag() {
  const [total, setTotal] = React.useState(0);
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.shoppingBag);
  const IncNum = (data) => {
    dispatch(increamentCartItemAction(data));
  };

  React.useEffect(() => {
    let totalPrice = 0;
    if (cartData.length > 0) {
      const mapArray = cartData.map((item) =>{
        totalPrice += (item.price * item.count)
    })
      setTotal(totalPrice);
    }
  }, [cartData]);
  const DecNum = (data) => {
    if(data.count > 1){
      dispatch(decreamentItemAction(data));
    }else{
      dispatch(removeItemAction(data));
    }
    
  };

  const Remove = (data) => {
    dispatch(removeItemAction(data));
  };
  return (
    <React.Fragment>
      <Box sx={{ marginTop: 10 }}>
        <Typography variant="h3" sx={{ fontWeight: 600 }}>
          Your Shopping Bag
        </Typography>

        <Box>
          <Container>
            {cartData.length > 0 ? (
              <Grid container spacing={4}>
                <Grid item xs={8}>
                  {cartData.map((item, index) => (
                    <Grid
                      container
                      spacing={1}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      key={item.id}
                    >
                      <Grid item xs={4}>
                        <img
                          src={item.image}
                          alt={item.title}
                          width={150}
                          height={200}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={7}
                        sx={{ textAlign: "left", marginLeft: 1 }}
                      >
                        <Typography variant="h6">
                          name of the pdt : {item.title.substring(0, 18)}
                        </Typography>
                        <Typography variant="h6">size: Medium </Typography>
                        <Typography variant="h6">
                          price: ${item.price}
                        </Typography>
                        <Grid container spacing={1} sx={{ marginTop: 3 }}>
                          <Grid item xs={4}>
                            <Box
                              sx={{
                                display: "flex-container",
                                justifyContent: "center",
                                alignItems: "center",
                                paddingBottom: 1,
                              }}
                            >
                              <ButtonGroup
                                size="small"
                                aria-label="small outlined button group"
                                sx={{
                                  backgroundColor: "#ffff",
                                  color: "#b5b7bc",
                                }}
                              >
                                <Button
                                  sx={{
                                    backgroundColor: "#ffff",
                                    border: "2px solid #1976d2",
                                  }}
                                  onClick={() => DecNum(item)}
                                >
                                  -
                                </Button>
                                <Button
                                  sx={{
                                    backgroundColor: "#ffff",
                                    border: "2px solid #1976d2",
                                  }}
                                >
                                  {item.count}
                                </Button>

                                <Button
                                  sx={{
                                    backgroundColor: "#ffff",
                                    border: "2px solid #1976d2",
                                  }}
                                  onClick={() => IncNum(item)}
                                >
                                  +
                                </Button>
                              </ButtonGroup>
                            </Box>
                          </Grid>
                          <Grid item xs={6}>
                            <Box
                              sx={{
                                display: "flex-container",
                                justifyContent: "space-between",
                                alignItems: "center",
                                paddingBottom: 1,
                              }}
                            >
                              <Typography>
                                <FavoriteIcon />
                              </Typography>
                              <Typography>Save for later</Typography>
                              <Button sx={{color:'black'}} onClick={() => Remove(item)}>
                              <Typography>
                                <DeleteIcon />
                              </Typography>
                              <Typography >
                                Remove
                              </Typography>
                              </Button>
                              <Typography>
                                <EditIcon />
                              </Typography>
                              <Typography>Edit Items</Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}

                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      sx={{ border: "1px solid #d1d3d6", marginTop: 5 }}
                    >
                      <TableContainer>
                        <Table aria-label="simple table">
                          <TableBody>
                            <TableRow>
                              <TableCell component="td" scope="row">
                                Estimated Shipping
                              </TableCell>
                              <TableCell align="right">
                                Shipping to 91001
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell component="td" scope="row">
                                Coupon Code
                              </TableCell>
                              <TableCell align="right">
                                20% discount applied
                              </TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell component="td" scope="row">
                                Gift Card
                              </TableCell>
                              <TableCell align="right"> -</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={4}>
                  <Box sx={{ border: "1px solid #d1d3d6", padding: 3 }}>
                    <Typography variant="h5" sx={{ fontWeight: 600 }}>
                      Pricing Summary
                    </Typography>
                    <TableContainer>
                      <Table aria-label="simple table">
                        <TableBody>
                          <TableRow>
                            <TableCell component="td" scope="row">
                              Subtotal 
                            </TableCell>
                            <TableCell align="right"> ${total}</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell component="td" scope="row">
                              Coupon
                            </TableCell>
                            <TableCell align="right"> -$77.60</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell component="td" scope="row">
                              Gift Card
                            </TableCell>
                            <TableCell align="right">-$100.00</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell component="td" scope="row">
                              Estimated tax
                            </TableCell>
                            <TableCell align="right"> $ 23.28</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell component="td" scope="row">
                              Estimated shipping
                            </TableCell>
                            <TableCell align="right"> FREE</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell component="td" scope="row">
                              Estimated Total 
                            </TableCell>
                            <TableCell align="right"> ${total}</TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                    <Typography sx={{ paddingBottom: 1, paddingTop: 1 }}>
                      <Link to="/check-out">
                        <Button
                          variant="contained"
                          sx={{
                            background: "#e26a2c",
                            color: "#ffff",
                            paddingRight: 3,
                            paddingLeft: 3,
                          }}
                        >
                          CHECKOUT
                        </Button>
                      </Link>
                    </Typography>
                    <Typography>
                      <Button
                        sx={{
                          background: "#e26a2c",
                          color: "#ffff",
                          paddingRight: 3,
                          paddingLeft: 3,
                        }}
                        variant="contained"
                      >
                        Pay Pal
                      </Button>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            ) : (
              <Typography variant="h5" sx={{ fontWeight: 600 }}>
                No items in your cart
              </Typography>
            )}
          </Container>
        </Box>
      </Box>
    </React.Fragment>
  );
}
