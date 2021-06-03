import React from "react";
import WishCard from "../components/WishCard";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

import {
  Container,
  Typography,
  TextField,
  Grid,
  Button,
} from "@material-ui/core";

const WishList = (props) => {
  const renderWishList = () => {
    if (props.wishes) {
      return props.wishes.map((wish) => {
        return (
          <Grid item sm={12} md={6}>
            <WishCard key={wish.id} wish={wish} onDelete={props.onDelete} />
          </Grid>
        );
      });
    }
  };

  return (
    <Container>
      <Typography variant="h4" color="primary" align="center" gutterBottom>
        Ønskelisten
      </Typography>
      <Box mb={2} ml={3} mr={3}>
        <Button
          component={Link}
          to="/add"
          variant="contained"
          color="primary"
          gutterBottom
        >
          Oprette
        </Button>
      </Box>
      <Box mb={2} ml={3} mr={3}>
        <TextField
          variant="outlined"
          label="Søg"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          onChange={(e) => props.getSearchResults(e.target.value)}
          value={props.searchtext}
        />
      </Box>
      <Grid container spacing={5}>
        {renderWishList()}
      </Grid>
    </Container>
  );
};

export default WishList;
