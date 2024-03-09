import React from "react";
import { Button, Card, Center, Image, Text } from "@mantine/core";

interface IResultCardProps {
  success: boolean;
  imageLink: string;
  onNext: () => void;
}

export const ResultCard = ({
  success,
  imageLink,
  onNext,
}: IResultCardProps) => {
  return (
    <Card shadow="md" padding="md" radius="md" withBorder>
      <Card.Section>
        <Center>
          <Image src={imageLink} w="auto" fit="contain" />
        </Center>
      </Card.Section>
      <Text c={success ? "green.5" : "red.5"}>
        {success ? "Correct" : "Incorrect"}
      </Text>
      <Button variant="filled" onClick={onNext}>
        Next
      </Button>
    </Card>
  );
};
