export interface AuthResponseSuccess {
    jwt: string;
};

export interface AuthResponseError {
    result: string;
    message: string;
};

