import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import { ItemStateType } from "./models/Types";
import keyItems from "./assets/OOT";

const drawerAtom = atom(true);

const initStates: ItemStateType = keyItems.reduce((result: ItemStateType, group) => {
  group.forEach((icon) => {
    result[icon.name] = {
      currentState: 0,
      numOfStates: icon.states.length,
    };
  });
  return result;
}, {});

const itemStateFamily = atomFamily((iconName: string) => {
  return atom(initStates[iconName] || {});
});

export { drawerAtom, itemStateFamily };