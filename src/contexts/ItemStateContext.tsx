import { createContext, useContext } from "react";
import { ItemStateType } from "../models/Types";

export const ItemStateContext = createContext<{ itemStates: ItemStateType; incrementItemState: (itemName: string) => number } | undefined>(undefined);

export function useItemStateContext() {
  const itemStates = useContext(ItemStateContext);
  if (itemStates === undefined) {
    throw new Error("useItemStateContext must be used with a ItemStateContext.");
  }
  return itemStates;
}
