import { StandardHttpSuccessResponse } from "./standardhttpresponses";

export interface Student {
    student_id: string;
    student_name: string;
    department: {
        department_id: number;
        department_name: string;
    };
    session: {
        session_id: number;
        session_start_year: number;
        session_end_year: number;
    };
    student_phone_numbers: string[];
    student_father_name: string;
    student_salutation: string;
    student_cnic: string;
    student_email: string;
    student_address: string;
    semester: number;
    program: {
        program_id: string;
        program_title: string;
        program_type: 'Bachelor' | 'Master' | 'PhD' | 'Mhil';
    };
}

export interface GetStudentsResponse extends StandardHttpSuccessResponse {
    data: Student[];
}
