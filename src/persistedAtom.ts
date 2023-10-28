import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';

export function createPersistedAtomFamily(defaultValueFunction: (param: any) => any) {
  return atomFamily((param) => {
    const key = `family_${JSON.stringify(param)}`;
    const storedValue = localStorage.getItem(key);
    const parsedValue = storedValue ? JSON.parse(storedValue) : defaultValueFunction(param);

    const persistedAtom = atom(
      parsedValue,
      (get, set, update) => {
        const newVal = typeof update === 'function' ? update(get(persistedAtom)) : update;
        localStorage.setItem(key, JSON.stringify(newVal));
        set(persistedAtom, newVal);
      }
    );

    return persistedAtom;
  });
}