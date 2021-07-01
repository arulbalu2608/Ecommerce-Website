import React from "react";
import { connect } from "react-redux";
import Loader from "react-spinners/BeatLoader";
import { fetchItem, buyItem } from "../reduxEcart/Action";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
  Grid,
  Container,
} from "@material-ui/core";
import "./style.css";
function AllItems(props) {
  return props.loading ? (
    <div className="center">
      <Loader />
    </div>
  ) : props.error ? (
    <h2>{props.error}</h2>
  ) : (
    <div>
      <Link to="/">
        <h4> Back</h4>
      </Link>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <img height={400} width={400} src={props.item.image} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {props.item.title} - {props.item.price}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {props.item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Add to Cart
                </Button>
                <Button size="small" color="primary">
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
    item: state.detailItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItem: () => dispatch(fetchItem()),
    buyItem: (id) => dispatch(buyItem(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllItems);
