import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import * as React from "react";

export default function Filter(props) {
  const [allchecked, setAllChecked] = React.useState([]);

  const handleChange = (e) => {
    if (e.target.checked) {
      setAllChecked([...allchecked, e.target.value]);
    } else {
      setAllChecked(allchecked.filter((item) => item !== e.target.value));
    }
  };

  React.useEffect(() => {
    props.focusFilterHandler(allchecked);
  }, [allchecked, props]);
  return (
    <React.Fragment>
      <Box>
        <Typography variant="h6">Filters</Typography>
        <hr />
        <Typography variant="subtitle1">Categories</Typography>
        <Box>
          <FormGroup>
            <FormControlLabel
              type="checkbox"
              control={<Checkbox onChange={handleChange} />}
              label={"Electronics"}
              value={"Electronics"}
            />

            <FormControlLabel
              type="checkbox"
              control={<Checkbox onChange={handleChange} />}
              label={"Jewelery"}
              value={"Jewelery"}
            />

            <FormControlLabel
              type="checkbox"
              control={<Checkbox onChange={handleChange} />}
              label={"Men's clothing"}
              value={"Men's clothing"}
            />

            <FormControlLabel
              type="checkbox"
              control={<Checkbox onChange={handleChange} />}
              label={"Women's clothing"}
              value={"Women's clothing"}
            />
          </FormGroup>
        </Box>
      </Box>
    </React.Fragment>
  );
}
