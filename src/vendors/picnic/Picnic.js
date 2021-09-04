import { Typography, Divider } from "@material-ui/core";
import Paragraph from "../../utils/Paragraph";
import RestaurantSlider from "../vendorUtils/RestaurantUtils";
import { useStyles } from "../vendorStyles/styles";
import { items, text } from "./data";
import img1 from "./rest1.jpg";

export default function Picnic() {
  const classes = useStyles();
  return (
    <div id='day_two_2'>
      <div className={classes.text}>
        <Typography variant='h4' gutterBottom>
          Restaurant Picnic
        </Typography>
        <Paragraph variant={text.variant} paras={text.paras} />
        <Divider />
      </div>
      <RestaurantSlider items={items} img1={img1} />
    </div>
  );
}
