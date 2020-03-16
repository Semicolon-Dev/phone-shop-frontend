import React from "react";
import classnames from "classnames";
import { InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "./SearchBar.styles";

interface SearchBarProps {
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ className = "" }) => {
  const classes = useStyles();
  return (
    <div className={classnames(classes.search, className)}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder='Search…'
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
};
