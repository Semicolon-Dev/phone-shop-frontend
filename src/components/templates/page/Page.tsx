import React from "react";
import { Header } from "components/organisms/header";
import { SideNavigation } from "components/organisms/side-navigation";
import { useStyles } from "./Page.styles";

interface PageProps {
  children: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header title='Phone Shop' />
      <SideNavigation />
      <main className={classes.content}>{children}</main>
    </div>
  );
};
