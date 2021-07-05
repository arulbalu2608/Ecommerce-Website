import React from "react";
import { connect } from "react-redux";
import Loader from "react-spinners/BeatLoader";
import { fetchItem, buyItem, addCart } from "../reduxEcart/Action";
import { useHistory } from "react-router-dom";
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
function Womens(props) {
  const history = useHistory();
  return props.loading ? (
    <div className="center">
      <Loader />
    </div>
  ) : props.error ? (
    <h2>{props.error}</h2>
  ) : (
    <div>
      <Container>
        <h2>Our Products</h2>
        <Grid container spacing={4}>
          {props.data.map((product) => {
            if (product.category === "women's clothing") {
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
                          alert("added Successfully");
                          props.addCart(product);
                        }}
                        size="medium"
                        variant="contained"
                        color="secondary"
                      >
                        Add to cart
                      </Button>

                      <Button
                        onClick={() => {
                          let id = product.id;
                          let category = product.category;
                          props.buyItem(product);
                          history.push(`BuyNow/${category}/${id}`);
                        }}
                        size="medium"
                        variant="contained"
                        color="secondary"
                      >
                        View Detail
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              );
            }
          })}
        </Grid>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchItem: () => dispatch(fetchItem()),
    buyItem: (item) => dispatch(buyItem(item)),
    addCart: (item) => dispatch(addCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Womens);
