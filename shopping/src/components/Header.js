import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Styles from "../css/Link.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [total, setTotal] = React.useState(0);
  const cartData = useSelector((state) => state.shoppingBag);
  const location = useLocation();
  const [currentPath, setCurrentPath] = React.useState('/')
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

  React.useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location]);
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#e26a2c", marginBottom: "auto" }}>
        <Toolbar>
          <Box sx={{ marginLeft: "auto" }}>
            <Link to="/">
              <img
                alt="logo"
                src="https://apekshahandore.github.io/capstone_venia/static/media/logo2.3d2a9ff537d7cd20a4f0.PNG"
              />
            </Link>
          </Box>

          <Box sx={{ marginLeft: "auto", marginRight: "auto" }}  >
            <Button
              className={Styles.hover_link}
              component={Link}
              to="/"
              sx={{ color: "#ffff" }}
              
            >
             <span className={location.pathname === '/' ? Styles.hover_link_active : ''}>  Home</span> 
            </Button>
            <Button
              className={Styles.hover_link}
              component={Link}
              to="/view-products-women"
              sx={{ color: "#ffff" }}
            >
             <span className={location.pathname === '/view-products-women' ? Styles.hover_link_active : ''}>   Women</span>
            </Button>
            <Button
              className={Styles.hover_link}
              component={Link}
              to="/view-products-men"
              sx={{ color: "#ffff" }}
            >
              <span className={location.pathname === '/view-products-men' ? Styles.hover_link_active : ''}> Men</span>
            </Button>
            <Button
              className={Styles.hover_link}
              component={Link}
              to="/view-products-electronics"
              sx={{ color: "#ffff" }}
            >
              <span className={location.pathname === '/view-products-electronics' ? Styles.hover_link_active : ''}> Electronic</span>
            </Button>
            <Button
              className={Styles.hover_link}
              component={Link}
              to="/view-products-jewellary"
              sx={{ color: "#ffff" }}
            >
              <span className={location.pathname === '/view-products-jewellary' ? Styles.hover_link_active : ''}> Jewellery</span>
            </Button>
          </Box>
          <Box sx={{ marginLeft: "auto", marginRight: "auto", color: "#ffff" }}>
            <Link to="/bag" color="primary">
              <Badge
                color="primary"
                badgeContent={total}
                showZero
                sx={{ color: "#ffff" }}
              >
                <LocalMallIcon />
              </Badge>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
