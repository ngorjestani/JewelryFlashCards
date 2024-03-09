import React from "react";
import { Container } from "@mantine/core";
import { useGetAnatometalJewelry } from "../api/queries/useGetAnatometalJewelry.ts";
import { ResultCard } from "./ResultCard.tsx";
import { InputCard } from "./InputCard.tsx";

interface IAnatometalJewelryPageProps {}

export const AnatometalJewelryPage = ({}: IAnatometalJewelryPageProps) => {
  const { jewelry, loadingJewelry, invalidate } = useGetAnatometalJewelry();
  const [showResult, setShowResult] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const onSubmit = (value: string) => {
    if (jewelry) {
      setSuccess(value === jewelry.name);
      setShowResult(true);
    }
  };

  return (
    <Container w="500px">
      {jewelry && showResult ? (
        <ResultCard
          success={success}
          imageLink={jewelry.imageLink}
          onNext={async () => {
            setShowResult(false);
            setSuccess(false);
            await invalidate();
          }}
        />
      ) : (
        <InputCard
          loadingJewelry={loadingJewelry}
          jewelry={jewelry}
          onSubmit={onSubmit}
        />
      )}
    </Container>
  );
};
