import { useEffect, useState } from 'react';

export const useFetch = (url: string) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(url, { headers: { 'content-type': 'application/json' } })
            .then((response) => response.json())
            .then(setData)
            .catch(setError)
            .finally(() => setLoading(false));
    }, [url]);

    return { data, error, loading };
};
