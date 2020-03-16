import React from "react";
import { Page } from "components/templates/page";

interface ListPageProps {
  children: React.ReactNode;
}

export const ListPage: React.FC<ListPageProps> = ({ children }) => {
  return <Page>{children}</Page>;
};
