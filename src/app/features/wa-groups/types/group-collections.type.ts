import { Group } from "./groups.type";

export interface GroupCollection {
    id: number;
    name: string;
    groups?: Group[];
}