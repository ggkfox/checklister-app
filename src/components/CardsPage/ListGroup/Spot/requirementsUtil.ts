import { useMemo } from "react";
import { useMultipleItemStates } from "../../../../Atoms"; // Update path
import { Parser } from "expr-eval";

// Utility functions
export const addWhitespace = (input: string): string => {
  return input.replace(/\(/g, " ( ").replace(/\)/g, " ) ").replace(/<=/g, " <= ").replace(/>=/g, " >= ").replace(/==/g, " == ").replace(/!=/g, " != ").trim();
};

export const useParsedRequirements = (requirements: string | undefined) => {
  return useMemo(() => {
    if (!requirements) return [];
    const normalizedRequirements = addWhitespace(requirements);
    return normalizedRequirements.split(" ");
  }, [requirements]);
};

export const useScopedItemStates = (listOfRequirements: string[]) => {
  const itemStates = useMultipleItemStates(listOfRequirements);
  return useMemo(() => {
    const scopedItemStates: { [key: string]: number } = {};
    listOfRequirements.forEach((token) => {
      if (itemStates[token]) scopedItemStates[token] = itemStates[token].currentState || 0;
    });
    return scopedItemStates;
  }, [listOfRequirements, itemStates]);
};

export const checkIfCanDo = (itemName: string, requirements: string | undefined, scope: any): boolean => {
  if (!requirements) return true;
  try {
    const parser = new Parser({ operators: { logical: true, comparison: true } });
    const expr = parser.parse(requirements);
    const result = expr.evaluate(scope);
    return result === true || result >= 1;
  } catch (error) {
    console.error("Error in", itemName, "requirements:", requirements);
    return false;
  }
};

// Main hook to use in component
export const useRequirementsInfo = (itemName: string, requirements: string | undefined) => {
  const listOfRequirements = useParsedRequirements(requirements);
  const scope = useScopedItemStates(listOfRequirements);
  const itemStates = useMultipleItemStates(listOfRequirements);
  const canDo = checkIfCanDo(itemName, requirements, scope);
  return { canDo, itemStates };
};
