import axios from "axios";
import {useState} from "react";

export default class YaService {
    static async getAll(limit = 10) {
        const response = await axios.get('https://forms.yandex.ru/cloud/6476ff3cc417f301c195c8d1/', {
            params: {
                _limit: limit,
                }
        })
        return response;
    }
}

export const useFetching = (callback: (arg0: any) => any) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('')

    const fetching = async (...args: any[]) => {
        try {
            setIsLoading(true)
            // @ts-ignore
            await callback(...args)
        } catch (e) {
            // @ts-ignore
            setError(e.message)

        } finally {
            setIsLoading(false)
        }
    }

    return [fetching, isLoading, error]
}