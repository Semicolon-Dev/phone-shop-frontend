import React from "react";
import { Page } from "components/templates/page";

interface DetailsPageProps {
  children: React.ReactNode;
}

export const DetailsPage: React.FC<DetailsPageProps> = ({ children }) => {
  return <Page>{children}</Page>;
};
