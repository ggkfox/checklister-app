import { atom, useAtom } from "jotai";
import { atomFamily } from "jotai/utils";
import { ItemStateType } from "./models/Types";
import keyItems from "./assets/OOT";

export const drawerAtom = atom(true);

export const itemStateFamily = atomFamily((iconName: string) => {
  const initStates: ItemStateType = keyItems.reduce((result: ItemStateType, group) => {
    group.forEach((icon) => {
      result[icon.name] = {
        currentState: 0,
        numOfStates: icon.states.length,
      };
    });
    return result;
  }, {});
  return atom(initStates[iconName] || {});
});

type RequirementInput = string | string[];

export const useItemStates = (listOfRequirements: RequirementInput): ItemStateType => {
  let itemStates: ItemStateType = {};
  
  const requirementsArray = Array.isArray(listOfRequirements) ? listOfRequirements : [listOfRequirements];

  requirementsArray.forEach((req) => {
    const state = useAtom(itemStateFamily(req))[0];
    itemStates[req] = state;
  });

  return itemStates;
};
