import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  TextField,
  FormControl,
  FormLabel,
  FormGroup,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import Styles from "../css/Link.module.css";
import { useSelector, useDispatch } from "react-redux";
const ariaLabel = { "aria-label": "description" };

export default function CheckOut() {
  const [shippingEdit, setShipping] = React.useState(false);
  const [shippingMethodEdit, setShippingMethod] = React.useState(false);
  const [paymentInfoEdit, paymentInfoMethod] = React.useState(false);
  const [reviewOrder, reviewOrderMethod] = React.useState(true);
  const [total, setTotal] = React.useState(0);
  const cartData = useSelector((state) => state.shoppingBag);
  const [user, setUser] = React.useState({
    id: 1,
    email: "John@gmail.com",
    username: "johnd",
    password: "m38rmF$",
    firstname: "John",
    lastname: "Doe",
    city: "kilcoole",
    street: "7835 new road",
    number: 3,
    zipcode: "12926-3874",
    lat: "-37.3159",
    long: "81.1496",
    state: "",
    country: "USA",
    phone: "1-570-236-7033",
    shipping: "Standard Shipping (4-8 business days via USPS) FREE",
    cvv: 233,
  });
  React.useEffect(() => {
    if (cartData.length > 0) {
      let add = cartData.reduce(function (previousValue, currentValue) {
        return {
          count: previousValue.count + currentValue.count,
        };
      });
      setTotal(add.count);
    }
  }, [cartData]);
  const handleChange = (event, type) => {
    setUser({
      ...user,
      [type]: event.target.value,
    });
  };
  const saveLocal =() =>{
    localStorage.setItem("user",JSON.stringify(user));
  }
  return (
    <React.Fragment>
      <Box sx={{ marginTop: 10 }}>
        <Container>
          <Typography variant="h3" sx={{ fontWeight: 600 }}>
            Check out
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 600, textAlign: "left" }}
                >
                  Guest Checkout
                </Typography>
              </Box>
              {/* shiiping box */}
              {!shippingEdit ? (
                <Box
                  sx={{
                    border: "1px solid #d1d3d6",
                    padding: 2,
                    marginBottom: 4,
                    marginTop: 4,
                  }}
                >
                  <Grid container>
                    <Grid item xs={4} sx={{ textAlign: "left" }}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, textAlign: "left" }}
                      >
                        Shipping Information
                      </Typography>
                    </Grid>
                    <Grid item xs={8} sx={{ textAlign: "Right" }}>
                      <Button
                        sx={{
                          color: "#e26a2c",
                        }}
                        onClick={() => {
                          setShipping(true);
                        }}
                      >
                        <EditIcon /> Edit
                      </Button>
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid item xs={4} sx={{ textAlign: "left" }}>
                      <Box>
                        <Typography variant="p">{user.email}</Typography>
                      </Box>
                      <Box>
                        <Typography variant="div">{user.phone}</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4} sx={{ textAlign: "left" }}>
                      <Box>
                        <Typography variant="p">
                          {user.firstname} {user.lastname}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="div">{user.street}</Typography>
                      </Box>
                      <Box>
                        <Typography variant="div">
                          {user.city} {user.state}
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="div">
                          {" "}
                          {user.zipcode}
                          {user.country}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              ) : (
                <Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, textAlign: "left" }}
                    >
                      Contact information
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{ fontWeight: 600, textAlign: "left" }}
                    >
                      We’ll use these details to keep you informed on your
                      delivery.
                    </Typography>
                  </Box>
                  <Box>
                    <Grid container spacing={4}>
                      <Grid item xs={6}>
                        <div>
                          <TextField
                            id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            defaultValue={user.email}
                            onChange={(e) => handleChange(e, "email")}
                            fullWidth
                          />
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div>
                          <TextField
                            id="outlined-basic"
                            label="Phone number"
                            defaultValue={user.phone}
                            onChange={(e) => handleChange(e, "phone")}
                            variant="outlined"
                            fullWidth
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, textAlign: "left", marginTop: 2 }}
                    >
                      Contact information
                    </Typography>
                    <Grid container spacing={4} sx={{ marginBottom: 2 }}>
                      <Grid item xs={6}>
                        <div>
                          <TextField
                            id="outlined-basic"
                            label="Country"
                            variant="outlined"
                            defaultValue={user.country}
                            onChange={(e) => handleChange(e, "country")}
                            fullWidth
                          />
                        </div>
                      </Grid>
                    </Grid>
                    <Grid container spacing={4} sx={{ marginBottom: 2 }}>
                      <Grid item xs={6}>
                        <div>
                          <TextField
                            id="outlined-basic"
                            label="First Name"
                            variant="outlined"
                            defaultValue={user.firstname}
                            onChange={(e) => handleChange(e, "firstname")}
                            fullWidth
                          />
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div>
                          <TextField
                            id="outlined-basic"
                            label="Last Name"
                            variant="outlined"
                            defaultValue={user.lastname}
                            onChange={(e) => handleChange(e, "lastname")}
                            fullWidth
                          />
                        </div>
                      </Grid>
                    </Grid>
                    <Grid container spacing={4} sx={{ marginBottom: 2 }}>
                      <Grid item xs={6}>
                        <div>
                          <TextField
                            id="outlined-basic"
                            label="Street Address"
                            variant="outlined"
                            defaultValue={user.street}
                            onChange={(e) => handleChange(e, "street")}
                            fullWidth
                          />
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div>
                          <TextField
                            id="outlined-basic"
                            label="City"
                            variant="outlined"
                            fullWidth
                            defaultValue={user.city}
                            onChange={(e) => handleChange(e, "city")}
                          />
                        </div>
                      </Grid>
                    </Grid>
                    <Grid container spacing={4} sx={{ marginBottom: 2 }}>
                      <Grid item xs={6}>
                        <div>
                          <TextField
                            id="outlined-basic"
                            label="State"
                            variant="outlined"
                            defaultValue={user.state}
                            onChange={(e) => handleChange(e, "state")}
                            fullWidth
                          />
                        </div>
                      </Grid>
                      <Grid item xs={6}>
                        <div>
                          <TextField
                            id="outlined-basic"
                            label="ZIP"
                            variant="outlined"
                            fullWidth
                            defaultValue={user.zipcode}
                            onChange={(e) => handleChange(e, "zipcode")}
                          />
                        </div>
                      </Grid>
                    </Grid>

                    <Button
                      variant="contained"
                      onClick={() => {
                        setShipping(false);
                      }}
                      className={Styles.common_button}
                    >
                      Continue to shipping method
                    </Button>
                  </Box>
                </Box>
              )}
              {/* shipping method  */}
              {!shippingMethodEdit ? (
                <Box
                  sx={{
                    border: "1px solid #d1d3d6",
                    padding: 2,
                    marginBottom: 4,
                    marginTop: 4,
                  }}
                >
                  <Grid container>
                    <Grid item xs={4} sx={{ textAlign: "left" }}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, textAlign: "left" }}
                      >
                        Shipping Method
                      </Typography>
                    </Grid>
                    <Grid item xs={8} sx={{ textAlign: "Right" }}>
                      <Button
                        sx={{
                          color: "#e26a2c",
                        }}
                        onClick={() => {
                          setShippingMethod(true);
                        }}
                      >
                        <EditIcon /> Edit
                      </Button>
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid item xs={4} sx={{ textAlign: "left" }}>
                      <Box>
                        <Typography variant="p">{user.shipping}</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              ) : (
                <Box>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, textAlign: "left" }}
                    >
                      2. Shipping Method
                    </Typography>
                  </Box>
                  <Grid container>
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={user.shipping}
                        onChange={(e) => handleChange(e, "shipping")}
                        name="radio-buttons-group"
                      >
                        <FormControlLabel
                          value="Standard Shipping (4-8 business days via USPS) FREE"
                          control={<Radio />}
                          label="Standard Shipping (4-8 business days via USPS) FREE"
                          defaultChecked
                        />
                        <FormControlLabel
                          value="Express Delivery (2-5 business days via USPS) $17.95"
                          control={<Radio />}
                          label="Express Delivery (2-5 business days via USPS) $17.95"
                          onChange={(e) => handleChange(e, "city")}
                        />
                        <FormControlLabel
                          value="Next Day Delivery (Next business days via FedEx) $53.61"
                          control={<Radio />}
                          label="Next Day Delivery (Next business days via FedEx) $53.61"
                          onChange={(e) => handleChange(e, "city")}
                        />
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setShippingMethod(false);
                    }}
                  >
                    Continue to payment
                  </Button>
                </Box>
              )}
              {/* payment method  */}
              {!paymentInfoEdit ? (
                <Box
                  sx={{
                    border: "1px solid #d1d3d6",
                    padding: 2,
                    marginBottom: 4,
                    marginTop: 4,
                  }}
                >
                  <Grid container>
                    <Grid item xs={4} sx={{ textAlign: "left" }}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, textAlign: "left" }}
                      >
                        Payment Information
                      </Typography>
                    </Grid>
                    <Grid item xs={8} sx={{ textAlign: "Right" }}>
                      <Button
                        sx={{
                          color: "#e26a2c",
                        }}
                        onClick={() => {
                          paymentInfoMethod(true);
                        }}
                      >
                        <EditIcon /> Edit
                      </Button>
                    </Grid>
                  </Grid>

                  <Grid container>
                    <Grid item xs={4} sx={{ textAlign: "left" }}>
                      <Box>
                        <Typography variant="p">
                          Credit Card Visa ending in {user.cvv}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              ) : (
                <Box>
                  <Grid container spacing={4}>
                    <Grid item xs={8}>
                      <div>
                        <TextField
                          id="outlined-basic"
                          label="Name on Card"
                          variant="outlined"
                          fullWidth
                        />
                      </div>
                    </Grid>
                    <Grid item xs={8}>
                      <div>
                        <TextField
                          id="outlined-basic"
                          label="Credit Card Number"
                          variant="outlined"
                          fullWidth
                        />
                      </div>
                    </Grid>
                    <Grid item xs={6} sx={{ textAlign: "left" }}>
                      <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker />
                        </LocalizationProvider>
                      </div>
                    </Grid>
                    <Grid item xs={2} sx={{ textAlign: "left" }}>
                      <TextField
                        id="outlined-basic"
                        label="CVV"
                        variant="outlined"
                        defaultValue={user.cvv}
                        fullWidth
                        onChange={(e) => handleChange(e, "cvv")}
                      />
                    </Grid>
                    <Grid item xs={6} sx={{ textAlign: "left" }}>
                      <div>
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="Billing address same as shipping address"
                          />
                        </FormGroup>
                      </div>
                    </Grid>
                    <Grid item xs={8} sx={{ textAlign: "left" }}>
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="female"
                          name="radio-buttons-group"
                        >
                          <FormControlLabel
                            value="female"
                            control={<Radio />}
                            label="PayPal"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Button
                    variant="contained"
                    onClick={() => {
                      paymentInfoMethod(false);
                      reviewOrderMethod(true);
                    }}
                  >
                    Continue to Review Order
                  </Button>
                </Box>
              )}
              {reviewOrder && cartData.length > 0 ? (
                <Box
                  sx={{
                    border: "1px solid #d1d3d6",
                    padding: 2,
                    marginBottom: 4,
                    marginTop: 4,
                  }}
                >
                  <Grid container>
                    <Grid item xs={12} sx={{ textAlign: "left" }}>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 600, textAlign: "left" }}
                      >
                        {total} items in your order
                      </Typography>
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
                  </Grid>
                </Box>
              ) : (
                <Box></Box>
              )}
              {reviewOrder ? (
                <Link to="/order-confirmation">
                  <Button variant="contained" onClick={saveLocal}>Place Order</Button>
                </Link>
              ) : (
                <Box></Box>
              )}
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
                        <TableCell align="right"> $109.95</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="td" scope="row">
                          Coupon
                        </TableCell>
                        <TableCell align="right"> $109.95</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="td" scope="row">
                          Gift Card
                        </TableCell>
                        <TableCell align="right"> $109.95</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="td" scope="row">
                          Estimated tax
                        </TableCell>
                        <TableCell align="right"> $109.95</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="td" scope="row">
                          Estimated shipping
                        </TableCell>
                        <TableCell align="right"> $109.95</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell component="td" scope="row">
                          Estimated Total
                        </TableCell>
                        <TableCell align="right"> $109.95</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
}
