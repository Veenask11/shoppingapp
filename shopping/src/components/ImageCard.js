import * as React from "react";
import {
  Card,
  CardMedia,
  Typography,
  Grid,
  Container,
  Box,
  Link,
} from "@mui/material";
import Styles from '../css/Link.module.css';

export default function ImageCard() {
  const arr = [
    {
      header: "Shop Women",
      subTitle: "Lorem ipsum dolor sit amet",
      link: "/view-products-women",
      imgUrl:require('../img/women.jpg'),
      alt:"women shopping"
    },
    {
      header: "Shop Men",
      subTitle: "Lorem ipsum dolor sit amet",
      link: "/view-products-men",
      imgUrl:
      require('../img/men.jpg'),
      alt:"men shopping"
    },
    {
      header: "Jewellary",
      subTitle: "Lorem ipsum dolor sit amet",
      link: "/view-products-jewellary",
      imgUrl:
      require('../img/jewels.jpg'),
      alt:"jewellary shopping"
    },
    {
      header: "Electronics",
      subTitle: "Lorem ipsum dolor sit amet",
      link: "/view-products-electronics",
      imgUrl:
      require('../img/electronics.jpg'),
      alt:"electronics shopping"
    },
  ];
  return (
    <React.Fragment>
      <Link>
        <Container >
          <Grid container spacing={2} sx={{marginTop:'-60px'}}>
            {arr.map((list, index) => (
              <Grid item xs={3} key={"image"} className={Styles.imgCard}>
                <Link href={list.link}>
                  <Card
                    sx={{
                      position: "relative",
                      borderBottom: "8px solid #e26a2c",
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt={list.alt}
                      height="350"
                      image={list.imgUrl}
                      
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                        backgroundColor: "rgba(27,37,44,.851)",
                        fontFamily: "Source Serif Pro",
                        padding: "17px",
                        color: "#fff",
                        textAlign: "left",
                      }}
                    >
                      <Typography variant="h5" sx={{fontWeight:600}}>{list.header}</Typography>
                      <Typography variant="subtitile1">
                        {list.subTitle}
                      </Typography>
                    </Box>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Link>
    </React.Fragment>
  );
}
