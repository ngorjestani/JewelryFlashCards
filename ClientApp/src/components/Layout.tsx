import React from "react";
import { AppShell, getGradient, Title, useMantineTheme } from "@mantine/core";
import { AnatometalJewelryPage } from "./AnatometalJewelryPage.tsx";

interface ILayoutProps {}

export const Layout = ({}: ILayoutProps) => {
  const theme = useMantineTheme();
  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      style={{
        background: getGradient(
          { deg: 360, from: "gray.1", to: "gray.5" },
          theme
        ),
      }}
    >
      <AppShell.Header>
        <Title order={1}>Jewelry Flash Cards</Title>
      </AppShell.Header>
      <AppShell.Main>
        <AnatometalJewelryPage />
      </AppShell.Main>
    </AppShell>
  );
};
