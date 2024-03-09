import { JewelryFlashCard } from "../../models/JewelryFlashCard.ts";
import { useQuery, useQueryClient } from "@tanstack/react-query";

interface UseGetAnatometalJewelry {
  jewelry?: JewelryFlashCard;
  loadingJewelry: boolean;
  invalidate: () => Promise<void>;
}

export const useGetAnatometalJewelry = (): UseGetAnatometalJewelry => {
  const queryClient = useQueryClient();

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

    const data: Promise<JewelryFlashCard> = await response.json();
    return data;
  };

  const { data, isFetching } = useQuery({
    queryKey: ["anatometal"],
    queryFn: fetchData,
  });

  const invalidate = async () => {
    await queryClient.invalidateQueries({
      queryKey: ["anatometal"],
    });
  };

  return {
    jewelry: data,
    loadingJewelry: isFetching,
    invalidate,
  };
};
