export interface Zone {
  name: string;
  type: ZoneType;
  items: Item[];
}

export interface Item {
  name: string;
  tags?: string[];
}

export type ZoneType = "all" | "overworld" | "dungeon";