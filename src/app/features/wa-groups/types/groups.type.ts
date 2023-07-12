export interface Group {
    id: string;
    name: string;
    description?: string;
    participants: string[];
    owner: string;
}