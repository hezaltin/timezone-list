
import mapContent = require("../windowsZones.json");

export const map: ZoneMap = mapContent as any;

export type ZoneMap = ZoneMapEntry[];

export interface ZoneMapEntry {
    id: number;
    displayName: string;
    standardName: string;
  }