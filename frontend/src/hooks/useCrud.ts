import useAxiosInterceptor from "../helpers/jwtInterceptor.ts";
import {BASE_URL} from "../config.ts";
import {useState} from "react";

interface IuserCrud<T> {
    dataCRUD: T[],
    fetchData: () => Promise<void>,
    error: Error | null,
    loading: boolean,
}


const useCrud = <T>(initialData: T[], apiURL: string) => {
    const jwtAxios = useAxiosInterceptor()
    const [dataCRUD, setDataCRUD] = useState<T[]>(initialData)
    const [error, setError] = useState<Error | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    const fetchData = async () => {
        setLoading(true)
        return jwtAxios({
            method: 'get',
            url: `${BASE_URL}${apiURL}`
        })
            .then(({status, data}) => {
                setDataCRUD(data)
                setError(null)
            })
            .catch((error) => {
                // handle error
                setError(error)
                console.log(error);
            }).finally(() => {
                setLoading(false)
            })
    }
    return {fetchData, loading, dataCRUD, error}

}

export default useCrud
