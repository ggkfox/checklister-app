import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import { useAtom } from 'jotai';
import { createPersistedAtomFamily } from './persistedAtom';
import keyItems from "./assets/OOT";
import data from "./assets/OOT/spots"


const drawerAtom = atom(true);

interface ItemStateType {
  [itemName: string]: {
    currentState: number;
    numOfStates: number;
  };
}

const myStates = (() => {
  //initialize
  const itemResult = keyItems.reduce((result: ItemStateType, group) => {
    group.forEach((icon) => {
      if (icon?.states) {
        result[icon.name] = {
          currentState: 0,
          numOfStates: icon.states.length,
        };
      }
    });
    return result;
  }, {});
  const totalResults = data.zones.reduce((result: ItemStateType, zone, index) => {
    const zoneName = zone.name.replace(/\s+/g, '');
    result[`${zoneName}${index}`] = {
      currentState: 0, //spots are numbers for type uniformity, but used like booleans. 
      numOfStates: 2,
    };
    return result;
  }, itemResult);

  return totalResults;
})();

const getItemState = createPersistedAtomFamily((iconName: string) => {
  return myStates[iconName] || {};
});

const useMultipleItemStates = (listOfRequirements: string | string[]) => {
  const itemStates: { [key: string]: any } = {};
  const requirementsArray = Array.isArray(listOfRequirements) ? listOfRequirements : [listOfRequirements];
  requirementsArray.forEach((req) => {
    const [state] = useAtom(getItemState(req));
    itemStates[req] = state;
  });

  return itemStates;
};

export { drawerAtom, getItemState, useMultipleItemStates }