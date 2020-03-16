import React from "react";
import { Page } from "components/templates/page";
import {
  Grid,
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Card,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    phones: {
      padding: 24,
    },
    phoneItem: {
      borderRadius: theme.shape.borderRadius,
      "&:hover": {
        boxShadow: theme.shadows[5],
        cursor: "pointer",
      },
    },
    features: {
      padding: 16,
      backgroundColor: theme.palette.grey[100],
      marginTop: 16,
    },
    featureCard: {
      padding: 32,
    },
    paymentMethods: {
      padding: 16,
      backgroundColor: theme.palette.primary.main,
      color: "white",
    },
    payments: {
      padding: 16,
      backgroundColor: theme.palette.grey[100],
    },
    paymentCard: {
      padding: 24,
    },
  })
);

const tileData = [
  {
    img:
      "https://d3ift91kaax4b9.cloudfront.net/media/catalog/product/cache/665290da477edde86991c2fe351dfdcb/p/r/product-p010981-12052_2.jpg",
    title: "Phone 1",
    stock: "Available",
    price: "666,00€",
  },
  {
    img:
      "https://d3ift91kaax4b9.cloudfront.net/media/catalog/product/cache/665290da477edde86991c2fe351dfdcb/p/r/product-p010981-12052_2.jpg",
    title: "Phone 2",
    stock: "Available",
    price: "666,00€",
  },
  {
    img:
      "https://d3ift91kaax4b9.cloudfront.net/media/catalog/product/cache/665290da477edde86991c2fe351dfdcb/p/r/product-p010981-12052_2.jpg",
    title: "Phone 3",
    stock: "Available",
    price: "666,00€",
  },
  {
    img:
      "https://d3ift91kaax4b9.cloudfront.net/media/catalog/product/cache/665290da477edde86991c2fe351dfdcb/p/r/product-p010981-12052_2.jpg",
    title: "Phone 4",
    stock: "Available",
    price: "666,00€",
  },
  {
    img:
      "https://d3ift91kaax4b9.cloudfront.net/media/catalog/product/cache/665290da477edde86991c2fe351dfdcb/p/r/product-p010981-12052_2.jpg",
    title: "Phone 5",
    stock: "Available",
    price: "666,00€",
  },
  {
    img:
      "https://d3ift91kaax4b9.cloudfront.net/media/catalog/product/cache/665290da477edde86991c2fe351dfdcb/p/r/product-p010981-12052_2.jpg",
    title: "Phone 6",
    stock: "Available",
    price: "666,00€",
  },
  {
    img:
      "https://d3ift91kaax4b9.cloudfront.net/media/catalog/product/cache/665290da477edde86991c2fe351dfdcb/p/r/product-p010981-12052_2.jpg",
    title: "Phone 7",
    stock: "Available",
    price: "666,00€",
  },
  {
    img:
      "https://d3ift91kaax4b9.cloudfront.net/media/catalog/product/cache/665290da477edde86991c2fe351dfdcb/p/r/product-p010981-12052_2.jpg",
    title: "Phone 8",
    stock: "Available",
    price: "666,00€",
  },
];

export const Home = () => {
  const classes = useStyles();
  return (
    <Page>
      <div className={classes.phones}>
        <Grid container spacing={3}>
          {tileData.map(tile => (
            <Grid item xs={3} key={tile.title} className={classes.phoneItem}>
              <img src={tile.img} alt={tile.title} />
              <Typography>{tile.title}</Typography>
              <Typography variant='caption'>{tile.stock}</Typography>
              <Typography variant='h3' color='secondary'>
                {tile.price}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.features}>
        <Grid container spacing={2}>
          <Grid item xs>
            <Card variant='outlined' className={classes.featureCard}>
              <Typography>Delivery in 24h</Typography>
              <Typography variant='caption'>
                Estimated time for Portugal
              </Typography>
            </Card>
          </Grid>
          <Grid item xs>
            <Card variant='outlined' className={classes.featureCard}>
              <Typography>Free delivery fee</Typography>
              <Typography variant='caption'>For orders over 250€</Typography>
            </Card>
          </Grid>
        </Grid>
      </div>
      <div className={classes.paymentMethods}>
        <Typography variant='h5'>Payment Methods</Typography>
      </div>
      <div className={classes.payments}>
        <Grid container spacing={2}>
          <Grid item xs>
            <Card variant='outlined' className={classes.paymentCard}>
              <Typography>MB Way</Typography>
            </Card>
          </Grid>
          <Grid item xs>
            <Card variant='outlined' className={classes.paymentCard}>
              <Typography>Credit Card</Typography>
            </Card>
          </Grid>
          <Grid item xs>
            <Card variant='outlined' className={classes.paymentCard}>
              <Typography>PayShop</Typography>
            </Card>
          </Grid>
          <Grid item xs>
            <Card variant='outlined' className={classes.paymentCard}>
              <Typography>PayPal</Typography>
            </Card>
          </Grid>
          <Grid item xs>
            <Card variant='outlined' className={classes.paymentCard}>
              <Typography>Credit</Typography>
            </Card>
          </Grid>
        </Grid>
      </div>
    </Page>
  );
};
