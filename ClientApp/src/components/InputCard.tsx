import React from "react";
import { Button, Card, Center, Image, Loader, TextInput } from "@mantine/core";
import { JewelryFlashCard } from "../models/JewelryFlashCard.ts";
import { useInputState } from "@mantine/hooks";

interface IInputCardProps {
  loadingJewelry: boolean;
  jewelry?: JewelryFlashCard;
  onSubmit: (value: string) => void;
}

export const InputCard = ({
  loadingJewelry,
  jewelry,
  onSubmit,
}: IInputCardProps) => {
  const [inputValue, setInputValue] = useInputState("");

  return (
    <Card shadow="md" padding="md" radius="md" withBorder>
      <Card.Section>
        <Center>
          {loadingJewelry ? (
            <Loader type="dots" />
          ) : (
            <Image src={jewelry?.imageLink} w="auto" fit="contain" />
          )}
        </Center>
      </Card.Section>
      <TextInput value={inputValue} onChange={setInputValue} />
      <Button
        variant="filled"
        disabled={!inputValue}
        onClick={(e) => {
          e.preventDefault();
          onSubmit(inputValue);
        }}
      >
        Submit
      </Button>
    </Card>
  );
};
