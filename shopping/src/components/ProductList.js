import * as React from "react";
import {
  Typography,
  Pagination,
  Stack,
  Box,
  Grid,
  Card,
  CardActions,
  Button,
  ImageListItem,
  ImageList,
  Rating,
} from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import usePagination from "./Pagination";
import { Link } from "react-router-dom";
import Styles from '../css/Link.module.css';

import { ColorRing } from "react-loader-spinner";

export default function ProductList(props) {
  const [page, setPage] = React.useState(1);
  window.scroll(0, 0);
  // const [data, setData] = React.useState([]);
  // const [loading, setLoading] = React.useState(true);
  const PER_PAGE = 9;

  const count = Math.ceil(props.data.length / PER_PAGE);
  const _DATA = usePagination(props.data, PER_PAGE);

  // React.useEffect(() => {
  //   const url = "https://fakestoreapi.com/products";
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     });
  // }, []);

  const handleChange = (event, value) => {
    window.scroll(0, 0);
    setPage(value);
    _DATA.jump(value);
  };
  return (
    <React.Fragment>
      {props.loading ? (
      <ColorRing
        visible={props.loading}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      />
      ):(
      <Box>
        <Box>
          <Grid container spacing={3}>
            {_DATA.currentData().map((item, index) => (
              <Grid item key={item.id} xs={4}>
                <Link to={`/product-details/${item.id}`}>
                  <Card>
                    <ImageList rowHeight={200}>
                      <ImageListItem
                        key={item.id}
                        cols={3}
                        sx={{ backgroundColor: "rgb(255 255 255)" }}
                      >
                        <AspectRatio objectFit="revert">
                          <img src={item.image} alt={item.title} className={Styles.zoom} />
                        </AspectRatio>
                      </ImageListItem>
                    </ImageList>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title.substring(0, 18)}
                    </Typography>
                    <CardActions>
                      <Button size="small">
                        <FavoriteBorderIcon />
                      </Button>

                      <Rating
                        name="simple-controlled"
                        value={item.rating.rate}
                        readOnly 
                      />
                      <Typography
                        variant="body2"
                        sx={{ marginLeft: 2 }}
                        color="text.secondary"
                      >
                        ${item.price}
                      </Typography>
                    </CardActions>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box sx={{ alignItems: "center" }}>
          <Stack
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Page: {page}</Typography>
            <Pagination count={count} page={page} onChange={handleChange} />
          </Stack>
        </Box>
      </Box>
      )}
    </React.Fragment>
  );
}
