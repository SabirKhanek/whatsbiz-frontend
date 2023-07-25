import { Group } from "../../wa-groups/types/groups.type";

export type Ad = {
    id: number;
    imageId: string;
    adText: string;
    postedAt: EpochTimeStamp;
}

export type AdDetail = {
    id: number;
    imageId: string | null;
    adText: string;
    postedAt: EpochTimeStamp;
    groups: {
        group: Group;
        status: 'PENDING' | 'SUCCESS' | 'FAILED';
    }[]
}

export interface AdDetailWithState extends AdDetail {
    state: 'PENDING' | 'SUCCESS' | 'FAILED';
    pendingGroups?: Group[];
}