export interface AuthResponseSuccess {
    jwt: string;
};

export interface AuthResponseError {
    result: string;
    message: string;
};

export interface ConfigSaveRequest {
    pairs: {
        key: string;
        value: string;
    }[]
}

export interface ConfigSaveResponse {
    key: string;
    value: number | string;
    error?: string;
}
