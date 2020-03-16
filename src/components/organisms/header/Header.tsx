import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import ProfileIcon from "@material-ui/icons/AccountCircleOutlined";
import { SearchBar } from "components/molecules/search-bar";
import { useStyles } from "./Header.styles";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6'>{title}</Typography>
        <SearchBar className={classes.searchBar} />
        <IconButton edge='start' color='inherit' aria-label='profile'>
          <ProfileIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
