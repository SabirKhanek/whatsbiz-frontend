export interface StandardHttpErrorResponse {
    success: false;
    message: string;
    statusCode: number;
    auth: boolean;
}