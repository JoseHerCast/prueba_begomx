import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * The function useFetch is a custom hook in JavaScript that fetches data from a specified URL and
 * returns the data, loading status, and error message.
 * @param url - The URL of the API endpoint that the function will fetch data from.
 * @returns The `useFetch` function returns an object with three properties: `data`, `loading`, and
 * `error`. These properties are used to manage the state of the data being fetched from the provided
 * URL. The `data` property holds the fetched data, the `loading` property indicates whether the data
 * is still being fetched or not, and the `error` property holds any error message that may have
 */
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(url);
                const responseData = response.data.content || response.data;
                setData(responseData);
                setLoading(false);
            } catch (error) {
                setError(`An error occurred: ${error.message}`);
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            // Cancelar la solicitud en caso de que se desmonte el componente antes de que se complete
            const source = axios.CancelToken.source();
            source.cancel();
        };
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
