import { AxiosRequestConfig } from "axios";
import requestApi from "network/requestApi";
import { useState, useEffect } from "react";
import { ApiErrorType } from "network/requestApi";

type FetchResponseType<T> = {
    data: T | null;
    loading: boolean;
    isSuccess: boolean;
    isError: boolean;
    refetch: () => void;
    error: null | ApiErrorType;
};

const useFetch = <T = any>(config: AxiosRequestConfig<T>): FetchResponseType<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [error, setError] = useState<ApiErrorType | null>(null);

    const refetch = async () => {
        // set islaoding to true
        setLoading(true);
        // set data and succes on succes
        try {
            const result = await requestApi<T>(config);
            if (result.data) {
                setData(result.data);
            }
            setIsSuccess(true);
        } catch (e) {
            // set error on failure
            const error = e as ApiErrorType;
            setIsError(true);
            setError(error);
        }

        setLoading(false);
    };

    useEffect(() => {
        refetch();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { data, loading, isSuccess, isError, refetch, error };
};

export default useFetch;
