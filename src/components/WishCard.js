import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Card,  
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { CardHeader } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from '@material-ui/core/CardContent';
import { DeleteOutlined } from "@material-ui/icons";
import EditIcon from "@material-ui/icons/Edit";

const WishCard = (props) => {
  return (
    <Container
      key={props.wish.id}
    >
      <Card>
        <CardHeader
          action={
            <>
              <IconButton
                component={Link}
                to={{
                  pathname: `/edit/${props.wish.id}`,
                  state: { wish: props.wish },
                }}
              >
                <EditIcon />
              </IconButton>

              <IconButton onClick={() => props.onDelete(props.wish.id)}>
                <DeleteOutlined />
              </IconButton>
            </>
          }
          title={props.wish.title}
        />

        <CardContent>
          <Typography component="p" ml={2} variant="body2">
            {props.wish.description}
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => window.open(props.wish.link)}
          >
            Link
          </Button>
        </CardActions>
      </Card>
      {/* <Button onClick={() => props.onDelete(props.wish.id)} text="Fjern" /> */}
    </Container>
  );
};

export default WishCard;
