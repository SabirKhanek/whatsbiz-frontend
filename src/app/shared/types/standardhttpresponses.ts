export interface StandardHttpSuccessResponse {
    success: true;
    message: string;
    data: any;
    statusCode: number;
    auth: boolean;
}