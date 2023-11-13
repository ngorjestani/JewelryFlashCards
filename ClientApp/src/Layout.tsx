import React from "react";
import { AppShell } from "@mantine/core";
import { AnatometalJewelryPage } from "./AnatometalJewelryPage.tsx";

interface ILayoutProps {}

export const Layout = ({}: ILayoutProps) => {
  return (
    <AppShell padding="md">
      <AppShell.Main>
        <AnatometalJewelryPage />
      </AppShell.Main>
    </AppShell>
  );
};
