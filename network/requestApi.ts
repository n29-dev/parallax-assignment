import axios, { AxiosError, AxiosRequestConfig } from "axios";

export interface ApiErrorType {
    status: number | undefined;
    data: any;
    message: string;
}

export interface ApiResponseType<T> {
    data?: T;
    status?: number;
    error?: ApiErrorType | null;
}

async function requestApi<T>(config: AxiosRequestConfig<T>): Promise<ApiResponseType<T>> {
    const baseURL = process.env.NEXT_PUBLIC_BASE_API!;
    const url = config.url ? baseURL + config.url : baseURL;
    const method = config.method || "get";

    try {
        const res = await axios({ ...config, url, method });
        return { data: res.data, status: res.status };
    } catch (e) {
        const error = e as AxiosError;
        return {
            error: {
                status: error.response?.status,
                data: error.response?.data,
                message: error.message,
            },
        };
    }
}

export default requestApi;
