export interface Zone {
  name: string;
  type: ZoneType;
  items: Item[];
}

export interface Item {
  name: string;
  tags?: string[];
  requirements?: string[];
}

export type ZoneType = "all" | "overworld" | "dungeon";

export type AgeType = "all" | "child" | "adult";