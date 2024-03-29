import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
} from "@material-ui/core";
import { selectTabOption } from "../features/TabOptionSlice";
import { useSelector } from "react-redux";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function VendorOptionsTab({ children, name1, name2, name3 }) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const tabOption = useSelector(selectTabOption);

  useEffect(() => {
    setValue(tabOption);
  }, [tabOption]);

  const handleChange = (event, newValue) => {
    console.log("value=>", value);
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='simple tabs example'
        >
          <Tab label={name1} {...a11yProps(0)} />
          <Tab label={name2} {...a11yProps(1)} />
          <Tab label={name3} {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      {children.map((child, i) => (
        <TabPanel value={value} index={i} key={i}>
          {child}
        </TabPanel>
      ))}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
