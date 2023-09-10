import { StandardHttpSuccessResponse } from "./standardhttpresponses";

export interface Department {
    department_id: number;
    department_name: string;
    department_type?: 'academic' | 'administrative';
}

export interface GetDepartmentsResponse extends StandardHttpSuccessResponse {
    data: Department[];
}