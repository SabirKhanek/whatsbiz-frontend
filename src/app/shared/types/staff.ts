import { StandardHttpSuccessResponse } from "./standardhttpresponses";

export interface Employee {
    employee_id: string;
    employee_name: string;
    service_type: string;
    employee_cnic: string;
    current_address: string;
    permanent_address: string;
    employee_email: string;
    department: {
        department_id: number;
        department_name: string;
    };
    designation: {
        designation_id: number;
        designation_title: string;
    };
    additional_charges: {
        designation_id: number;
        designation_title: string;
        department: {
            department_id: number;
            department_name: string;
        };
    }[];
    phone_numbers: string[];
    employee_titles: string[];
    employee_committees: {
        committee_id: number;
        committee_name: string;
        employee_role: string;
    }[];
}


export interface GetEmployeesResponse extends StandardHttpSuccessResponse {
    data: Employee[]
}