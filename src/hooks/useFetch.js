import { useState, useEffect } from 'react';
import axios from 'axios';

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
