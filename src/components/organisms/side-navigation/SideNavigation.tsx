import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { useStyles } from "./SideNavigation.styles";

export const SideNavigation = () => {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant='permanent'
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List>
        {["Featured", "Sales"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <Divider />
        {["Android", "Apple"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
