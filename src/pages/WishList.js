import React from "react";

import Wish from "../components/Wish";
import { Link } from "react-router-dom";
import { Box } from "@material-ui/core";

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
            <Wish key={wish.id} wish={wish} onDelete={props.onDelete} />
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
      <Box mb={2}>
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

      <Grid container spacing={3}>
        {renderWishList()}
      </Grid>
    </Container>
  );
};

export default WishList;
