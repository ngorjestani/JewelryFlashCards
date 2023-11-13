import React from "react";
import { JewelryFlashCard } from "../models/JewelryFlashCard.ts";
import { useQuery } from "@tanstack/react-query";
import { Anchor, Card, Flex, Image } from "@mantine/core";

interface IAnatometalJewelryPageProps {}

export const AnatometalJewelryPage = ({}: IAnatometalJewelryPageProps) => {
  const fetchData = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/api/jewelry/anatometal`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) throw new Error(response.statusText);

    const data: Promise<JewelryFlashCard[]> = await response.json();
    return data;
  };

  const { data } = useQuery({
    queryKey: ["anatometal"],
    queryFn: fetchData,
  });

  return (
    <Flex justify="flex-start" align="flex-start" direction="row" wrap="wrap">
      {data &&
        data.map((jewelry: JewelryFlashCard) => (
          <Card
            key={jewelry.name}
            shadow="sm"
            padding="md"
            radius="md"
            withBorder
          >
            <Card.Section>
              <Image src={jewelry.imageLink} alt={jewelry.name} />
            </Card.Section>
            <Anchor href={jewelry.link}>{jewelry.name}</Anchor>
          </Card>
        ))}
    </Flex>
  );
};
