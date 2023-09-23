import { useAtom } from "jotai";
import { itemStateFamily } from "../Atoms";
import { ItemStateType } from "../models/Types";

const useItemStates = (listOfRequirements: string[]): ItemStateType => {
  let itemStates: ItemStateType = {};

  listOfRequirements.forEach((req) => {
    const state = useAtom(itemStateFamily(req))[0];
    itemStates[req] = state;
  });

  return itemStates;
}

export default useItemStates;