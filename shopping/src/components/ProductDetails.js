import React from "react";
import {
  Grid,
  Box,
  Container,
  Breadcrumbs,
  Link,
  Typography,
  Rating,
  Button,
  ButtonGroup,
  List,
  ListItem,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import { useParams } from "react-router-dom";
import Styles from "../css/Link.module.css";
import { useSelector, useDispatch } from "react-redux";
import { addToCartAction } from "../redux/Actions";

export default function ProductDetails() {
  const params = useParams();
  const id = params.id;
  const [count, setCount] = React.useState(1);
  const [data, setData] = React.useState({});
  const dispatch = useDispatch();
  React.useEffect(() => {
    const url = `https://fakestoreapi.com/products/${id}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  const IncNum = () => {
    setCount(count + 1);
  };
  const DecNum = () => {
    if (count > 0) setCount(count - 1);
    else {
      setCount(0);
    }
  };
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const addToCartHandler = () => {
    let obj = {
      data,
      count,
    };
    dispatch(addToCartAction(obj));
  };
  return (
    <React.Fragment>
      <Box sx={{ marginTop: 10 }}>
        <Container>
          <Grid container>
            <Grid item xs={1}>
              <List>
                <ListItem
                  selected={selectedIndex === 0}
                  onClick={(event) => handleListItemClick(event, 0)}
                >
                  <img
                    src={data.image}
                    alt={data.title}
                    width={70}
                    height={100}
                  />
                </ListItem>

                <ListItem
                  selected={selectedIndex === 1}
                  onClick={(event) => handleListItemClick(event, 1)}
                >
                  <img
                    src={data.image}
                    alt={data.title}
                    width={70}
                    height={100}
                  />
                </ListItem>
                <ListItem
                  selected={selectedIndex === 2}
                  onClick={(event) => handleListItemClick(event, 2)}
                >
                  <img
                    src={data.image}
                    alt={data.title}
                    width={70}
                    height={100}
                  />
                </ListItem>
                <ListItem
                  selected={selectedIndex === 3}
                  onClick={(event) => handleListItemClick(event, 3)}
                >
                  <img
                    src={data.image}
                    alt={data.title}
                    width={70}
                    height={100}
                  />
                </ListItem>
                <ListItem
                  selected={selectedIndex === 4}
                  onClick={(event) => handleListItemClick(event, 4)}
                >
                  <img
                    src={data.image}
                    alt={data.title}
                    width={70}
                    height={100}
                  />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={5}>
              <Box sx={{ border: "1px solid #d4d4d4" }}>
                <img
                  src={data.image}
                  alt={data.title}
                  width={400}
                  height={550}
                />
              </Box>
            </Grid>
            <Grid item xs={5} sx={{ textAlign: "left", margin: 5 }}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 600,
                  margin: 1,
                }}
              >
                {data.title}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  margin: 1,
                }}
              >
                ${data.price}
              </Typography>
              {data.rating !== undefined ? (
                <Box sx={{ margin: 1 }}>
                  <Rating
                    name="simple-controlled"
                    value={data.rating.rate}
                    readOnly
                  />
                </Box>
              ) : (
                ""
              )}

              <Typography
                variant="p"
                sx={{
                  fontWeight: 600,
                  margin: 2,
                }}
              >
                {data.description}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  margin: 1,
                }}
              >
                Quantity
              </Typography>
              <Box
                sx={{
                  display: "flex-container",
                  justifyContent: "left",
                  alignItems: "left",
                  paddingBottom: 1,
                  margin: 1,
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
                    onClick={DecNum}
                  >
                    -
                  </Button>
                  <Button
                    sx={{
                      backgroundColor: "#ffff",
                      border: "2px solid #1976d2",
                    }}
                  >
                    {count}
                  </Button>

                  <Button
                    sx={{
                      backgroundColor: "#ffff",
                      border: "2px solid #1976d2",
                    }}
                    onClick={IncNum}
                  >
                    +
                  </Button>
                </ButtonGroup>
              </Box>
              <Box
                sx={{
                  align: "left",
                  display: "flex-container",
                  justifyContent: "left",
                  alignItems: "left",
                  margin: 1,
                }}
              >
                <Button
                  sx={{
                    background: "#e26a2c",
                    color: "#ffff",
                    paddingRight: 3,
                    paddingLeft: 3,
                  }}
                  className={Styles.add_to_cart}
                  onClick={addToCartHandler}
                  disabled={count <= 0}
                >
                  Add to cart
                </Button>
              </Box>
              <Box sx={{ margin: 2 }}>
                <Button size="small">
                  <FavoriteBorderIcon />
                </Button>
                <Button size="small">
                  <ShareIcon />
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  );
}
