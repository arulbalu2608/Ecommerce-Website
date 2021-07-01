import React from "react";
import { connect } from "react-redux";
import Loader from "react-spinners/BeatLoader";
import { deleteFromCart, buyItem } from "../reduxEcart/Action";
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
function Cart(props) {
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
        <Grid container spacing={4}>
          {props.item.map((product) => {
            return (
              <Grid item key={product.id} xs={12} md={4}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="300"
                      image={product.image}
                    />
                    <CardContent>
                      <Typography variant="h6" component="h2">
                        {product.title} - {product.price}
                      </Typography>
                      <Typography variant="caption">
                        {product.category}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      onClick={() => {
                        props.deleteFromCart(product.id);
                      }}
                      size="medium"
                      variant="contained"
                      color="secondary"
                    >
                      Remove from Cart
                    </Button>
                    <Link to="/BuyNow">
                      <Button
                        onClick={() => props.buyItem(product)}
                        size="medium"
                        variant="contained"
                        color="secondary"
                      >
                        Buy Now
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
    item: state.cartItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyItem: (id) => dispatch(buyItem(id)),
    deleteFromCart: (id) => dispatch(deleteFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
