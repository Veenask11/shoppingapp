import { Box, Container, Grid } from "@mui/material";
import Products from "./Products";
import ProductList from "./ProductList";
import FilterComponent from "./FilterComponent";
import * as React from "react";

export default function ViewProducts(props) {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [sorting, setValue] = React.useState("Sort By Price");
  const [filterData, setFilterValue] = React.useState([]);
  const [filterDataToBind, setFilterDataToBind] = React.useState([]);
  const focusHandler = (value) => {
    setValue(value.props.value);
  };
  const focusFilterHandler = (value) => {
    setFilterValue(value);
  };
  React.useEffect(() => {
    const url = "https://fakestoreapi.com/products";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);
  React.useEffect(() => {
    if (sorting === "Low to high") {
      if (filterData.length > 0) {
        filterDataToBind.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
      } else {
        data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      }
    } else {
      if (filterData.length > 0) {
        filterDataToBind.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
      } else {
        data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      }
    }
  }, [sorting, data]);

  React.useEffect(() => {
    if (filterData.length > 0) {
      const filtered = data.filter((item) => {
        return filterData.includes(
          item["category"].charAt(0).toUpperCase() + item["category"].slice(1)
        );
      });
      setFilterDataToBind(filtered);
      console.log(filtered, filterData);
    }
  }, [filterData, data]);
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Products
            type={props.type}
            data={filterData.length > 0 ? filterDataToBind : data}
            focusHandler={focusHandler}
          />
        </Grid>
      </Grid>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <FilterComponent
              type={props.type}
              data={filterData.length > 0 ? filterDataToBind : data}
              focusFilterHandler={focusFilterHandler}
            />
          </Grid>
          <Grid item xs={10}>
            <ProductList
              type={props.type}
              data={filterData.length > 0 ? filterDataToBind : data}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
